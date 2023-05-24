// document.querySelector('#cashierQ').addEventListener('click', getCashierQ)

document.querySelector('#title').addEventListener('change', function (event) {
  console.log(event.target, event.target.value)

  if (event.target.value === 'Cashier') {
    getCashierQ()
  } else if (event.target.value === 'AcademicAdvisor') {
    getAdvisorQ()
  } else if (event.target.value === 'SoftwareEngineering') {
    getSoftwareQ()
  }
})


function getCashierQ() {

  fetch('/questions/cashier')
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)


      document.querySelector('#printQuestions').innerText =
        `Suggested Questions:
    1: ${data.questions[0].question}
    2: ${data.questions[1].question}
    3: ${data.questions[2].question}
    4: ${data.questions[3].question}
    5: ${data.questions[4].question}
    6: ${data.questions[5].question}
    7: ${data.questions[6].question}
    8: ${data.questions[7].question}
    9: ${data.questions[8].question}`








    })
}

// document.querySelector('#softwareQ').addEventListener('click', getSoftwareQ)


function getSoftwareQ() {

  fetch('/questions/softwareengineer')
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('#printQuestions').innerHTML =
        `Suggested Questions:
    1: ${data.questions[0].question}
    2: ${data.questions[0].question}
    3: ${data.questions[0].question}
    4: ${data.questions[0].question}
    5: ${data.questions[0].question}
    6: ${data.questions[0].question}
    7: ${data.questions[0].question}
    8: ${data.questions[0].question}
    9: ${data.questions[0].question}`
    })
}

// document.querySelector('#advisorQ').addEventListener('click', getAdvisorQ)


function getAdvisorQ() {

  fetch('/questions/advisor')
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('#printQuestions').innerHTML =
        `Suggested Questions:
          1: ${data.questions[0].question}
          2: ${data.questions[0].question}
          3: ${data.questions[0].question}
          4: ${data.questions[0].question}
          5: ${data.questions[0].question}
          6: ${data.questions[0].question}
          7: ${data.questions[0].question}
          8: ${data.questions[0].question}
          9: ${data.questions[0].question}`
    })
}

function answers(num) {
  fetch('/questions/answers')
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      document.querySelector('#printQuestions').innerHTML = data.questions[0].answer
    })
}