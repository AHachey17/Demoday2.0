// document.querySelector('#cashierQ').addEventListener('click', getCashierQ)

document.querySelector('#title').addEventListener('change', function(event){
  console.log(event.target, event.target.value)

  if (event.target.value === 'Cashier'){
    getCashierQ()
  }else if(event.target.value === 'AcademicAdvisor'){
    getAdvisorQ()
  }else if(event.target.value === 'SoftwareEngineering'){
    getSoftwareQ()
  }
})


function getCashierQ(){

  fetch('/questions/cashier')
  .then(response => {
   if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  document.querySelector('#printQuestions').innerHTML = data.questions[0].question
  })
}

// document.querySelector('#softwareQ').addEventListener('click', getSoftwareQ)


function getSoftwareQ(){

  fetch('/questions/softwareengineer')
  .then(response => {
   if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  document.querySelector('#printQuestions').innerHTML = data.questions[0].question
  })
}

// document.querySelector('#advisorQ').addEventListener('click', getAdvisorQ)


function getAdvisorQ(){

  fetch('/questions/advisor')
  .then(response => {
   if (response.ok) return response.json()
  })
  .then(data => {
    console.log(data)
  document.querySelector('#printQuestions').innerHTML = data.questions[0].question
  })
}

function questionaire(num){
 return Math.floor(num + (num/2))
}