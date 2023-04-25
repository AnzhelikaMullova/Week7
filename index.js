let n = 123;

let numbers = String(n).split("");
console.log(numbers); //превращаем чисто в строку и разделяем

let numbersLenght = numbers.length;
console.log(numbersLenght);// с помшью свойства length узнаем длинну

let sum=0;
for(i=0; i<numbersLenght ; i++){
    sum = sum + Number(numbers[i]);
}
console.log(sum); //сумма чисел 6

let reverse =String(n).split("").reverse();
console.log(reverse); 
//меняем цифры в обратном прядке






