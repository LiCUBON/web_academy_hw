buttR.onclick = () =>  {
    const test = Number(document.querySelector('.warper').style.left.slice(0, -2));
    document.querySelector('.warper').style.left = `${test -882}px`
    if(test==-2646){
        document.querySelector('.warper').style.left = `${test +2646}px`
    }
};
buttL.onclick = () =>  {
    const test = Number(document.querySelector('.warper').style.left.slice(0, -2));
    document.querySelector('.warper').style.left = `${test +882}px`
    if(test==0){
        document.querySelector('.warper').style.left = `${test -2646}px`
    }
};