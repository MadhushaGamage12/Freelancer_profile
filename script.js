// Handle profile picture upload
const uploadPicInput = document.getElementById('uploadPicInput');
const uploadedPicture = document.getElementById('uploadedPicture');

// Trigger file input when the profile picture is clicked
uploadedPicture.addEventListener('click', () => {
  uploadPicInput.click();
});

// Update profile picture when a new file is selected
uploadPicInput.addEventListener('change', () => {
  const file = uploadPicInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedPicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Handle feedback submission
const submitFeedbackBtn = document.getElementById('submitFeedbackBtn');
const feedbackInput = document.getElementById('feedbackInput');

// Show an alert with feedback text on submit
submitFeedbackBtn.addEventListener('click', () => {
  const feedback = feedbackInput.value;
  if (feedback.trim() !== '') {
    alert('Feedback Submitted: ' + feedback);
    feedbackInput.value = '';  // Clear feedback input field
  } else {
    alert('Please provide some feedback.');
  }
});
