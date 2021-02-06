const htmlElements = {
    main : document.querySelector('.mainContainer'),
    blockNavigation : document.querySelector('.blockNavigation'),
    itemsNavigation : document.querySelector('.itemNavigation'),
    itemNav : document.querySelectorAll('.nav'),
    itemText : document.querySelectorAll('.textContent'),
}


const positionContent = function positionBlockscontent(paramCont)
{
    htmlElements.itemText.forEach(item => {
        item.style.left = 150 + '%';
        if(item.classList[0].slice(12) === paramCont.slice(5)){
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


// for mobile ======
const positionBlockNav = function closeBlockNavigation(paramWidth)
{
    if (paramWidth !== 0){
        let widthBlockNav = Number(paramWidth.split('').reverse().splice(2).reverse().join(''));
        htmlElements.blockNavigation.style.left = -widthBlockNav + 'px';
    }else{
        htmlElements.blockNavigation.style.left = paramWidth + 'px';
    }
}
// =======


htmlElements.main.addEventListener('click', event => {
    if (event.target.closest('div.itemNavigation')){
        if(event.target.id === 'closeMenuItemNavigation'){
            positionBlockNav(getComputedStyle(htmlElements.blockNavigation).width);
        }else{
            positionContent(event.target.id);
            positionNav(event.target.id);
        }
    }
    event.target.closest('div.openBlockNavigation') ? positionBlockNav(0) : '';
});