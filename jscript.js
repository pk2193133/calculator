function add(a,b){
    return Number(a)+Number(b);
}

function subtract(a,b){
    return a-b;

}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,c){
if(b=="+"){
  return  add(a,c);
}
else if(b=="-"){
  return  subtract(a,c);
}
else if(b=="*"){
  return  multiply(a,c);
}
else if(b=="/"){
  return  divide(a,c);
}
}


let div=document.getElementById("dis1");
let answerDiv=document.getElementById("dis2")
let inputString1="",inputString2="",operator1="",operator2="",count2=0;
function input(){
    let btn=document.querySelectorAll("button");
    btn.forEach(bn=>{
        bn.addEventListener("click",function(){
            
            let oparatorArray=["+","-","*","/"];
            let input=bn.innerHTML;
            console.log(input);
            if(!isNaN(parseInt(input))){
                if(operator1==""){
                inputString1=inputString1+input;
                console.log(inputString1);
            }
        else{
            inputString2=inputString2+input;
            console.log(inputString2);
        }

        }
            else{
if(oparatorArray.indexOf(input)!==-1){
    if(inputString1!==""&&operator1==""){
    operator1=input;
    
}
else {
    operator2=input;
}
}
else if(input=="="){
if(inputString1!=""&&inputString2!=""){
    count2++;
}
}
else if(input=="clear"){
inputString1="";
inputString2="";
operator1="";
operator2="";
count2=0;
answerDiv.innerHTML="";
}
else if(input=="delete"){
    if(inputString2!=""){
        inputString2=inputString2.substr(0,inputString2.length-1);
    }
    else if(operator1!=""){
        operator1=operator1.substr(0,operator1.length-1);   
    }
    else if(inputString1!=""){
        inputString1=inputString1.substr(0,inputString1.length-1);
        if(inputString1.length==0){
            answerDiv.innerHTML="";
        }
    }

}
            }


            
                if(operator2!==""){
                    // if(inputString2!=""){
             answerDiv.innerHTML= operate(inputString1,operator1,inputString2);
             inputString1=String(operate(inputString1,operator1,inputString2));
              operator1=operator2;
              operator2="";
              inputString2=""; 
            }
        
        
             if(count2==1){
                answerDiv.innerHTML= operate(inputString1,operator1,inputString2);
                inputString1=String(operate(inputString1,operator1,inputString2));
                 count2=0; 
                 inputString2="";
                 operator1="";  
            }
            div.innerHTML=inputString1+operator1+inputString2;
        })
    })
}

input();