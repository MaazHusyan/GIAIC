"use strict";
// Import html2pdf.js for PDF generation

// Arrays to hold user inputs for each section
let educationList: { degree: string, institution: string, year: string }[] = [];
let skillsList: { skillName: string }[] = [];
let experienceList: { jobTitle: string, company: string, years: string }[] = [];
let uploadedImageURL: string | null = null; // To hold uploaded image URL

// DOM elements for each section
const eduSection = document.getElementById("education-section")!;
const skillSection = document.getElementById("skills-section")!;
const expSection = document.getElementById("experience-section")!;
const resumeOutput = document.getElementById("resume-output")!;
const profileImg = document.getElementById("profile-img") as HTMLImageElement;
const imgUpload = document.getElementById("img-upload") as HTMLInputElement;
const editButton = document.getElementById("edit-resume")!;
const generateResumeButton = document.getElementById("generate-resume")!;
const makePdfButton = document.getElementById("make-pdf")!;
const genderRadios = document.querySelectorAll('input[name="gender"]') as NodeListOf<HTMLInputElement>;

// Image Upload Functionality
imgUpload.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
        const file = target.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                uploadedImageURL = e.target.result; // Save the image URL
                profileImg.src = uploadedImageURL; // Display the image in the form
            }
        };
        reader.readAsDataURL(file);
    }
});

// Function to add Education
document.getElementById("add-edu")?.addEventListener("click", () => {
    const eduDiv = document.createElement("div");
    eduDiv.innerHTML = `
        <input type="text" placeholder="Degree" class="degree">
        <input type="text" placeholder="Institution" class="institution">
        <input type="text" placeholder="Year" class="year">
    `;
    eduSection.appendChild(eduDiv);
});

// Function to add Skills
document.getElementById("add-skill")?.addEventListener("click", () => {
    const skillDiv = document.createElement("div");
    skillDiv.innerHTML = "<input type=\"text\" placeholder=\"Skill\" class=\"skill\">";
    skillSection.appendChild(skillDiv);
});

// Function to add Experience
document.getElementById("add-exp")?.addEventListener("click", () => {
    const expDiv = document.createElement("div");
    expDiv.innerHTML = `
        <input type="text" placeholder="Job Title" class="jobTitle">
        <input type="text" placeholder="Company" class="company">
        <input type="text" placeholder="Years" class="years">
    `;
    expSection.appendChild(expDiv);
});

