
let tempOut ;
let prNum = [];
while(prNum.length < 4){
    let newPrNum = Math.floor(Math.random() * 10);  // случайное число загаданное компьютером
    if (prNum.indexOf(newPrNum) < 0){
        prNum.push(newPrNum);
    }      
} 
  
tempOut = document.getElementById('temp-out'); // вывод этого числа на экран
tempOut.innerHTML = "Загаданное число :" + prNum;
console.log(prNum)  

function f1 () {
    let num = [];
    let out;
    let bull = 0;
    let cow = 0;

    num = document.getElementById('mynum').value ; // вводим число
    out = document.getElementById('out'); // выводим быков и коров

    var arr = num.toString(10).replace(/\D/g, '0').split('').map(Number);// переводим число ввода в массив
    
    console.log(arr)
    for (let i=0; i < prNum.length; i++){
        console.log(arr[i])
        console.log(prNum[i])
        if (arr[i]===prNum[i]){
            bull +=1;
        }else if (prNum.includes(arr[i])){
            cow +=1;
        }
    }; 

    if (4 === bull) {
        out.innerHTML = 'Вы угадали !!!';
    } else {
        out.innerHTML = 'Вы ввели : ' + cow + "-" +  "коровы" + " ; " + bull + "-" +  "быка";
    } 

};




