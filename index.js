const pairBtn = document.querySelector('.random-pair');
const oneBtn = document.querySelector('.random-one');

const names = [
  'Ahmed Safi',
  'Hassan Al-Najjar',
  'Lina Jamal',
  'mariam isa',
  'Abeer Karam',
  'Ahmad Salah',
  'Alaa Abu Swaierh',
  'Ali Dahdouh',
  'Lina Ebeid',
  'Mohammed Alghazali',
  'Mohammed Flaifel',
  'Mohammed Irheem',
  'Muhammad Abdulhadi',
  'omar dahdouh',
  'Rawan',
  'Rehab Ali',
];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

let stds1 = document.querySelector('.group-1');
let stds2 = document.querySelector('.group-2');

function clearData() {
  while (stds1.firstChild) stds1.removeChild(stds1.firstChild);
  while (stds2.firstChild) stds2.removeChild(stds2.firstChild);
}

pairBtn.addEventListener('click', event => {
  clearData();
  stds1 = document.querySelector('.group-1');
  stds2 = document.querySelector('.group-2');
  let shuffled = shuffleArray(names);
  shuffled.forEach((e, index) => {
    let p = document.createElement('p');
    p.innerText = e;
    if (index > 7) stds2.appendChild(p);
    else stds1.appendChild(p);
  });
});

oneBtn.addEventListener('click', event => {
  clearData();
  const p = document.createElement('p');
  p.textContent = names[Math.floor(Math.random() * 17)];
  stds1.appendChild(p);
});
