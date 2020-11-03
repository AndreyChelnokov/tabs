// Табы
function tabClick(){
    let tabContainer = document.querySelectorAll('.tab__container');
    tabContainer.forEach( item => {
        let btnContainer = item.querySelector('.tab__btns');
        let btnAll = item.querySelectorAll('.tab__btn');
        let contentContainer = item.querySelector('.tab__contents');
        let contentAll = item.querySelectorAll('.tab__content');

        btnAll.forEach( (item, i) => {
            item.addEventListener('click', () => {
                btnRemoveActive(btnAll, i);
                contentRemoveActive(contentAll, i);
            })
        });

        
        btnRemoveActive(btnAll);
        contentRemoveActive(contentAll);
    })
}
if(document.querySelectorAll('.tab__container')){
    tabClick();
}
// Убираем активный класс у таба и добавляем его
function btnRemoveActive(btnAll, i = 1){
    btnAll.forEach( item => {
        item.classList.remove('active');
    });
    btnAll[i].classList.add('active');
}
// Убираем активный класс у контента и добавляем его
function contentRemoveActive(contentAll, i = 1){
    contentAll.forEach( item => {
        item.classList.remove('active');
    });
    contentAll[i].classList.add('active');
}