// Collect data and generate resume output on form submission
generateResumeButton?.addEventListener("click", () => {
    // Personal Information
    if (!validateFields()) return;

    const name = (document.getElementById("for-name") as HTMLInputElement).value || '';
    const email = (document.getElementById("for-email") as HTMLInputElement).value || '';
    const phone = (document.getElementById("for-phone") as HTMLInputElement).value || '';
    const description = (document.getElementById("for-description") as HTMLTextAreaElement).value || '';
    const gender = getSelectedGender(); // Get the selected gender

    // Function to validate required fields
    function validateFields(): boolean {
        const name = (document.getElementById("for-name") as HTMLInputElement).value;
        const email = (document.getElementById("for-email") as HTMLInputElement).value;
        const phone = (document.getElementById("for-phone") as HTMLInputElement).value;

        if (!name) {
            alert("Name is required.");
            return false;
        }
        if (!email) {
            alert("Email is required.");
            return false;
        }
        if (!phone) {
            alert("Phone number is required.");
            return false;
        }
        return true;
    }

    // Function to get the selected gender
    function getSelectedGender(): string {
        let selectedGender = '';
        genderRadios.forEach((radio) => {
            if (radio.checked) {
                selectedGender = radio.value;
            }
        });
        if (!selectedGender) {
            alert("Please select a gender.");
            return ''; // Return empty if no gender is selected
        }
        return selectedGender;
    }

    // Gather education details
    educationList = Array.prototype.slice.call(eduSection.querySelectorAll("div")).map((eduDiv) => {
        const degreeInput = eduDiv.querySelector(".degree") as HTMLInputElement;
        const institutionInput = eduDiv.querySelector(".institution") as HTMLInputElement;
        const yearInput = eduDiv.querySelector(".year") as HTMLInputElement;
        if (degreeInput && institutionInput && yearInput) {
            const degree = degreeInput.value || "";
            const institution = institutionInput.value || "";
            const year = yearInput.value || "";
            if (degree && institution && year) {
                return { degree, institution, year };
            }
        }
        return null; // Ignore empty fields
    }).filter(edu => edu !== null) as { degree: string, institution: string, year: string }[];

    // Gather skills
    skillsList = Array.prototype.slice.call(skillSection.querySelectorAll("div")).map((skillDiv) => {
        const skillInput = skillDiv.querySelector(".skill") as HTMLInputElement;
        if (skillInput) {
            const skillName = skillInput.value || "";
            return { skillName };
        }
        return null;
    }).filter(skill => skill && skill.skillName) as { skillName: string }[];

    // Gather experience details
    experienceList = Array.prototype.slice.call(expSection.querySelectorAll("div")).map((expDiv) => {
        const jobTitleInput = expDiv.querySelector(".jobTitle") as HTMLInputElement;
        const companyInput = expDiv.querySelector(".company") as HTMLInputElement;
        const yearsInput = expDiv.querySelector(".years") as HTMLInputElement;
        if (jobTitleInput && companyInput && yearsInput) {
            const jobTitle = jobTitleInput.value || "";
            const company = companyInput.value || "";
            const years = yearsInput.value || "";
            if (jobTitle && company && years) {
                return { jobTitle, company, years };
            }
        }
        return null; // Ignore empty fields
    }).filter(exp => exp !== null) as { jobTitle: string, company: string, years: string }[];

    // Generate Resume Output
    const profileImgHTML = uploadedImageURL ? `<img class="profile-img" src="${uploadedImageURL}" alt="Profile Image" style="width:150px; height:auto;">` : '';
    resumeOutput.innerHTML = `
        <div class="resume-header">
            <h2 class="resume-name">${name}</h2>
            ${profileImgHTML}
        </div>

        <div class="personalInfo-section">
            <p class="resume-email">Email: ${email}</p>
            <p class="resume-phone">Phone: ${phone}</p>
            <p class="resume-gender">Gender: ${gender}</p>
        </div>

        <div class="education-section">
            <h3 class="section-title">Education</h3>
            <ul class="education-list">
                ${educationList.map(edu => `<li class="education-item"><strong>${edu.degree}</strong>, ${edu.institution} (${edu.year})</li>`).join("")}
            </ul>
        </div>

        <div class="skills-section">
            <h3 class="section-title">Skills</h3>
            <ul class="skills-list">
                ${skillsList.map(skill => `<li class="skill-item">${skill.skillName}</li>`).join("")}
            </ul>
        </div>

        <div class="experience-section">
            <h3 class="section-title">Experience</h3>
            <ul class="experience-list">
                ${experienceList.map(exp => `<li class="experience-item"><strong>${exp.jobTitle}</strong> at ${exp.company} (${exp.years})</li>`).join("")}
            </ul>
        </div>

        <div class="description-section">
            <h3 class="section-title">Description</h3>
            <p class="description-text">${description}</p>
        </div>
    `;

    resumeOutput.style.display = "block";
    editButton.style.display = "block";
});

// Clear resume content without reloading the page
editButton.addEventListener("click", () => {
    // Clear the generated resume content
    resumeOutput.innerHTML = "";
    
    // Hide the resume output and edit button
    resumeOutput.style.display = "none";
    editButton.style.display = "none";
    
    // Optionally, clear the form inputs if desired
    (document.getElementById("for-name") as HTMLInputElement).value = '';
    (document.getElementById("for-email") as HTMLInputElement).value = '';
    (document.getElementById("for-phone") as HTMLInputElement).value = '';
    (document.getElementById("for-description") as HTMLTextAreaElement).value = '';
    imgUpload.value = '';
    profileImg.src = ''; // Clear profile image if needed
    
    // Clear dynamic sections for education, skills, and experience
    eduSection.innerHTML = "";
    skillSection.innerHTML = "";
    expSection.innerHTML = "";
    
    // Reset the gender selection if needed
    genderRadios.forEach((radio) => {
        radio.checked = false;
    });

    // Clear stored lists
    educationList = [];
    skillsList = [];
    experienceList = [];
    uploadedImageURL = null;
});
