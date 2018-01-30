var headerElem = $("#header");
var educationElem = $("#education");
var bio = {
    "name" : "Nikita Dolmatov",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "+7-(921)-879-30-52",
        "email" : "nik.dolmatov@gmail.com",
        "github" : "dreik3",
        "githubLink" : "https://github.com/Dreik3",
        "location" : "St Petersburg"
    },
    "pictureURL" :  "https://pp.userapi.com/c9764/u20186760/141667985/x_845efcb9.jpg", //new URL no valid JSON
    "welcomeMsg" : "Hello, I want to find my first Web Developer job!",
    "skills" : ["HTML", " CSS", " JavaScript", " jQuery"]
};

var work = {
    "jobs": [
        {
            "title" : "Mechanic of the department of starting equipment for preparation and launching missiles",
            "employer" : "RF Armed Forces",
            "location": "St Petersburg",
            "description": "",
            "dates" : "2016 - 2018",
            "url": "http://mil.ru"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Petrozavodsk State University",
            "location": "Petrozavodsk",
            "degree": "Bachelor",
            "major": "applied mathematics and computer science",
            "dates": "2015",
            "url": "https://petrsu.ru"
        },
         {
            "name": "University lyceum",
            "location": "Petrozavodsk",
            "degree": "completed secondary education",
            "major": "physics mathematics",
            "dates": "2010",
            "url": "http://ul.karelia.ru/index.php"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree Program",
            "school": "udacity",
            "dates": "2018",
            "URL": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
        }
    ]
};

var project = {
    "projects" : [
        {
            "title": "Resume",
            "dates": "2017",
            "description": "This site is my first project - online resume",
            "image": [
                "images/resume.jpg"
                    ]
        },
        {
            "title": "Classic Arcade Game Clone",
            "dates": "2018",
            "description": 'Clone of the classic arcade game within the course "Front-End Web Developer Nanodegree Program"',
            "image": [
                "images/ArcadeGame.jpg"
                    ]
        }
    ]
};

bio.display = function(){

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    headerElem.prepend(formattedName, formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    headerElem.append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    headerElem.append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    formattedGithub = formattedGithub.replace("%link%", bio.contacts.githubLink);
    headerElem.append(formattedGithub);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
    headerElem.append(formattedPicture);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
    headerElem.append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        headerElem.append(HTMLskillsStart);
        bio.skills.forEach(function appendSkills(value) {
            var formattedSkill = HTMLskills.replace("%data%", value);
            $("#skills").append(formattedSkill);
        });
    }
};

work.display = function(){
    work.jobs.forEach(function appendJobs(value, index) {
        $("#workExperience").append(HTMLworkStart);
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
        formattedWorkEmployer = formattedWorkEmployer.replace("%link%", work.jobs[index].url);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
        var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescriprion = HTMLworkDescription.replace("%data%", work.jobs[index].description);
        $(".work-entry:last").append(formattedDescriprion);
    });
};

project.display = function(){
    if (project.projects.length > 0) {
        project.projects.forEach(function appendProjects(value, index){
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[index].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", project.projects[index].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[index].description);
            $(".project-entry:last").append(formattedDescription);
            if (project.projects[index].image.length > 0) {
                project.projects[index].image.forEach(function allProjectImages(value,ind){
                    var formattedImage = HTMLprojectImage.replace("%data%", project.projects[index].image[ind]);
                $(".project-entry:last").append(formattedImage);
                });
            }

        });
    }
};

education.display = function(){
    education.schools.forEach(function appendSchools(value, index){
        educationElem.append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[index].name);
        formattedSchoolName = formattedSchoolName.replace("%link%", education.schools[index].url);
        $(".education-entry:last").append(formattedSchoolName);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[index].degree);
        $(".education-entry:last").append(formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[index].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[index].major);
        $(".education-entry:last").append(formattedSchoolMajor);
    });
    educationElem.append(HTMLonlineClasses);
    education.onlineCourses.forEach(function appendCourses(value, index){
        educationElem.append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title);
        formattedTitle = formattedTitle.replace("%link%", education.onlineCourses[index].URL);
        $(".education-entry:last").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school);
        $(".education-entry:last").append(formattedSchool);
        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates);
        $(".education-entry:last").append(formattedDates);
        //var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[index].URL);
        //$(".education-entry:last").append(formattedURL);
    });
};
// international name (Nikita DOLMATOV)
    function inName(name){
    var nameArray = name.trim().split(" ");
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    var interName = nameArray.join(" ");
    return interName;
}
$("#main").append(internationalizeButton);

bio.display();
work.display();
project.display();
education.display();

$("#mapDiv").append(googleMap);