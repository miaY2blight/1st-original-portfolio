'use strict'

{
const radios=document.querySelectorAll('[type=radio]');
const text=document.querySelector('[type=text]');
const select=document.querySelector('select')
const email=document.querySelector('[type=email');
const contact=document.getElementById('contact').addEventListener('click',()=>{
  const answer=confirm('送信しますか？');
  if(answer===true){document.querySelector('textarea').value=' ';
  radios.forEach(radio=>{radio.checked=false});
  email.value=' ';select.selectedIndex=-1;text.value=''}
});

}