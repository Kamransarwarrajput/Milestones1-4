// Function to handle the form submission and generate the resume
document.getElementById('resume-form')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from reloading the page
    
    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contact = (document.getElementById('contact NO') as HTMLInputElement).value;
    const academic = (document.getElementById('academic') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const fileInput = document.getElementById('file') as HTMLInputElement;
    
    // Handle image file upload
    let imageUrl: string = '';
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            if (e.target?.result) {
                imageUrl = e.target.result as string;
                displayResume();
            }
        };
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        displayResume();
    }

    // Function to display the resume
    function displayResume() {
        const resumeDisplay = document.getElementById('resume-display');
        
        if (resumeDisplay) {
            resumeDisplay.innerHTML = `
            <h1 style="color:white">Dynamic Resume</h1>
                ${imageUrl ? `<img style="height:200px;width:200px;border-radius:85%" src="${imageUrl}" alt="Profile Image" />` : ''}
                                <h2 style="font-weight:bold;font-size:40px">${name}</h2>

                <p style="font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;"><strong>Email:</strong> ${email}</p>
                <p style="font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;"><strong>Contact:</strong> ${contact}</p>
                <h3 style="color:white;font-size:18px">Qualification</h3>
                <p style="font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;">${academic}</p>
                <h3 style="color:white;font-size:18px">Experience</h3>
                <p style="font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;">${experience}</p>
                <h3 style="color:white;font-size:18px">Skills</h3>
                <p style="font-size:1rem;text-transform:capitalize;font-weight:bold;border:2px solid black;border-radius:7px;background-color:white;">${skills}</p>
            `;
        }
    }
});
