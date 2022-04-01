(function(){
    const slyders=[...document.querySelectorAll('.testimony__body')];
    const buttonNext=document.querySelector('#next');
    const buttonBefore=document.querySelector('#before');
    let value;
    buttonNext.addEventListener('click',()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click',()=>{
        changePosition(-1); 
    });
    const changePosition=(add)=>{
        const currentTestimony=document.querySelector('.testimony__body--show').dataset.id;
        value=Number(currentTestimony);
        value+=add;
        slyders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
        if(value === slyders.length+1 || value===0){
            value = value === 0 ? slyders.length :1;
        }

        slyders[value-1].classList.add('testimony__body--show');
    }
})();