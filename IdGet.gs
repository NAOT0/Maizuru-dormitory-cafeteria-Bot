//献立情報の画像のドライブ上のIDをゲットする関数

function getFiles() {
  // フォルダの指定
  const folderId = '1wICkq4ZF-s4xJZocypTAhuL8_8EYCrP1';  // フォルダIDを指定
  
  // フォルダ内のすべてのファイルを取得
  const folder = DriveApp.getFolderById(folderId);
  const files = folder.getFiles();
  
  // ファイル情報を格納する配列
  let fileList = [];
  
  // 各ファイルの情報を配列に格納
  while (files.hasNext()) {
    let file = files.next();
    let fileName = file.getName(); // ファイル名
    let fileId = file.getId(); // ファイルID
    
    // 拡張子を除いたファイル名を取得
    let baseFileName = fileName.split('.')[0];
    
    // ファイル名が空でないことを確認してから格納
    if (baseFileName) {
      fileList.push({ baseFileName, fileId });
    }
  }

  // ファイル名を基にソート（数字を考慮したソート）
  fileList.sort(function(a, b) {
    // 正規表現で数字部分を抽出して比較
    const aNum = a.baseFileName.match(/\d+/g);
    const bNum = b.baseFileName.match(/\d+/g);
    
    if (aNum && bNum) {
      // 数字部分が存在する場合、数字を比較
      return parseInt(aNum.join(''), 10) - parseInt(bNum.join(''), 10);
    } else {
      // 数字部分がなければ、文字列として比較
      return a.baseFileName.localeCompare(b.baseFileName);
    }
  });

  // ソートされたファイル情報をテキスト形式に変換
  let output = 'ファイル名(拡張子なし), ファイルID\n';
  fileList.forEach(function(file) {
    output += `${file.baseFileName}, ${file.fileId}\n`;
  });
  
  // 出力先フォルダの指定
  const outputFolder = DriveApp.getFolderById('1S-diQmS8048GfXvxju3XYGpXKtQ5BC8X'); // 同じフォルダに保存する場合
  const fileName = 'file_list.txt';  // 保存するテキストファイル名

  // テキストファイルを作成して書き込み
  const textFile = outputFolder.createFile(fileName, output);

  console.log(`テキストファイルを保存しました: ${textFile.getUrl()}`);
}