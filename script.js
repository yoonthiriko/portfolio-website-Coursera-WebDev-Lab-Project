document.getElementById('submitBtn').addEventListener('click', function () {
    var nameInput = document.getElementById('nameInput').value;
    var messageInput = document.getElementById('messageInput').value;

    // Validate the recommendation message
    if (messageInput.trim() === '') {
        // Show the error modal
        var errorModal = document.getElementById('errorModal');
        errorModal.style.display = 'block'; // Show the modal
        return;
    }

    // Hide the error modal if the input is valid
    var errorModal = document.getElementById('errorModal');
    errorModal.style.display = 'none';

    // Create a new recommendation element
    var recommendationMessages = document.querySelector('.recommendation_messages');
    var newRecommendation = document.createElement('div');
    newRecommendation.className = 'recommendation';

    // Include the name if provided
    if (nameInput.trim() !== '') {
        newRecommendation.innerHTML = `<strong>${nameInput}</strong>: <p>${messageInput}</p>`;
    } else {
        newRecommendation.innerHTML = `<p>${messageInput}</p>`;
    }

    // Append the new recommendation to the messages section
    recommendationMessages.appendChild(newRecommendation);

    // Clear the input fields
    document.getElementById('nameInput').value = '';
    document.getElementById('messageInput').value = '';

    // Show the "Thank you" modal
    var modal = document.getElementById('successModal');
    modal.style.display = 'block'; // Ensure the modal is displayed

    // Close the modal on clicking 'X' or 'OK' button
    var closeButton = document.querySelector('.close-button');
    var okButton = document.getElementById('okButton');
     
    okButton.onclick = function () {
        modal.style.display = 'none';
    };

    // Close modal by clicking outside the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

// Close the error modal when clicking the OK button
document.getElementById('okErrorButton').addEventListener('click', function () {
    var errorModal = document.getElementById('errorModal');
    errorModal.style.display = 'none';
});