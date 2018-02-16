var model = {
    bio : {
        "name" : "Nikita Dolmatov",
        "role" : "Web Developer",
        "contacts" : {
            "mobile" : "      +7-(929)-171-53-15      ",
            "email" : "      nik.dolmatov@gmail.com      ",
            "github" : "      dreik3",
            "githubLink" : "https://github.com/Dreik3",
            "location" : "St Petersburg"
        },
        "pictureURL" :  "https://pp.userapi.com/c9764/u20186760/141667985/x_845efcb9.jpg", //new URL no valid JSON
        "welcomeMsg" : "",
        "skills" : ["HTML", " CSS", " JavaScript", " jQuery"]
    },
    work : {
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
    },
    education : {
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
                "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus/core-curriculum"
            }
        ]
    },
    project : {
        "projects" : [
            {
                "title": "Resume",
                "url": "https://github.com/Dreik3/MyResume",
                "dates": "2017",
                "description": "This site is my first project - online resume",
                "image": [
                    "images/resume.jpg"
                        ]
            },
            {
                "title": "Classic Arcade Game Clone",
                "url": "https://github.com/Dreik3/Arcade-game",
                "dates": "2018",
                "description": 'Clone of the classic arcade game within the course "Front-End Web Developer Nanodegree Program"',
                "image": [
                    "images/ArcadeGame.jpg"
                        ]
            },
            {
                "title": "Cat Clicker",
                "url": "https://github.com/Dreik3/CatClicker",
                "dates": "2018",
                "description": 'Training project within the course "Front-End Web Developer Nanodegree Program"',
                "image": [
                    "images/catClicler.jpg"
                        ]
            }
        ]
    },
};

var octopus = {
    init: () => {
        view.internationalButtonAppend();
        view.mapDiv();
        view.displayBio();
        view.displayWork();
        view.displayEducation();
        view.displayProject();
    },
    getBioData: () => {
        return model.bio;
    },
    getWorkData: () => {
        return model.work;
    },
    getEducationData: () => {
        return model.education;
    },
    getProjectData: () => {
        return model.project;
    },
};

