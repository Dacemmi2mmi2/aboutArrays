const htmlElements = {
    itemNavigation : document.querySelector('.itemNavigation'),
}


htmlElements.itemNavigation.addEventListener('click', event => {
    if (event.target.closest('div.itemNavigation'))
    {
        console.log(event.target);
    }
});