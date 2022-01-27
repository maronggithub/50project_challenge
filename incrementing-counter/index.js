const counters = document.querySelectorAll('.counter');

// 定时器方法
// counters.forEach(counter => {
//   const target = counter.getAttribute('data-target');
//   let i = 0;
//   const timer = setInterval(() => {
//     const increment = parseInt(target / 50);
//     i += increment;
//     counter.textContent = i;
//     if (i >= Number(target)) {
//       clearInterval(timer);
//       counter.textContent = target;
//     }
//   }, 17);
// })

// requestAnimationFrame
counters.forEach(counter => {
  const target = counter.getAttribute('data-target');
  const increment = parseInt(target / 50);
  let i = 0;
  const counterPlus = () => {
    i += increment;
    counter.textContent = i;
    if (i<target) {
      requestAnimationFrame(counterPlus);
    } else {
      counter.textContent = target;
    }
  }
  requestAnimationFrame(counterPlus);
})