// Image Preview
const imgUpload = document.getElementById('img-upload') as HTMLInputElement;
const profileImg = document.getElementById('profile-img') as HTMLImageElement;

imgUpload.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
            if (e.target?.result) {
                profileImg.src = e.target.result as string;
            }
        };
        reader.readAsDataURL(file);
    }
});

// Generate Resume
const generateResumeButton = document.getElementById('generate-resume') as HTMLButtonElement;
const printResumeButton = document.getElementById('print-resume') as HTMLButtonElement;
const editResumeButton = document.getElementById('edit-resume') as HTMLButtonElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;

generateResumeButton.addEventListener('click', () => {
    console.log('Generate button clicked');
    
    const name = (document.getElementById('for-name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('for-email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('for-phone') as HTMLInputElement).value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked') as HTMLInputElement;
    const gender = genderInput ? genderInput.value : '';
    const education = (document.getElementById('for-education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('for-experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('for-skills') as HTMLTextAreaElement).value.trim();
    const description = (document.getElementById('for-description') as HTMLTextAreaElement).value.trim();

    // Debugging logs
    console.log({ name, email, phone, gender, education, experience, skills, description });

    if (!name || !email || !phone || !gender) {
        alert('Please fill out all required fields.');
        return;
    }

    // Create the resume content
    const resumeContent = `
        <div>
            <img src="${profileImg.src}" alt="Profile Image" style="max-width: 150px; border-radius: 1px;">
        </div>
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <h3>Education</h3><p>${education}</p>
        <h3>Skills</h3><p>${skills}</p>
        <h3>Experience</h3><p>${experience}</p>
        <h3>Description</h3><p>${description}</p>
    `;
    
    // Display the resume output
    resumeOutput.innerHTML = resumeContent;
    resumeOutput.style.border = "1px solid #ccc";
    resumeOutput.style.padding = "10px";
    resumeOutput.style.marginTop = "10px";

    // Show edit and print buttons
    generateResumeButton.style.display = 'none';
    printResumeButton.style.display = 'inline-block';
    editResumeButton.style.display = 'inline-block';
});

// Edit Resume
editResumeButton.addEventListener('click', () => {
    resumeOutput.innerHTML = '';
    resumeOutput.style.border = "none";
    generateResumeButton.style.display = 'inline-block';
    printResumeButton.style.display = 'none';
    editResumeButton.style.display = 'none';
});

// Print Resume as PDF
printResumeButton.addEventListener('click', () => {
    const resumeContent = resumeOutput.innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow?.document.write(`
        <html>
            <head><title>Resume</title></head>
            <body>${resumeContent}</body>
        </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
});
