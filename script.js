document.getElementById("calc").onclick = calculator;


function calculator(){
    let ele1 = Number(document.getElementById("ele1").value);
    let ele2 = Number(document.getElementById("ele2").value);
    let operator = document.getElementById("operator").value;
    let ans;
    if(operator=="add"){
        ans = ele1 + ele2;
    } else if (operator=="sub"){
        ans = ele1 - ele2;
    } else if (operator=="mul"){
        ans = ele1 * ele2;
    } else if (operator=="div"){
        ans = ele1 / ele2;
    }
    document.getElementById("ans").innerText=ans;
}