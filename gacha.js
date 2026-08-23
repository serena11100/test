button.addEventListener('click', () => {
  const randomNum = Math.floor(Math.random() * 100);
  let resultText = '';
  let imageFileName = ''; // 画像の名前を入れる変数

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

  // 画像を画面に表示（HTMLのimgタグをJSで動的に作る方法など）
  const imageArea = document.getElementById('image-area');
  imageArea.innerHTML = `<img src="${imageFileName}" alt="${resultText}" class="result-img">`;
});
