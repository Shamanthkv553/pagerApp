let pagerDispEl=document.getElementById("pagerDisp");
const phoneDispEl=document.getElementById("phoneDisp");
const resetBtn=document.getElementById("resetBtn");
const sendBtn=document.getElementById("sendBtn");
const dialButtons = document.querySelectorAll('.dialBtn');


sendBtn.addEventListener("click",()=>{
    if(pagerDispEl.textContent!=""){
    pagerDispEl.textContent=phoneDispEl.textContent;
    }
})
resetBtn.addEventListener("click",()=>{
    phoneDispEl.textContent="";
})

btn0.addEventListener("click",()=>{
    phoneDispEl.textContent+=btn0.textContent;
})

document.getElementById('btn1').addEventListener('click', function() {
    phoneDispEl.textContent += '1';
});

document.getElementById('btn2').addEventListener('click', function() {
    phoneDispEl.textContent += '2';
});

document.getElementById('btn3').addEventListener('click', function() {
    phoneDispEl.textContent += '3';
});

document.getElementById('btn4').addEventListener('click', function() {
    phoneDispEl.textContent += '4';
});

document.getElementById('btn5').addEventListener('click', function() {
    phoneDispEl.textContent += '5';
});

document.getElementById('btn6').addEventListener('click', function() {
    phoneDispEl.textContent += '6';
});

document.getElementById('btn7').addEventListener('click', function() {
    phoneDispEl.textContent += '7';
});

document.getElementById('btn8').addEventListener('click', function() {
    phoneDispEl.textContent += '8';
});

document.getElementById('btn9').addEventListener('click', function() {
    phoneDispEl.textContent += '9';
});

document.getElementById('btn0').addEventListener('click', function() {
    phoneDispEl.textContent += '0';
});

document.getElementById('btnHash').addEventListener('click', function() {
    phoneDispEl.textContent += '#';
});

document.getElementById('btnStar').addEventListener('click', function() {
    phoneDispEl.textContent += '*';
});
