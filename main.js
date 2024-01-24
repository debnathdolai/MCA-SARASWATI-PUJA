  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
   'use strict'
  
   // Fetch all the forms we want to apply custom Bootstrap validation styles to
   const forms = document.querySelectorAll('.needs-validation')
  
   // Loop over them and prevent submission
   Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
     if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
     }
  
     form.classList.add('was-validated')
    }, false)
   })
  })();
  
 // From Validation
 document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector(".needs-validation");
 
  form.addEventListener("submit", function(event) {
   if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
   }
 
   form.classList.add("was-validated");
 
   if (form.checkValidity()) {
    const formData = {
     name: document.getElementById("validationCustom01").value,
     email: document.getElementById("validationCustom02").value,
     mobile: document.getElementById("validationCustomUsername").value,
     address: document.getElementById("validationCustom03").value,
     studentStatus: document.querySelector('input[name="exampleRadios"]:checked').value,
     department: document.getElementById("validationCustom04").value,
     zip: document.getElementById("validationCustom05").value,
     agreeTerms: document.getElementById("invalidCheck").checked,
    };
 
    // Send data to email using Fetch API
    fetch("https://your-server-endpoint", {
      method: "POST",
      headers: {
       "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formData, email: "dolaidebnath105@gmail.com" }),
     })
     .then(response => {
      if (!response.ok) {
       throw new Error("Network response was not ok");
      }
      alert("Form data sent successfully!");
      // Optionally, reset the form after successful submission
      form.reset();
     })
     .catch(error => {
      console.error("Error sending form data:", error);
     });
   }
  });
 });