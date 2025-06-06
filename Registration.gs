var FOLDER_ID = ''; // Google Drive フォルダのIDを指定
var ACCESS_TOKEN = '';

//ユーザが店舗登録をするときの関数
//自分のドライブに直接保存する形なのでめちゃくちゃ危険

function handleRegisterInit(userId, userProperties) {
  userProperties.setProperty(userId, "登録"); // 状態を保存
  return [{
    type: 'text',
    text: 'あなたの知っているお店を登録します。店名を送信してください。\n操作を取り消す場合キャンセルを二回入力してください。',
  }];
}
function handleRegisterShopName(event, userId, userProperties) {
  const shopName = event.message.text;  // 入力された店名を取得
  userProperties.setProperty(userId, "店名登録済み"); 
  userProperties.setProperty(userId + '_shopName', shopName);  // 店名を保存
}

/**
 * 画像を取得し、Google Drive に保存
 */
function handleImageRegistration(messageId, userId, userProperties) {
  try {
    const img = getImage(messageId, userId, userProperties);  // 店名をファイル名に使用
    const url = saveImage(img);  // 画像をGoogle Driveに保存
    return [{
      type: 'text',
      text: url ? `登録されました` : "登録に失敗しました。",
    }];
  } catch (error) {
    Logger.log(`画像登録エラー: ${error.message}`);
    return [{
      type: 'text',
      text: '登録中にエラーが発生しました。',
    }];
  }
}

/**
 * 画像取得用
 */
function getImage(id, userId, userProperties) {
  const shopName = userProperties.getProperty(userId + '_shopName');  // 店名を取得
  if (!shopName) {
    throw new Error("店名が登録されていません。");
  }

  const url = `https://api-data.line.me/v2/bot/message/${id}/content`;
  const response = UrlFetchApp.fetch(url, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    method: 'get',
  });

  if (response.getResponseCode() !== 200) {
    throw new Error(`LINE API から画像を取得できませんでした。ステータス: ${response.getResponseCode()}`);
  }

  const contentType = response.getHeaders()['Content-Type'];
  const extension = contentType.split('/')[1];  // 拡張子を取得
  return response.getBlob().setName(`${shopName}.${extension}`);  // 店名をファイル名に
}


/**
 * Google Drive に画像を保存
 */
function saveImage(blob) {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const file = folder.createFile(blob);
    return file.getUrl();
  } catch (error) {
    Logger.log(`画像保存エラー: ${error.message}`);
    return false;
  }
}

/**
 * 登録プロセスをキャンセル
 */
function handleCancel(userId, userProperties) {
  userProperties.deleteProperty(userId); // 状態をリセット
  return [{
    type: 'text',
    text: '登録をキャンセルしました。',
  }];
}
