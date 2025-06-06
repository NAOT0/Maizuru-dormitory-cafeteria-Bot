//リッチメッセージ外食系

function handleDining(userMessage, userState, userId, userProperties) {
  let messages = [];
  
  if (userMessage === "外食！") {
    messages.push({
      type: 'flex',
      altText: '外食案内',
      contents: createRichMessage(),
    });
    userProperties.setProperty(userId, "外食"); // 状態を保存
  } else if (userState === "外食" && userMessage === "ラーメン") {
    messages.push({
      type: 'flex',
      altText: 'ラーメン案内',
      contents: ramen(),
    });
    userProperties.deleteProperty(userId);
  } else if (userState === "外食" && userMessage === "定食") {
    messages.push({
      type: 'flex',
      altText: '定食案内',
      contents: teisyoku(),
    });
    userProperties.deleteProperty(userId);
  } else if (userState === "外食" && userMessage === "寿司") {
    messages.push({
      type: 'flex',
      altText: '寿司案内',
      contents: sushi(),
    });
    userProperties.deleteProperty(userId); 
  }else if(userState === "外食" && userMessage === "打ち上げ"){
        messages.push({
      type: 'flex',
      altText: '打ち上げに使える店',
      contents: utiage(),
    });
    userProperties.deleteProperty(userId)
  }else if(userState === "外食" && userMessage === "カフェ・軽食"){
    messages.push({
      type: 'flex',
      altText: 'カフェ・軽食案内',
      contents: cafe(),
    });
    userProperties.deleteProperty(userId)
  } else if (userState === "外食") {
    messages.push({
      type: 'text',
      text: "外食検索を終了します",
    });
    userProperties.deleteProperty(userId); // 状態をリセット
  }

  return messages;
}
