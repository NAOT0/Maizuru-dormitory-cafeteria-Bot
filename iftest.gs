function getNextDate() {
  const today = new Date(); // 現在の日付を取得
  today.setDate(today.getDate() + 1); // 次の日に設定
  Logger.log(today); // ログに出力
  return today; // 次の日付を返す
}
