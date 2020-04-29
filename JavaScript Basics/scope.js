let iamGlobal ="value"

if(true){
    let iamLocal="more value"
    iamGlobal="superman" //globally changed
    console.log(iamGlobal)
    console.log(iamLocal)
}

// console.log(iamGlobal) - would not run due to block scope of let
console.log(iamLocal)


if(true){
    var iamLocal="more value"
    iamGlobal="superwomen" //globally changed
    console.log(iamGlobal)
    console.log(iamLocal)
}

console.log(iamGlobal)
console.log(iamLocal)