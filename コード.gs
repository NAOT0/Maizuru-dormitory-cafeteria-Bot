// LINEチャネルのアクセストークン
const LINE_TOKEN = ''; //アクセストークンを入力

// LINE API URL
const LINE_URL = 'https://api.line.me/v2/bot/message/reply';

// postリクエストを受け取ったとき実行される関数
function doPost(e) {
  try {
    // リクエストの解析
    const event = JSON.parse(e.postData.contents).events[0];
    if (!event) throw new Error("イベントデータが存在しません。");

    const replyToken = event.replyToken; // LINE返信用のトークン
    const userMessage = event.message.text; // ユーザーのメッセージ
    const userId = event.source.userId; // ユーザーIDを取得
    const userProperties = PropertiesService.getUserProperties(); // ユーザーごとのプロパティ管理
    let userState = userProperties.getProperty(userId) || ""; // 状態を取得
    //曜日の処理の関係から消せない
    const date = new Date();
    const dow = date.getDay();

    const todayfileId = getTodayImage()
    const tomorrowFileId = getTomorrowImage()
    let messages = [];
    // ユーザーのメッセージに応じた応答
    if (userMessage === "今日の献立は？") {


      messages.push({
        type: 'image',
        originalContentUrl: `https://drive.google.com/uc?id=${todayfileId}`,
        previewImageUrl: `https://drive.google.com/uc?id=${todayfileId}`,
      });
      if (dow === 3) {
        messages.push({
          type: 'text',
          text: '欠食届は今日までです\nhttps://gaihaku-maizuru.mogsmile.com/gaihaku/',
        });
      }
    } else if (userMessage === "明日の献立は？") {
      messages.push({
        type: 'image',
        originalContentUrl: `https://drive.google.com/uc?id=${tomorrowFileId}`,
        previewImageUrl: `https://drive.google.com/uc?id=${tomorrowFileId}`,
      });

      if (dow === 2) {
        messages.push({
          type: 'text',
          text: '欠食届は明日までです！\n忘れないようにしましょう',
        });
      }
    } else if (userMessage === "おみくじ") {
      const omikujiResult = omikuji(userId);
      messages.push({
        type: "text",
        text: omikujiResult,
      });
    } else if (userMessage === "外食！" || userState === "外食") {
      messages = handleDining(userMessage, userState, userId, userProperties);

      
    }else if(userMessage === "登録"){

      messages = handleRegisterInit(userId, userProperties);
    }else if(userState === "登録"&& event.message.type === 'text'){
      handleRegisterShopName(event, userId, userProperties)
    messages.push({
      type: 'flex',
      altText: 'キャンセル',
      contents: cancel(),
    });

    } else if (userState === "店名登録済み" && event.message.type === 'image') {

      messages = handleImageRegistration(event.message.id, userId, userProperties);
    } else if (userMessage === "キャンセル") {

      messages = handleCancel(userId, userProperties);

    } else if(userState === "登録"||userState === "店名登録済み"){
      messages.push({
        type: 'text',
        text: '画像の送信、または「キャンセル」と入力してください。',
      });
    }

    else{
          messages.push({
            type: 'text',
            text: '「今日の献立は？」または「明日の献立は？」と入力してください。',
  });
      }

    // LINE API にリクエストを送信
    UrlFetchApp.fetch(LINE_URL, {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${LINE_TOKEN}`,
      },
      method: 'post',
      payload: JSON.stringify({
        replyToken: replyToken,
        messages: messages,
      }),
    });

    return ContentService.createTextOutput('OK');
  } catch (error) {
    Logger.log(`Error: ${error.message}`);
    return ContentService.createTextOutput('Error').setMimeType(
      ContentService.MimeType.TEXT
    );
  }
}
