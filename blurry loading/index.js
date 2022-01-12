const loadText = document.querySelector('.loading-text');
const bg=document.querySelector('.bg');

// 因为数字在变化，所以定义一个变量，用来存放变化的数字
let load=0;

// 用一个定时器，让数字在规定时间内增加到百分之百,
let time=setInterval(blurring,30)  //每隔30s执行blurring这个函数

function blurring(){
  load++;
  loadText.innerText = `${load}%`;
  loadText.style.opacity=1-load/100;
  //模糊度从30px到0变化
  bg.style.filter = `blur(${30-load/100*30}px)`;
  // 当到大99的时候让这个定时器停止
  if(load >99){
    clearInterval(time);

  }

}