var view = {
    displayBio: () => {
        let $headerElem = $("#header");

        let formattedName = HTMLheaderName.replace("%data%", octopus.getBioData().name);
        let formattedRole = HTMLheaderRole.replace("%data%", octopus.getBioData().role);
        $headerElem.prepend(formattedName, formattedRole);

        let formattedMobile = HTMLmobile.replace("%data%", octopus.getBioData().contacts.mobile);
        $headerElem.append(formattedMobile);
        let formattedEmail = HTMLemail.replace("%data%", octopus.getBioData().contacts.email);
        $headerElem.append(formattedEmail);
        let formattedGithub = HTMLgithub.replace("%data%", octopus.getBioData().contacts.github);
        formattedGithub = formattedGithub.replace("%link%", octopus.getBioData().contacts.githubLink);
        $headerElem.append(formattedGithub);
        let formattedPicture = HTMLbioPic.replace("%data%", octopus.getBioData().pictureURL);
        $headerElem.append(formattedPicture);
        let formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", octopus.getBioData().welcomeMsg);
        $headerElem.append(formattedWelcomeMsg);

        if (octopus.getBioData().skills.length > 0) {
            $headerElem.append(HTMLskillsStart);
            let $skillsElem = $("#skills");
            octopus.getBioData().skills.forEach(function appendSkills(value) {
                let formattedSkill = HTMLskills.replace("%data%", value);
                $skillsElem.append(formattedSkill);
            });
        };
    },
    displayWork: () => {
        let $workExperience = $("#workExperience");

        octopus.getWorkData().jobs.forEach(function appendJobs(value, index) {
            $workExperience.append(HTMLworkStart);
            let $workEntry = $(".work-entry:last");

            let formattedWorkEmployer = HTMLworkEmployer.replace("%data%", octopus.getWorkData().jobs[index].employer);
            formattedWorkEmployer = formattedWorkEmployer.replace("%link%", octopus.getWorkData().jobs[index].url);
            let formattedWorkTitle = HTMLworkTitle.replace("%data%", octopus.getWorkData().jobs[index].title);
            let formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $workEntry.append(formattedWorkEmployerTitle);
            let formattedDates = HTMLworkDates.replace("%data%", octopus.getWorkData().jobs[index].dates);
            $workEntry.append(formattedDates);
            let formattedDescriprion = HTMLworkDescription.replace("%data%", octopus.getWorkData().jobs[index].description);
            $workEntry.append(formattedDescriprion);
        });
    },
    displayProject: () => {
        let $projects = $("#projects");

        if (octopus.getProjectData().projects.length > 0) {
            octopus.getProjectData().projects.forEach(function appendProjects(value, index){
                $projects.append(HTMLprojectStart);
                let $projectEntry = $(".project-entry:last");

                let formattedTitle = HTMLprojectTitle.replace("%data%", octopus.getProjectData().projects[index].title);
                formattedTitle = formattedTitle.replace("%link%", octopus.getProjectData().projects[index].url);
                $projectEntry.append(formattedTitle);
                let formattedDates = HTMLprojectDates.replace("%data%", octopus.getProjectData().projects[index].dates);
                $projectEntry.append(formattedDates);
                let formattedDescription = HTMLprojectDescription.replace("%data%", octopus.getProjectData().projects[index].description);
                $projectEntry.append(formattedDescription);

                if (octopus.getProjectData().projects[index].image.length > 0) {
                    octopus.getProjectData().projects[index].image.forEach(function allProjectImages(value,ind){
                        let formattedImage = HTMLprojectImage.replace("%data%", octopus.getProjectData().projects[index].image[ind]);
                        $projectEntry.append(formattedImage);
                    });
                }

            });
        }
    },
    displayEducation: () => {
        let $educationElem = $("#education");

        octopus.getEducationData().schools.forEach(function appendSchools(value, index){
            $educationElem.append(HTMLschoolStart);
            let $educationEntry = $(".education-entry:last");

            let formattedSchoolName = HTMLschoolName.replace("%data%", octopus.getEducationData().schools[index].name);
            formattedSchoolName = formattedSchoolName.replace("%link%", octopus.getEducationData().schools[index].url);
            $educationEntry.append(formattedSchoolName);
            let formattedSchoolDegree = HTMLschoolDegree.replace("%data%", octopus.getEducationData().schools[index].degree);
            $educationEntry.append(formattedSchoolDegree);
            let formattedSchoolDates = HTMLschoolDates.replace("%data%", octopus.getEducationData().schools[index].dates);
            $educationEntry.append(formattedSchoolDates);
            let formattedSchoolMajor = HTMLschoolMajor.replace("%data%", octopus.getEducationData().schools[index].major);
            $educationEntry.append(formattedSchoolMajor);
        });
        $educationElem.append(HTMLonlineClasses);
        octopus.getEducationData().onlineCourses.forEach(function appendCourses(value, index){
            $educationElem.append(HTMLschoolStart);
            let $educationEntry = $(".education-entry:last");

            var formattedTitle = HTMLonlineTitle.replace("%data%", octopus.getEducationData().onlineCourses[index].title);
            formattedTitle = formattedTitle.replace("%link%", octopus.getEducationData().onlineCourses[index].url);
            $educationEntry.append(formattedTitle);
            var formattedSchool = HTMLonlineSchool.replace("%data%", octopus.getEducationData().onlineCourses[index].school);
            $educationEntry.append(formattedSchool);
            var formattedDates = HTMLonlineDates.replace("%data%", octopus.getEducationData().onlineCourses[index].dates);
            $educationEntry.append(formattedDates);
            //var formattedURL = HTMLonlineURL.replace("%data%", octopus.getEducationData().onlineCourses[index].url);
            //$educationEntry.append(formattedURL);
        });
    },
    internationalButtonAppend: () => {
        $("#main").append(internationalizeButton);
    },
    mapDiv: () => {
        $("#mapDiv").append(googleMap);
    },
    inName: (name) => {
        let nameArray = name.trim().split(" ");
        nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
        nameArray[1] = nameArray[1].toUpperCase();
        var interName = nameArray.join(" ");
        return interName;
    }

};

octopus.init();

/*
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
};*/

/*work.display = function(){
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
};*/

/*project.display = function(){
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
};*/

/*education.display = function(){
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
};*/
// international name (Nikita DOLMATOV)
/*    function inName(name){
    var nameArray = name.trim().split(" ");
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    nameArray[1] = nameArray[1].toUpperCase();
    var interName = nameArray.join(" ");
    return interName;
}*/
/*$("#main").append(internationalizeButton);*/

/*bio.display();
work.display();
project.display();
education.display();*/

/*$("#mapDiv").append(googleMap);*/