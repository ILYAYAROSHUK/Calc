let a = [];
function resul(val){
    if(a.length < 1){
        document.getElementById("result").innerHTML ="";
    }
    document.getElementById("result").innerHTML +=val;
    a.push(val)
}

function calc(){
    if(a.length>0){
        let aa = a.join('');
        let solve = eval(aa);
        document.getElementById("result").innerHTML = solve;
    }
}
function del(){
    a.pop();
    document.getElementById("result").innerHTML = a.join('');
    if(a.length === 0){
        document.getElementById("result").innerHTML = "0";
    }
}

function hello(){
    a = [];
    document.getElementById("result").innerHTML = "0";
}
if(a.length === 0){
    document.getElementById("result").innerHTML = "0";
}