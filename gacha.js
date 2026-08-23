'use strict';
// HTMLのボタンと結果・画像エリアを取得する
const button = document.getElementById('gacha-button');
const resultArea = document.getElementById('result-area');
const imageArea = document.getElementById('image-area');

button.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 100);
  let resultText = '';
  let imageFileName = ''; // 装備の画像ファイル名を入れる変数

 if (randomNum < 5) {
    resultText = '【SSR】強そうな剣';
    imageFileName = 'ken.png'; // SSR用の画像
  } else if (randomNum < 20) {
    resultText = '【SR】ちょっと強そうな杖';
    imageFileName = 'tsue.png'; // SR用の画像
  } else if (randomNum < 50) {
    resultText = '【R】鉄の鎧';
    imageFileName = 'armor_platearmor.png'; // R用の画像
  } else {
    resultText = '【N】やくそう';
    imageFileName = 'yakuso_01.png'; // N用の画像
  }

  // テキストを画面に表示
  resultArea.innerText = resultText + ' が出ました！';

  // 当たった装備の画像を画面に表示
  imageArea.innerHTML = `<img src="${imageFileName}" alt="${resultText}" class="result-img" width="150">`;
});
