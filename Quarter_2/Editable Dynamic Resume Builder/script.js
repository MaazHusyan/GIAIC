"use strict";
var _a, _b, _c;
// Import html2pdf.js for PDF generation
// Arrays to hold user inputs for each section
var educationList = [];
var skillsList = [];
var experienceList = [];
var uploadedImageURL = null; // To hold uploaded image URL
// DOM elements for each section
var eduSection = document.getElementById("education-section");
var skillSection = document.getElementById("skills-section");
var expSection = document.getElementById("experience-section");
var resumeOutput = document.getElementById("resume-output");
var profileImg = document.getElementById("profile-img");
var imgUpload = document.getElementById("img-upload");
var editButton = document.getElementById("edit-resume");
var generateResumeButton = document.getElementById("generate-resume");
var makePdfButton = document.getElementById("make-pdf");
var genderRadios = document.querySelectorAll('input[name="gender"]');
// Image Upload Functionality
imgUpload.addEventListener("change", function (event) {
    var target = event.target;
    if (target.files && target.files[0]) {
        var file = target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            if (e.target && typeof e.target.result === 'string') {
                uploadedImageURL = e.target.result; // Save the image URL
                profileImg.src = uploadedImageURL; // Display the image in the form
            }
        };
        reader.readAsDataURL(file);
    }
});
// Function to add Education
(_a = document.getElementById("add-edu")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var eduDiv = document.createElement("div");
    eduDiv.innerHTML = "\n        <input type=\"text\" placeholder=\"Degree\" class=\"degree\">\n        <input type=\"text\" placeholder=\"Institution\" class=\"institution\">\n        <input type=\"text\" placeholder=\"Year\" class=\"year\">\n    ";
    eduSection.appendChild(eduDiv);
});
// Function to add Skills
(_b = document.getElementById("add-skill")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var skillDiv = document.createElement("div");
    skillDiv.innerHTML = "<input type=\"text\" placeholder=\"Skill\" class=\"skill\">";
    skillSection.appendChild(skillDiv);
});
// Function to add Experience
(_c = document.getElementById("add-exp")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var expDiv = document.createElement("div");
    expDiv.innerHTML = "\n        <input type=\"text\" placeholder=\"Job Title\" class=\"jobTitle\">\n        <input type=\"text\" placeholder=\"Company\" class=\"company\">\n        <input type=\"text\" placeholder=\"Years\" class=\"years\">\n    ";
    expSection.appendChild(expDiv);
});
// Collect data and generate resume output on form submission
generateResumeButton === null || generateResumeButton === void 0 ? void 0 : generateResumeButton.addEventListener("click", function () {
    // Personal Information
    if (!validateFields())
        return;
    var name = document.getElementById("for-name").value || '';
    var email = document.getElementById("for-email").value || '';
    var phone = document.getElementById("for-phone").value || '';
    var description = document.getElementById("for-description").value || '';
    var gender = getSelectedGender(); // Get the selected gender
    // Function to validate required fields
    function validateFields() {
        var name = document.getElementById("for-name").value;
        var email = document.getElementById("for-email").value;
        var phone = document.getElementById("for-phone").value;
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
    function getSelectedGender() {
        var selectedGender = '';
        genderRadios.forEach(function (radio) {
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
    educationList = Array.prototype.slice.call(eduSection.querySelectorAll("div")).map(function (eduDiv) {
        var degreeInput = eduDiv.querySelector(".degree");
        var institutionInput = eduDiv.querySelector(".institution");
        var yearInput = eduDiv.querySelector(".year");
        if (degreeInput && institutionInput && yearInput) {
            var degree = degreeInput.value || "";
            var institution = institutionInput.value || "";
            var year = yearInput.value || "";
            if (degree && institution && year) {
                return { degree: degree, institution: institution, year: year };
            }
        }
        return null; // Ignore empty fields
    }).filter(function (edu) { return edu !== null; });
    // Gather skills
    skillsList = Array.prototype.slice.call(skillSection.querySelectorAll("div")).map(function (skillDiv) {
        var skillInput = skillDiv.querySelector(".skill");
        if (skillInput) {
            var skillName = skillInput.value || "";
            return { skillName: skillName };
        }
        return null;
    }).filter(function (skill) { return skill && skill.skillName; });
    // Gather experience details
    experienceList = Array.prototype.slice.call(expSection.querySelectorAll("div")).map(function (expDiv) {
        var jobTitleInput = expDiv.querySelector(".jobTitle");
        var companyInput = expDiv.querySelector(".company");
        var yearsInput = expDiv.querySelector(".years");
        if (jobTitleInput && companyInput && yearsInput) {
            var jobTitle = jobTitleInput.value || "";
            var company = companyInput.value || "";
            var years = yearsInput.value || "";
            if (jobTitle && company && years) {
                return { jobTitle: jobTitle, company: company, years: years };
            }
        }
        return null; // Ignore empty fields
    }).filter(function (exp) { return exp !== null; });
    // Generate Resume Output
    var profileImgHTML = uploadedImageURL ? "<img class=\"profile-img\" src=\"".concat(uploadedImageURL, "\" alt=\"Profile Image\" style=\"width:150px; height:auto;\">") : '';
    resumeOutput.innerHTML = "\n        <div class=\"resume-header\">\n            <h2 class=\"resume-name\">".concat(name, "</h2>\n            ").concat(profileImgHTML, "\n        </div>\n\n        <div class=\"personalInfo-section\">\n            <p class=\"resume-email\">Email: ").concat(email, "</p>\n            <p class=\"resume-phone\">Phone: ").concat(phone, "</p>\n            <p class=\"resume-gender\">Gender: ").concat(gender, "</p>\n        </div>\n\n        <div class=\"education-section\">\n            <h3 class=\"section-title\">Education</h3>\n            <ul class=\"education-list\">\n                ").concat(educationList.map(function (edu) { return "<li class=\"education-item\"><strong>".concat(edu.degree, "</strong>, ").concat(edu.institution, " (").concat(edu.year, ")</li>"); }).join(""), "\n            </ul>\n        </div>\n\n        <div class=\"skills-section\">\n            <h3 class=\"section-title\">Skills</h3>\n            <ul class=\"skills-list\">\n                ").concat(skillsList.map(function (skill) { return "<li class=\"skill-item\">".concat(skill.skillName, "</li>"); }).join(""), "\n            </ul>\n        </div>\n\n        <div class=\"experience-section\">\n            <h3 class=\"section-title\">Experience</h3>\n            <ul class=\"experience-list\">\n                ").concat(experienceList.map(function (exp) { return "<li class=\"experience-item\"><strong>".concat(exp.jobTitle, "</strong> at ").concat(exp.company, " (").concat(exp.years, ")</li>"); }).join(""), "\n            </ul>\n        </div>\n\n        <div class=\"description-section\">\n            <h3 class=\"section-title\">Description</h3>\n            <p class=\"description-text\">").concat(description, "</p>\n        </div>\n    ");
    resumeOutput.style.display = "block";
    editButton.style.display = "block";
});
// Clear resume content without reloading the page
editButton.addEventListener("click", function () {
    // Clear the generated resume content
    resumeOutput.innerHTML = "";
    // Hide the resume output and edit button
    resumeOutput.style.display = "none";
    editButton.style.display = "none";
    // Optionally, clear the form inputs if desired
    document.getElementById("for-name").value = '';
    document.getElementById("for-email").value = '';
    document.getElementById("for-phone").value = '';
    document.getElementById("for-description").value = '';
    imgUpload.value = '';
    profileImg.src = ''; // Clear profile image if needed
    // Clear dynamic sections for education, skills, and experience
    eduSection.innerHTML = "";
    skillSection.innerHTML = "";
    expSection.innerHTML = "";
    // Reset the gender selection if needed
    genderRadios.forEach(function (radio) {
        radio.checked = false;
    });
    // Clear stored lists
    educationList = [];
    skillsList = [];
    experienceList = [];
    uploadedImageURL = null;
});
