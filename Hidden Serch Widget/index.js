const search=document.querySelector('.search');
const btn=document.querySelector('button');
const input=document.querySelector('input');

btn.addEventListener('click',()=>{
  search.classList.toggle('active');  //OFFからONの状態に切り替える機能を持つtoggle（トグル）ボタンのことを意味します。
  input.focus();    // 当点击所搜按钮后，光标自动移动到搜索框
})