// var children=[2015,2022,2012,2000,2005,20014,2012,2017,2002,2024,2009,2020]
// var currentYear=2024
// var giftr=0

// for(var child of children){
//     var childAge = currentYear - child
//     if(childAge>=3 && childAge<=11){
//         giftr++
//     }
// }
// console.log(`Gift total:${giftr}of ${children.length}`)



// var cars={
//     BMW:'7 марта 1916г',
//     mercedes:'28 июня 1926',
//     rolls:'10 февраля 2011'
// }
// for(var car in cars){
//     var date=cars[car]
//     console.log(`${car}:был основан${date}`)
// }


// function print(){
//     console.log('-'.repeat(50));
// }
// print()

// function sayHello(){
//     console.log('hello');
// }
// sayHello()

// var strlog=function(string){
//     console.log(string)
// }
// strlog('fsdgdfgfd')

// var doCal=function(num1,num2){
//     console.log(num1+num2)
// }
// doCal(34,23)

// var detMax=(num1,num2)=>{
//     if(num1>num2){
//         console.log(num1);
//     }else{
//         console.log(num2);
//     }
// }
// detMax(324, 234)

// var detMaxNum=(n1,n2)=>console.log(n1>n2 ? n1:n2)
// detMaxNum(324,12)
// var sumArrey=(array)=>{
//     var sum=0
//     for (var i = 0; i < array.length; i++) {
//         sum += array[i]
        
//     }
//     return console.log(sum)
// }
// sumArrey([2234,5,6,4,232,1])
// var fruits=['sdfadf','dsfsdfsd','sdfsdfsdf']
// fruits.push('sdfsdf')

// var addFruits=fruits.unshift('sdfsfdf')

// var firstFruits=fruits.shift()
// var delitFruits=fruits.pop()

// fruits.splice(1,1 ,'tref')
// console.log(fruits)

var names=['asdf','qweqr','zxcv','dsfsd','fghhjfdfvx','sawgd']
var dlaclist=['asdf','qweqr','zxcv']
for (let i = 0; i < names.length; i++) {
    if(dlaclist.includes(names[i])){
        console.warn(names[i]);
        continue
    }
    console.log(names[i]);
}

