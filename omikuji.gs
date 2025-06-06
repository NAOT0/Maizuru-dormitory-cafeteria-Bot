function omikuji(userId) {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD形式で取得
  const scriptProperties = PropertiesService.getScriptProperties();

  // ユーザーごとの最終実行日を取得
  const userData = JSON.parse(scriptProperties.getProperty(userId) || "{}"); // 保存されたデータを取得
  const lastExecutionDate = userData.lastExecutionDate || ""; // 最後の実行日を取得

  // 最終実行日が今日でない場合のみ「当たり」を許可
  if (lastExecutionDate !== today) {
    // 確率を調整した結果の配列（確率が高い順に並べる）
    const results = [
      "中吉", "中吉", "小吉", "小吉", "小吉", // 小吉・中吉は多く出現
      "大吉", "末吉", "凶", "凶" // 大吉・凶は少ない確率
    ];
    
    // ランダムに結果を選択
    const result = results[Math.floor(Math.random() * results.length)];

    // スクリプトプロパティを更新
    scriptProperties.setProperty(userId, JSON.stringify({
      lastExecutionDate: today,
      result: result,
    }));

    responseMessage = `${result}`; // 結果をメッセージとして返す

  } else {
    responseMessage = "今日はもう引きました！また明日挑戦してくださいね！";
  }
  
  return responseMessage;
}
