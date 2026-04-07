/*
var result="";

for (var i=0 ; i<5 ; i++) {
if (i===2)continue;
result += i;

if (i===3)break;
}

console.log(result);
///////////////////////////////////////
var str="hello"
var newStr=""

for (var i=str.length-1 ; i>=0 ; i--) {
if (str[i]==="l")continue
newStr += str[i]
}

console.log(newStr)
//////////////////////////////////////////
function test(x) {
if (x>10) return x*2
if (x>5) return x+5
return x-1
}

var result=test(7)+test(12)+test(3)

console.log(result)
//////////////////////////////////////////
var arr= [5,10,15]
var result= []

for (var i=0;i<arr.length;i++) {
var val=arr[i]

switch (true) {
case val>10:
result[result.length]=val*2
break
case val>5:
result[result.length]=val+5
break
default:
result[result.length]=val-1
  }
}

console.log(result)
/////////////////////////////////////////
var arr= ["a","b","c"]
var output=""

for (var i=0;i<arr.length;i++) {
for (var j=0;j<=i;j++) {
output += arr[i]
  }
}

console.log(output)
*/