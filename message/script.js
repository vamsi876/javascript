const output=document.querySelector('.output');
const myMessage=createEle('div',output);
const myInput=createEle('input',output);
const myBtn=createEle('button',output);

myInput.value="Hello";
myMessage.textContent="Message";
myBtn.textContent="Click Me";


myBtn.addEventListener('click',(e)=>{
    myMessage.textContent=myInput.value;
    myInput.value=""
})
function createEle(eleType,eleParent){
    const ele=document.createElement(eleType);
    eleParent.append(ele)
    return ele


}
