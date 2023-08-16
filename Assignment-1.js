//pyramid
function pyramid(n){
for(let i=1;i<=n;i++){
    let pattern=''
    for(let space =1;space<=n-i;space++){
        pattern+=' '
    }
    for(let j=1;j<=2*i-1;j++){
        pattern+='*'
    }
    console.log(pattern)
}
}

//output
//    *
//   ***
//  *****
// *******        
//*********


// decreasing pyramid

function downsidePyramid(row){
    for(let i=row;i>0;i--){
        let pattern=''
        for(let space =1;space<=row-i;space++){
            pattern+=' '
        }
        for(let j=1;j<=2*i-1;j++){
            pattern+='*'
        }
        console.log(pattern)
    }
}
//both together forms diamond pattern
console.log("pyramid pattern")
pyramid(5)
console.log("downside pyramid")
downsidePyramid(5)

function diamond(n){
   let pattern=''
   let midRow=parseInt(n/2)
   let stars=1
   let spaces=midRow

   for(let i=0;i<n;i++){
    let row=''
    for(let space=0;space<spaces;space++){
        row+=' '
    }
    for(let j=0;j<stars;j++){
        row+='*'
    }
    pattern+=row+'\n'
    if(i<midRow){
        stars+=2
        spaces--
    }
    else{
        stars-=2
        spaces++
    }
   }
  return pattern
}

console.log("Diamond Pattern")
console.log(diamond(7))

//1 To N sum
function findSum(n){
var sum=0
for(let i=1;i<=n;i++){
    sum+=i
}
console.log("sum of N numbers "+sum)
}
findSum(10)
//output-->sum of N numbers 55


//iterating array using for-each loop 
let array=[1,2,3,4,5]
console.log("iterating array values")
array.forEach(element => {
    console.log(element)
});
//output -->iterating array values
//1
//2
//3
//4
//5



//object stored in form of key value pair 
let objectEmployeeDetail={"id":1,"name":"John","dateOfBirth":"01-01-2000","salary":"5Lakhs"}
console.log("iterating object  key and value")
for(let key in objectEmployeeDetail){
    console.log(key+":"+objectEmployeeDetail[key])
}
//output -->iterating object  key and value
//id:1
//name:John
//dateOfBirth:01-01-2000
//salary:5Lakhs

//search string
function search(sentence,searchValue){
    for(let i=0;i<=sentence.length;i++){
        let match =true
        for(let j=0;j<=searchValue.length;j++){
            if(sentence[i+j]!=searchValue[j]){
            match=false
            break;
        }
        }
    if(match){
        return "Match found"
        break;
    }
}
return " No Match found"
}

console.log(search("Hello world","world")+"\n")
console.log(search("Hello world","rld")+"\n")
console.log(search("Hello world","abcde")+"\n")

//output --->Match Found
//output --->Match Found
//output ---> No Match Found

//String reversal 
function stringReversal(originalString){
    let reversedString=''
    for(let i=originalString.length-1;i>=0;i--){
        reversedString+=originalString[i]
    }
    return reversedString
}

console.log("Reversed String  "+stringReversal("Hello World")+"\n")
console.log("Reversed String  "+stringReversal("Java Script")+"\n")

//output--->Reversed String  dlroW olleH
//output--->Reversed String  tpircS avaJ

//Array reversal 
function arrayReversal(val){
    for(let i=val.length;i>0;i--){
        console.log(i)
    }
}

console.log("Reversal array")
arrayReversal([1,2,3,4,5])

//output -->Reversal array
//5
//4
//3
//2
//1


