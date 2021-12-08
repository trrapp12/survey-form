function formValidation () {
  console.log("entered form validation")
  let application = document.getElementById('survey-form');
  if (application.checkValidity()) {
    application.submit();
  } else {
    application.reportValidity();
  }
}

document.getElementById("submit").addEventListener("click", formValidation)
