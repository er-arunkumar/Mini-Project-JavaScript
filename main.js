// Number 1-100 -> Divisible by 2, get divisor
// While Loop
let no1=10;

let div1=1;

while(div1<=10){
    if(no1%div1==0){
        console.log(div1)
    }
    div1++
}

// For Loop
let no2=20;
for(let div=1;div<=20;div++){
    if(no2%div==0){
        console.log(div)
    }
}

// Do-While Loop
let no3 = 30;

let div2 =0;

do{
    if(no3%div2==0){
        console.log(div2);
    }
    div2++
}while(div2<=30);

// Number 1-100 -> Divisible by 3, get divisor

let x=1;


while(x<=100){
    if(x%3==0){
        console.log(x);
    }
    x++
}

// Number 1-100 -> Divisible by 2 and 3, get divisor

for(let a=1;a<=100;a++){
    if(a%2==0 && a%3==0){
        console.log(a);
    }
}

// Number 1-100 -> Divisible by 2 or 3, get divisor

for(let a=1;a<=100;a++){
    if(a%2==0 || a%3==0){
        console.log(a);
    }
}

// Count Single Digit

function digits_count(n){
let count=0;
if (n>=1) ++count;

while(n/100>=1){
    n/=100;
    ++count;
    }
    return count;
}
console.log(digits_count(count));