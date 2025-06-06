//画像の登録を行う

const images = {
  //その月の画像リンクを埋め込む
  "05": 	[

]
,
  // 他の月も同様に追加
};

// 今日の画像を取得する関数
function getTodayImage() {
  const today = new Date();
  const currentMonth = String(today.getMonth() + 1).padStart(2, '0'); // 現在の月 (01, 02,...)
  const currentDay = today.getDate(); // 今日の日付

  const currentImages = images[currentMonth]; // 今月の画像リスト
  const todayImage = currentImages && currentImages[currentDay - 1]

  Logger.log(`Today's Image: ${todayImage}`);
  return todayImage;
}

// 明日の画像を取得する関数
function getTomorrowImage() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1); // 日付を1日進める

  const nextMonth = String(tomorrow.getMonth() + 1).padStart(2, '0'); // 明日の月
  const nextDay = tomorrow.getDate(); // 明日の日付

  const nextImages = images[nextMonth]; // 明日の月の画像リスト
  const tomorrowImage = nextImages && nextImages[nextDay - 1]

  Logger.log(`Tomorrow's Image: ${tomorrowImage}`);
  return tomorrowImage;
}
