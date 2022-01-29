const remained = document.querySelector('.remained');
const liters = document.querySelector('#liters');
const percentage = document.getElementById('percentage');
const cups = document.querySelector('.cups');

cups.addEventListener('click', e => {
  if (e.target.classList.contains('cup-small')) {
    const index = e.target.getAttribute('data-index');
    hightCups(Number(index));
  }
})

function hightCups(idx) {
  const smallCups = cups.children;
  if (smallCups[idx].classList.contains('full') && !smallCups[idx+1]?.classList?.contains('full')) {
    idx--;
  }

  [...smallCups].forEach((item, index) => {
    if (index <= idx) {
      item.classList.add('full');
    } else {
      item.classList.remove('full');

    }
  })
  updateCups(idx);
}

function updateCups(idx) {
  const fillCups = idx + 1;
  const totalCups = cups.children.length;
  if (fillCups > 0) {
    percentage.style.height = `${fillCups / totalCups * 260}px`;
    percentage.textContent = `${fillCups / totalCups*100}%`;
  } else {
    percentage.style.height = `0px`;
  }

  if (fillCups === totalCups) {
    remained.style.height = '0px';
  } else {
    liters.textContent = `${2-(fillCups / totalCups)*2}L`;
    
  }

}

updateCups(-1);