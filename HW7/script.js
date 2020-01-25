let Name;
nameBN.onclick = () => {
    Name = document.getElementById("inputName").value;
    document.getElementById("inputName").disabled = true;
}
function subMessage(){
    let newMassag = document.getElementsByClassName('chatText')[0];
    const author = document.getElementById("inputAthor").value
    const text = document.getElementById("areatext").value
   
    document.getElementById("inputAthor").value = '';
    document.getElementById("areatext").value = '';

    const addClassIfMy = (className) => {
        if(author === Name){
            return `${className} isMyMessage`;
        }
         return className;
    }
    newMassag.append(createDivWithAthorText(`Author: ${author}`,
    addClassIfMy(`author`)
        )
    );
    newMassag.append(createDivWithAthorText(`Massage: ${text}`, addClassIfMy(`text`)
        )
    );
}
const createDivWithAthorText = (value, className )=>{
    let div = document.createElement('div');
    div.className = className;
    div.append(document.createTextNode(value));
    return div;
    };
    subMBNT.onclick = () => {
        document.querySelector('.loader').style.display= 'block';
        setTimeout(subMessage, 1000);
        setTimeout(() => document.querySelector('.loader').style.display= 'none', 1000);
        }
    clearMBNT.onclick = () => document.getElementsByClassName("chatText")[0].innerHTML='';

    const containerTimer = document.body
    var counter = 0;
    setInterval(() => { 
        counter++;
        if(counter==35){
            alert("Получилось")
        }
    }, 1000);
    
    containerTimer.addEventListener('mouseover', () =>{
        counter = 0;
    } )