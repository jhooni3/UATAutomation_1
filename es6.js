// let과 const
console.log(str1) //오류가 나지않음. 요게 호이스팅. 메모리를 미리 var를 올려놈
//console.log(str22)  //오류남 str22 is not defined

var str1 = "문자열1"

{
    var str1 = "중괄호안 문자열"
}

{
    let str22="중괄호안 문자열2"
    console.log(str22)
}
let str2 = "문자열2"
const constant1 = "상수1"
console.log(str1)
console.log(str2)
//console.log(str22) //오류발생
console.log(constant1)

//새로운 메서드 표기법
let obj1 = {
    method1 : function () {
        console.log("method1 called")
    },
    method2(){
        console.log("method2 called")
    }
}
obj1.method1()
obj1.method2()

//스프레드오퍼레이터, ... 객체를 복사
let objA = {
    a: 1,
    b: 2
}

let arrA = [
    'a', 'b'
]

let objA_copy = {
    ...objA
    ,c: 3
}

let arrA_copy = [
    ...arrA, 'c'
]
console.log(objA_copy.a)
console.log(arrA_copy[0])
console.log(objA_copy.c)
console.log(arrA_copy[2])


//Arrow Function
var objArrow = {
    result : 0
}
//var innerFunction

objArrow.add = function (a,b) {
    var innerFunction = function () { //<-- 요것도 윈도우넹
        this.result = a+b
    }
    innerFunction()
}

objArrow.add(2,3)





var objArrow2 = {
    result : 0
}
var innerFunction2

objArrow2.add = function (a,b) {
    innerFunction2 = () => {
        this.result = a+b
    }
    innerFunction2()
}

objArrow2.add(2,3)