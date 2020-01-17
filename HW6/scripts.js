// **************H6-task-1***********************
function camelize(str) { // Эта функция первую букву которая идет после "-" заглавной
    var str1 = str.split("-")
    let str2 = "";
    var newStr = "";
    for(i=0; i<str1.length; i++){
        if (i>0) {
            let test = str1[i]
            newStr = test[0].toUpperCase() + test.slice(1);
            str2 += newStr;
        }else{
            str2 += str1[i];
        }
    }
    document.write('<div class="hw_6-1"">'+str2+"\n"+'</div>')
    
}
camelize("background-color")
camelize("list-style-image")
camelize("-webkit-transition")

// **************H6-task-1_v2***********************

function camelize2(str) { // Эта функция делает все первые буквы слов заглавными.
    var str1 = str.split("-")
    var newStr = "";
    if (str1[0] == "") { // Если масив начинается с символа "-" то включается это условие.
        str1 = str1.slice(1) // здесь массив перезаписывается с первого индекса что бы убрать символ "-"
            for(let strUpper of str1){
                let str2 = strUpper;
                newStr += str2[0].toUpperCase() + str2.slice(1);
            }
    }else{
    for(let strUpper of str1) {
        let str2 = strUpper;
        newStr += str2[0].toUpperCase() + str2.slice(1);
    }
}
    document.write('<div class="hw_6-1-2"">'+newStr+"\n"+'</div>')
}
camelize2("background-color")
camelize2("list-style-image")
camelize2("-webkit-transition")

// **************H6-task-2***********************

let vasya = {name: " Вася", age: 25};
let petya = {name: " Петя", age: 30};
let masha = {name: " Маша", age: 28};
let user = [vasya, petya, masha];
let names = [];
    for(let i = 0; i< user.length; i++){
        names[i] = user[i].name;
    }
    document.write('<div class="hw_6-2"">'+names+'</div>')

// **************H6-task-3***********************

let vasya2 = {name: "Вася", surname: "Пупкин", age: 25, id: 1 };
let petya2 = {name: "Петя", surname: "Иванов", age: 30, id: 2 };
let masha2 = {name: "Маша", surname: "Петрова", age: 28, id: 3 };

let user2 = [vasya2, petya2, masha2];
let userMapped = [];

    for(let i = 0; i< user2.length; i++){
        userMapped[i] = {fullName: user2[i].name+" "+user2[i].surname, id: user2[i].id}
    }
    document.write('<div class="hw_6-3"">'+userMapped[1].fullName+", id:"+userMapped[1].id+'</div>')
