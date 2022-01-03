const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circles=document.querySelectorAll('.circle');

// 设置一个全局变量，因为刷新页面后第一个元素是显示的
let currentActive = 1;
// 当点击next的按钮式currentactive就会滚动到2，给next按钮做事件监听
next.addEventListener('click',()=>{
  currentActive++;
  update();
});
prev.addEventListener('click',()=>{
  currentActive--;
  if(currentActive < 1){
    currentActive = 1;
  }
  update();
});
function update(){
  circles.forEach((circle,index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    }else{
      circle.classList.remove('active');
    }
  })
  // const actives = document.querySelectorAll('.active');
  progress.style.width=(currentActive - 1)/(circles.length-1)*100+'%';
  if(currentActive===1){
    prev.disabled=true;
  }else if(currentActive===4){
    next.disabled=true;
  }else {
    prev.disabled=false;
    next.disabled=false;
  }
};

