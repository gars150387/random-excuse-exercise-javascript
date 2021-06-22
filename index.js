let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function randomWho(){
    let random = Math.floor(Math.random()*4+1);
    switch(random){
        case 1:
            return 'The dog';
        case 2:
            return 'My grandma';
        case 3:
            return 'His turtle';
        case 4:
            return 'My bird';
    }
}
document.getElementById('demo').innerHTML= randomWho();

function randomAction(){
    let randomA = Math.floor(Math.random()*4+1);
    switch(randomA){
        case 1:
            return 'ate';
        case 2:
            return 'peed';
        case 3:
            return 'crushed';
        case 4:
            return 'broke';
    }
}
document.getElementById('demo2').innerHTML= randomAction();

function randomWhat(){
    let randomW = Math.floor(Math.random()*3+1);
    switch(randomW){
        case 1:
            return 'my homework';
        case 2:
            return 'the keys';
        case 3:
            return 'the car';
    }
}
document.getElementById('demo3').innerHTML= randomWhat();

function randomWhen(){
    let randomWh = Math.floor(Math.random()*5+1);
    switch(randomWh){
        case 1:
            return 'before the class';
        case 2:
            return 'right on time';
        case 3:
            return 'when I finished';
        case 4:
            return 'during my lunch';
        case 5:
            return 'while I was praying';
    }
}
document.getElementById('demo4').innerHTML= randomWhen();
