var truthy = false;

if(truthy) {
    // do ths
    console.log("hello if")
}else if (truthy == null){
    // do this
    console.log("hello else if")
}else{
    // do this 
    console.log("hello else")
}

// === ความเข้าใจเกีย่วกับ True / False

//True
console.log(true);
console.log(!! {});
console.log(!! []);

// false
console.log(!! ''); // คือ emtry string ?
console.log(!! 'hi');
console.log(-1)
console.log(! -1)

//========= operator in Javascript
var x = true;
console.log(x);

var x = !true;
console.log(x);
var x = !!true;
console.log(x);
var x = !!!true;
console.log(x);

//logical AND
var a = true && false
console.log(a)

//logical OR
var a = true || false
console.log(a)

// == ดูเฉพาะค่า ทำไม typescript จึงดังเพราะเรืองนี
var val = "23" == 23
console.log(val);

var val = "23" === 23
console.log(val);

//===== Ternary operator
// เขียนปกติ
var truthy = false;
var x;
if(truthy) {
    x=1;
}else{
    x=2;
}
console.log(x)

//เขียนแบบ ternaty
var x = truthy ? 1 : 2;
console.log(x);
