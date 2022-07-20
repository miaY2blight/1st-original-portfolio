'use strict'
{
  {
//メニューの処理
const extend=document.getElementById('extend');
const more=document.getElementById('more');
let count=1;
const more2=document.getElementById('more2');
const more3=document.getElementById('more3');
more.addEventListener('click',(e)=>{
  e.preventDefault();
  extend.classList.toggle('more');
  count++;
  if(count%2===0){
  more2.src='img/closing.png';
  more3.textContent='閉じる'}
  else{more2.src='img/completion.png';
  more3.textContent='その他'}
});

//heroの処理
const heros=['img/golf.jpeg','img/fragment.jpg','img/newaction.jpg',"img/shopping.jpg",'img/realcat.jpg']
const heroTitle=['関連ゲーム情報','8周年イベント','4年ぶりの新職業','人気グッズ多数','街にキャラが登場']
let currentIndex=1;
const hero =document.getElementById('hero');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const tit=document.getElementById('heroTitle')
prev.addEventListener('click',()=>{
  if(currentIndex===0){currentIndex=heros.length-1;hero.src=heros[currentIndex];tit.textContent=heroTitle[currentIndex]}
  else{currentIndex--;
  hero.src=heros[currentIndex];tit.textContent=heroTitle[currentIndex]}
})
next.addEventListener('click',()=>{
  if(currentIndex===heros.length-1)
  {currentIndex=0;hero.src=heros[currentIndex];tit.textContent=heroTitle[currentIndex]}
  else{currentIndex++;
  hero.src=heros[currentIndex];tit.textContent=heroTitle[currentIndex]}
})
hero.src=heros[currentIndex];tit.textContent=heroTitle[currentIndex]
setInterval(()=>{next.click()},8000)

  }

//islandの処理
{
let currentIndex1=0;
let currentIndex2=1;
let currentIndex3=2;
const area1=document.getElementById('area1');
const area2=document.getElementById('area2');
const area3=document.getElementById('area3');
const former1=document.querySelector('.former1');
const former2=document.querySelector('.former2');
const former3=document.querySelector('.former3');
const latter1=document.querySelector('.latter1');
const latter2=document.querySelector('.latter2');
const latter3=document.querySelector('.latter3');
const islands=['img/skientia1.jpg','img/joka1.jpg','img/kujo1.jpg','img/skientia2.jpg','img/joka2.jpg','img/kujo2.jpg','img/skientia3.jpg','img/joka3.jpg','img/kujo3.jpg']
area1.src=islands[0];area2.src=islands[1];area3.src=islands[2];
former1.addEventListener('click',()=>{
  if(currentIndex1===0){currentIndex1=islands.length-3;area1.src=islands[currentIndex1];}else{currentIndex1-=3; area1.src=islands[currentIndex1];}
})
former2.addEventListener('click',()=>{
  if(currentIndex2<2){currentIndex2=islands.length-2;area2.src=islands[currentIndex2];}else{currentIndex2-=3; area2.src=islands[currentIndex2];}
})
former3.addEventListener('click',()=>{
  if(currentIndex3<3){currentIndex3=islands.length-1;area3.src=islands[currentIndex3];}else{currentIndex3-=3; area3.src=islands[currentIndex3];}
})
latter1.addEventListener('click',()=>{
  if(currentIndex1>=islands.length-3)
  {currentIndex1=0;area1.src=islands[currentIndex1];}
  else{currentIndex1+=3;area1.src=islands[currentIndex1];}
})
latter2.addEventListener('click',()=>{
  if(currentIndex2>=islands.length-2)
  {currentIndex2=1;area2.src=islands[currentIndex2];}
  else{currentIndex2+=3;area2.src=islands[currentIndex2];}
})
latter3.addEventListener('click',()=>{
  if(currentIndex3>=islands.length-1)
  {currentIndex3=2;area3.src=islands[currentIndex3];}
  else{currentIndex3+=3;area3.src=islands[currentIndex3];}
})
}

// actionエリア
{
  document.querySelectorAll('.left').forEach(elm => {
    elm.onclick = function () {
      let ul = elm.parentNode.querySelector('ul');
      ul.scrollLeft -= ul.clientWidth;
    };
  });
  document.querySelectorAll('.right').forEach(elm => {
    elm.onclick = function () {
      let ul = elm.parentNode.querySelector('ul');
      ul.scrollLeft += ul.clientWidth;
    };
  });

}
}
