const textarea = document.getElementById('textarea');
const tagsEl = document.getElementById('tags');

//实时获得输入的内容//
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value);
    if (e.key === 'Enter') {
        randomSelect();
    }
})
//遍历每个输入的项目，排除掉空项目并且删除掉每个标签前后的空格“
function createTags(input) {
    const tags = input.split('，').map(tag => tag.trim()).filter(tag => tag !== '');
    //每次产生标签之前，需要清空一下已经产生的标签//
    tagsEl.innerHTML = ''
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

//因为随机选择被执行了多次，所以需要设置定时器，一定时间后激发一次随机选择函数//
function randomSelect() {
    const interval = setInterval(() => {
        const randomTag = pickRandomSelect();
        if (randomTag !== undefined) {
            highlightTag(randomTag);
            setTimeout(() => {
                unhighlight(randomTag);
            }, 100);
        }
    }, 100);
    const times = 30;
    setTimeout(() => {
        clearInterval(interval);
        setTimeout(() => {
            const randomTag = pickRandomSelect();
            if (randomTag !== undefined) {
                highlightTag(randomTag);
            }
        }, 100);

    }, times * 100);
}

function pickRandomSelect() {
    const tags = document.querySelectorAll('.tag');
    return tags[parseInt(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unhighlight(tag) {
    tag.classList.remove('highlight');
}