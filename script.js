const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); 
}

let que_count = 0;
let userScore = 0;
let que_numb = 1;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++;
        que_numb++; 
        showQuetions(que_count);
        next_btn.classList.remove("show"); 
    }else{
        showResult(); 
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer){ 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag);
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){  
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 1){ 
        let scoreTag = '<span>Positivo para COVID-19.</span>';
        scoreText.innerHTML = scoreTag;
	}
	else {
        let scoreTag = '<span>Negativo para COVID-19.</span>';
        scoreText.innerHTML = scoreTag;
	}
}

let questions = [
    {
    numb: 1,
    question: "Você está com febre?",
    answer: "Sim",
    options: [
      "Sim",
      "Não"
	]
  },
    {
    numb: 2,
    question: "Você está espirrando?",
    answer: "Sim",
    options: [
      "Sim",
      "Não"
    ]
  },
    {
    numb: 3,
    question: "Você sente menos gosto das coisas?",
    answer: "Sim",
    options: [
      "Sim",
      "Não"
    ]
  },
    {
    numb: 4,
    question: "Você sente menos cheiro das coisas?",
    answer: "Sim",
    options: [
      "Sim",
      "Não"
    ]
  },
    {
    numb: 5,
    question: "Você está com diarréia?",
    answer: "Sim",
    options: [
      "Sim",
      "Não"
    ]
  }
]

var ct = 0;
var imgs = new Array("coronavirusFake01.png","coronavirusFake02.png");
setTimeout("progress()",25000);

function progress() {
   if (ct < 2) {  
   start_btn.onclick
      /*document.images[0].src=imgs[ct];*/
	  document.getElementById ('imagefake').src=imgs[ct];
      ct++;
      setTimeout("progress()",3000);
   }
}

$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});