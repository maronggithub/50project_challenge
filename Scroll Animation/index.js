const boxs = document.querySelectorAll('.box');

// 给滑动条添加监听事件,当滑过整个页面的五分之四时下一个box才会显示出来
window.addEventListener('scroll',()=>{
  const triggerBottom= window.innerHeight / 5 * 4;
  // 遍历盒子到页面顶部的距离
  boxs.forEach((item)=>{
    const boxTop= item.getBoundingClientRect().top;
    if(boxTop < triggerBottom){
      item.classList.add('show')
    }else{
      item.classList.remove('show')
    };
  });
});


