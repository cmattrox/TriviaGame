$(document).ready(function(){
    var questionArray = [
        {
            question: "What is in the third-floor corridor in year 1?",
            answerArray : [
                "a", 
                "Three headed dog",
                "c",
                "d"
            ],
            index: 2
        },
        {
            question: "What is Lord Voldemort's real name?",
            answerArray: [
                "Tom Riddle",
                "b",
                "c",
                "d"
            ],
            index: 1
        },
        {
            question: "Why can't Hagrid perform magic legally?",
            answerArray: [
                "a",
                "b",
                "c",
                "He was accused of opening the chamber of secrets"
            ],
            index: 4
        },
        {
            question: "What old magic saved Harry's life from Voldermort?",
            answerArray: [
                "a",
                "b",
                "Love",
                "d",
            ],
            index: 3
        },
        {
            question: "Who let Harry come back to life after he turned himself into Voldermort",
            answerArray: [
                "a",
                "Narcissa",
                "c",
                "d"
            ],
            index: 2
        },
    ];
    var i = 0;
    var timer = 30;
    var intervalId;
    function showQuestion(){
        $("#question-view").html(questionArray[i].question);
        $("#button1").text(questionArray[i].answerArray[0]);
        $("#button2").text(questionArray[i].answerArray[1]);
        $("#button3").text(questionArray[i].answerArray[2]);
        $("#button4").text(questionArray[i].answerArray[3]);

        $("#button" + questionArray[i].index).data("correct", "true")

        i++
    }
    showQuestion();
    run();
    
    var timeout1 = setTimeout(function(){
        showQuestion();
    }, 5000);

    function decrement() {
        timer--;
        $("#timer").html("<h2>Time: " + timer);
        if(timer === 0) {
            stop ();
            alert("Time's Up!");
        }
    }
    function run () {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function stop() {
        clearInterval(intervalId);
    }
    var userGuess;
    $("button").on("click",function(){
        userGuess = $(this)
        console.log($(userGuess).data("correct"))
        if($(this).data("correct") === "true"){
            console.log("correct")
            $(this).data("correct", "")
        }
        else{
            console.log("incorrect")
        }

    })

})