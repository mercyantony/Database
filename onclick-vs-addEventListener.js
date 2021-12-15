const myFuncRef = function () {
    myOtherFunction1()
    myOtherFunction2()
    return "smokey" // this does nothing because the web api ignores the result
}

myButton.onclick = myFuncRef

myButton.addEventListener("click", () => {
    console.log("hi")
    return "ginger"
})

myButton.addEventListener("click", myFuncRef)

myButton.removeEventListener(myFuncRef)
