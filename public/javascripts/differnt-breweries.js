var quizQuestions = [
    {"question": "what type of brewery is a very small brewery that usually only distributes to local locations?",
        "Options" :{ "option1": "a Micro","option2": "b Nano", "option3":"c Brewpub"},
        "CorrectAnswer": "b"
    },
    {"question": "what type of brewery is a secondary location of another brewery?",
    "Options" :{ "option1": "a Regional","option2": "b Nano", "option3":"c Brewpub"},
    "CorrectAnswer": "a"
    },
    {"question": "what type of brewery is a brewery that is inside or connected to a bar or restaurant?",
    "Options" :{ "option1": "a Regional","option2": "b Brewpub", "option3":"c Nano"},
    "CorrectAnswer": "b"
    },
    {"question": "what type of brewery is a brewery that is currently being built?",
    "Options" :{ "option1": "a Regional","option2": "b Micro", "option3":"c Planning"},
    "CorrectAnswer": "c"
    },

];

document.getElementById("quiz-button").addEventListener("click",showQuiz);

function showQuiz(){
    var optionsArray=[];
    for(var i=0; i<quizQuestions.length; i++){
    var options="\n";
    options=options+quizQuestions[i].Options.option1+"\n"+quizQuestions[i].Options.option2+"\n"+quizQuestions[i].Options.option3;
    console.log(options);
    optionsArray[i]=options;
    console.log(optionsArray);

    }
    var userScore=0;
    for(var i=0; i<quizQuestions.length; i++){
        var userResponse = window.prompt(quizQuestions[i].question+optionsArray[i]);
        if(userResponse==quizQuestions[i].CorrectAnswer){
            userScore++;
            console.log("r"+userResponse);
            console.log("answer"+quizQuestions[i].CorrectAnswer);
        }
    }
    var grade= (userScore/quizQuestions.length)*100;
    alert("your grade is\n"+grade+"%");
}