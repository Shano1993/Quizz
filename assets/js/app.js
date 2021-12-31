$(document).ready(function() {
    start(questionNumber);

    $(".sub").on("click", function(event) {

        let userAnswer = parseInt($(this).attr("id"));
        answerCheck(userAnswer);

        setTimeout(function() {
            $(".sub").removeClass("correctStyle incorrectStyle");
            start(questionNumber);
        }, 3000)

        questionNumber++;
    });
});

let questionNumber = 1;
let totalCorrect = 0;

const allQuestions = [
    {
        question: "",
        choices: [""],
        answer: ""}
    ,{
        question: "Lequel de ces Pokémon n'est pas Légendaire ?",
        choices: ["Elektek", "Sulfura", "Darkrai", "Créhelf"],
        answer: 0,
        value: "Elektek"}
    ,{
        question: "Lequel de ces Pokémon est Légendaire ?",
        choices: ["Pikachu", "Shaymin", "Absol", "Elektek"],
        answer: 1,
        value: "Shaymin"}
    ,{
        question: "De quel type est Roucarnage ?",
        choices: ["Vol", "Poison", "Acier / Vol", "Feu"],
        answer: 0,
        value: "Vol"}
    ,{
        question: "De quelles couleurs est Darkrai ?",
        choices: ["Bleu, vert et noire", "Noir, bleu, et rose", "Bleu et rouge", "Noir, rouge et blanc"],
        answer: 3,
        value: "Noir, rouge et blanc"}
    ,{
        question: "Lequel de ces Pokémon ne vit pas dans l'eau ?",
        choices: ["Bekipan", "Kyogre", "Tentacruel", "Magicarpe"],
        answer: 0,
        value: "Bekipan"}
    ,{
        question: "De quelles couleurs est Marill ?",
        choices: ["Violet, bleu et rouge", "Rouge, vert et noir", "Bleu et blanc", "Bleu et rouge"],
        answer: 2,
        value: "Bleu et blanc"}
    ,{
        question: "Lequel de ces Pokémon est de type Feu ?",
        choices: ["Insolourdo", "Eoko", "Vacilys", "Magmar"],
        answer: 3,
        value: "Magmar"}
    ,{
        question: "Lequel de ces Pokémon est de type Acier ?",
        choices: ["Heatran", "Chenipotte", "Porygon-Z", "Bastiodon"],
        answer: 3,
        value: "Bastiodon"}
    ,{
        question: "Lequel de ces Pokémon est de type plante ?",
        choices: ["Simularbre", "Steelix", "Arcko", "Gardevoir"],
        answer: 2,
        value: "Arcko"}
    ,{
        question: "Lequel de ces Pokémon est le plus gros ?",
        choices: ["Léviator", "Wailord", "Spoink", "Libegon"],
        answer: 1,
        value: "Wailord"}
];

// continue with next question or end
let start = function(questionNumber) {
    $('#question').hide().fadeIn(400);

    if(questionNumber !== allQuestions.length){
        question(questionNumber);
    }
    else {
        end();
    }
};

// show question and possible answers
function question(questionNum) {
    $("#question").text("Question " + [questionNum] + " : " +  allQuestions[questionNum].question);

    $.each(allQuestions[questionNum].choices, function(i, answers){
        $("#" + i).html(answers);
    });
}

function answerCheck(userAnswer) {
    let correctAnswer = allQuestions[questionNumber].answer;

    if (userAnswer === correctAnswer) {
        $("#" + userAnswer).addClass("correctStyle");
        totalCorrect++;
    }
    else {
        $("#" + userAnswer).addClass("incorrectStyle");
        $("#" + correctAnswer).addClass("correctStyle");
        $("#score").html("La réponse correcte était" + " : " + allQuestions[questionNumber].value)
        setTimeout(function() {
            $("#score").html("");
        }, 3000)
    }
}

function end() {
    $('#score').html("Votre score est de " + totalCorrect + "/10").css({
        "margin-top" : "5rem",
    });

    $('#questions').css({
        "display" : "none"
    })
    $('#restart').on('click', function () {
        location.reload();
    }).css({
        "display" : "block"
    })

    if (totalCorrect === 10) {
        $("#message").css({
            "display" : "block",
            "color" : "green"
        }).html("Bien joué ! Tu es un vrai connaisseur !");
        $("#img10").css({
            "display" : "block"
        })
    }
    else if (totalCorrect >= 5) {
        $("#message").css({
            "display" : "block",
            "color" : "orange"
        }).html("Pas mal, tu pourrais mieux faire !");
        $("#img5").css({
            "display" : "block"
        })
    }
    else {
        $("#message").css({
            "display" : "block",
            "color" : "red"
        }).html("Tu es nul ! Rien d'autre à dire...");
        $("#looser").css({
            "display" : "block"
        })
    }
}









