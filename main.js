let title = document.getElementById('title')
let start = document.getElementById('start')
let main = document.getElementById('main')

let questions = [
    {
        name:'Готов?',
        corAnswer:'ДА',
        otherAnswers: [
            'Нет', 
            "50/50",
            'Возможно частично'

        ]

    },
    {
        name:'Ура?',
        corAnswer:'Щука',
        otherAnswers: [
            'Помидор', 
            "10/90",
            'Ключ'

        ]

    }
]
function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
let counter = 0
function questionShow(){
    let name = questions[counter].name
    let answers = []
    answers = answers.concat(questions[counter].otherAnswers)
    answers.push(questions[counter].corAnswer)
    main.innerHTML = `
        <h2>${name}</h2>
        <p>Решено: ${counter}/${questions.length}</p>
    `
    let btnAnswers = ''
    shuffle(answers)
    for (let i of answers){
        btnAnswers += `<button onclick="checkAnswer('${i}')"><b>${i}</b></button>`
    }
    main.innerHTML += `
    <nav class="answers">
        ${btnAnswers}
    </nav>
    `
}

function startProg(){
    title.classList.add('close')
    start.classList.add('close')
    main.classList.remove('close')
    counter = 0
    correctCounter = 0
    questionShow()
}
let correctCounter = 0
function checkAnswer(nameBtn){
    let corAnswer = questions[counter].corAnswer
    if (nameBtn == corAnswer) {
        correctCounter++
    }
    counter++
    if (questions.length == counter){
        title.innerHTML = `Результат: ${correctCounter}/${questions.length}`
        main.classList.add('close')
        title.classList.remove('close')
        start.classList.remove('close')
    }
    else{
        questionShow()
    }
}
start.addEventListener("click",startProg)
