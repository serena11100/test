'use strict';
const button = document.getElementById('gacha-button');
const resultArea = document.getElementById('result-area');

button.addEventListener('click', () => {
  // 0〜99のランダムな数字を生成
  const randomNum = Math.floor(Math.random() * 100);
  let result = '';

  // 確率の振り分け（数字の範囲でレア度を決める）
  if (randomNum < 5) {
    result = '【SSR】強そうな剣';
  } else if (randomNum < 20) {
    result = '【SR】ちょっと強い魔法の杖';
  } else if (randomNum < 50) {
    result = '【R】鉄の鎧';
  } else {
    result = '【N】やくそう';
  }

  // 結果を画面に表示
  resultArea.innerText = result + ' が出ました！';
});
