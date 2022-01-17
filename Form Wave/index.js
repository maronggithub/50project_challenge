const labels = document.querySelectorAll('.form-control label'); /*获得一个数组*/

labels.forEach(label => {
  // 获取每个label中的字符串，然后把字符串分割为数组，然后数组中每个元素拼成span元素，然后把各个span数组元素合并后放在label中 
  label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})
