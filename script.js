// JavaScript

// Submit form event listener
document.getElementById('patientForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  
  // Display submitted data (for demo purposes)
  alert('Patient Details:\nName: ' + name + '\nDate of Birth: ' + dob + '\nGender: ' + gender);
});
