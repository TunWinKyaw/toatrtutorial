const buttonTag=document.querySelector('.btn');
const parentTag=document.querySelector('.parent');

const openToasdTag= () => {
    parentTag.innerHTML="";
    const toastAlertTag=document.createElement('div');
    toastAlertTag.append('Your file was succesfully uploaded!');
    toastAlertTag.classList.add('toastAlert');
    parentTag.append(toastAlertTag);
    toastAlertTag.style.bottom=`-${toastAlertTag.offsetHeight}px`;
    setTimeout(()=>{
    toastAlertTag.style.bottom=`0px`;
    },100);
    setTimeout(()=>{
        toastAlertTag.style.bottom=`-${toastAlertTag.offsetHeight}px`;
        },3000);
};

buttonTag.addEventListener('click',()=>{
    openToasdTag();
});