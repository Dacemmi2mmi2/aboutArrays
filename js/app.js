const htmlElements = {
    itemsNavigation : document.querySelector('.itemNavigation'),
    itemNav : document.querySelectorAll('.nav'),
    itemText : document.querySelectorAll('.textContent'),
}


const positionContent = function positionBlockscontent(paramCont)
{
    htmlElements.itemText.forEach(item => {
        item.style.left = 150 + '%';
        if(item.classList[0].slice(12) === paramCont.slice(5))
        {
            item.style.display = 'block';
            show(item);
        }
    });

    function show (element)
    {
        setTimeout(() => {
            element.style.left = 0;
            htmlElements.itemText.forEach(el => {
                el !== element ? el.style.display = 'none' : '';
            });
        }, 600);
    }
}


const positionNav = function positionBlocksNavigation(paramNav)
{
    htmlElements.itemNav.forEach(item => {
        item.style.left = -150 + '%';
        item.classList[0].slice(10) === paramNav.slice(5) ? item.style.left = 0 : '';
    });
}


htmlElements.itemsNavigation.addEventListener('click', event => {
    if (event.target.closest('div.itemNavigation'))
    {
        positionContent(event.target.id);
        positionNav(event.target.id);
    }
});