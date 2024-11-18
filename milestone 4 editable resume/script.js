var _a;
// Function to handle the form submission and generate the resume
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('contact NO').value;
    var academic = document.getElementById('academic').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var fileInput = document.getElementById('file');
    // Handle image file upload
    var imageUrl = '';
    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                imageUrl = e.target.result;
                displayResume();
            }
        };
        reader.readAsDataURL(fileInput.files[0]);
    }
    else {
        displayResume();
    }
    // Function to display the resume
    function displayResume() {
        var resumeDisplay = document.getElementById('resume-display');
        if (resumeDisplay) {
            resumeDisplay.innerHTML = "\n            <h1 style=\"color:white\">Editable Resume</h1>\n                ".concat(imageUrl ? "<img style=\"height:200px;width:200px;border-radius:85%\" src=\"".concat(imageUrl, "\" alt=\"Profile Image\" />") : '', "\n                                <h2 style=\"font-weight:bold;font-size:40px\"><span contenteditable:\"true\">").concat(name, "</span></h2>\n\n                <p style=\"font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;\"><strong>Email:</strong><span contenteditable:\"true\"> ").concat(email, "</span></p>\n                <p style=\"font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;\"><strong>Contact:</strong><span contenteditable:\"true\"> ").concat(contact, "</span></p>\n                <h3 style=\"color:white;font-size:18px\">Qualification</h3>\n                <p contenteditable:\"true\" style=\"font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;\">").concat(academic, "</p>\n                <h3 style=\"color:white;font-size:18px\">Experience</h3>\n                <p contenteditable:\"true\" style=\"font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;\">").concat(experience, "</p>\n                <h3 style=\"color:white;font-size:18px\">Skills</h3>\n                <p contenteditable:\"true\" style=\"font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;\">").concat(skills, "</p>\n            ");
        }
    }
});
