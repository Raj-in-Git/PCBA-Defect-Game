
var questions=["defect 1","defect 2","defect 3","defect 4","defect 5","defect 6","defect 7","defect 8","defect 9",
"defect 10","defect 11","defect 12","defect 13","defect 14","defect 15","defect 16"];

var answers=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"];

var x=0;
var data=document.getElementById("scan");
var result=0;
var givenName=document.getElementById("name");
givenName.focus();
document.querySelector(".qna h1").innerHTML="IDENTIFY "+questions[x].toUpperCase();
document.getElementById("scan").focus();

document.getElementById("name").addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        if(givenName.value != ""){
            startGame();
        }
        else{
            alert("Please Enter Your Name start the Quiz");
        }
    }   
});

document.getElementById("startTest").addEventListener("click",function(){
        if(data.value != ""){
            startGame();
        }
        else{
            alert("Please Enter Your Name start the Quiz");
        }
});

function startGame(){
    givenName=document.getElementById("name");
    document.getElementById("start").style.display="none";
    document.getElementById("game").style.display="block"; 
    document.getElementById("scan").focus();
    console.log(givenName.value);
    document.getElementById("title").style.display="none";
}

document.getElementById("scan").addEventListener("keyup",(event) => {
    if(event.keyCode === 13){
        if(x<16){
            if(data.value != ""){
                handler();
            }
            else{
                alert("not data found");
            }
        }    
    }
});

document.getElementById("next").addEventListener("click",function(){
    if(x<16){
        if(data.value != ""){
            handler();
        }
        else{
            alert("not data found");
        }
    }
});

function handler(){
    given_answer= data.value.toLowerCase();
    sequence();
    // document.querySelector("body").style.backgroundColor=("cornflowerblue");
    x++;
    next();
    resetData();
    document.getElementById("scan").focus();
}

function sequence() {
    if(given_answer=== answers[x]){
        // return "yes";
        // Animate(right);
        var correct= new Audio("sound/correct.mp3");
        correct.play();
        document.querySelector("body").style.backgroundColor=("#03C988");
        setTimeout(function(){
           document.querySelector("body").style.backgroundColor=("cornflowerblue");
        },300);
        // document.querySelector(".head").innerHTML="Your are right";
        result++;   
        // console.log(result);
    }
    else{
        // document.querySelector(".head").innerHTML="Your are wrong";
        // return "no";
        var correct= new Audio("sound/wrong.mp3");
        correct.play();
        // Animate(wrong);
        document.querySelector("body").style.backgroundColor=("red");
    setTimeout(function(){
       document.querySelector("body").style.backgroundColor=("cornflowerblue");
    },300);
    }
}

function next(){
    if (x===16){
        // alert("15 up");
        f_score();
        }
    img_link="img/pcba"+x+".jpg"
    document.querySelector("img").src=img_link;
    document.querySelector("span").innerHTML= x+1;
    document.querySelector(".qna h1").innerHTML="IDENTIFY "+questions[x].toUpperCase(); 
}

function f_score(){
    document.getElementById("score_sheet").style.display="block";
    document.getElementById("game").style.display="none"; 
    if(result>10){
        document.getElementById("final_score").innerHTML="Congrats <br>"+(givenName.value.toUpperCase())+" <br>you have scored <br> "+result+" <br> Keep it UP";
    }
    else{
        document.getElementById("final_score").innerHTML="Sorry  <br> "+(givenName.value.toUpperCase())+" <br> you have scored <br> "+result+" <br> Try Again";
    }
}

function resetData(){
    document.getElementById("scan").value="";
}

document.getElementById("btn_restart").addEventListener("click",function(){
    restartQuiz();
    // alert("restart");
})

function restartQuiz(){

    document.getElementById("score_sheet").style.display="none";
    document.getElementById("title").style.display="block";
    document.getElementById("start").style.display="block";
    document.getElementById("name").value="";
    document.getElementById("scan").value="";
    document.getElementById("name").focus();
    x=0;
    result=0;
    document.querySelector("span").innerHTML= x+1;
    document.querySelector(".qna h1").innerHTML="IDENTIFY "+questions[x].toUpperCase();

}
// document.getElementById("btn_restart").addEventListener("keyup",(event) => {
//     if(event.keyCode === 13){
//         restartQuiz();
//     }
// });

