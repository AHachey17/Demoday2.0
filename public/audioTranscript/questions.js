document.querySelector('#questions').addEventListener('click', getQuestions)


function getQuestions(){

  fetch('/questions')
  .then(response => {
   if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  document.querySelector('#printQuestions').innerHTML = data.questions[0].question
  })
}