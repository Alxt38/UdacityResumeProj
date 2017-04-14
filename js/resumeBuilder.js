/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Joe Developer",
    "role": "Web Developer",
    "welcomeMessage": "Its all about UX",
    "biopic": "https://robohash.org/JoeDeveloper.png?size=200x200",
    "skills": ["Javascript", "Java", "Java EE", "SQL (Oracle)", "Handlebars", "Marionette", "SAP"],
    "contacts": {
        "mobile": "407.344.4400",
        "email": "alxt38@yahoo.com",
        "github": "Alxt38",
        "location": "Orlando, FL",
        "twitter": ""
    },

    "display": function () {
        $("#header").prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#topContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        if (bio.contacts.twitter) {
            $('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        }
        $('#topContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
        $('#footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        if (bio.contacts.twitter) {
            $('#footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        }
        $('#footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#header').append(HTMLskills.replace('%data%', skill));
        });
    }

};

var work = {
    "jobs": [
        {
            "employer": "CHEP",
            "url": "http://chep.com",
            "title": "Sr Web Developer",
            "location": "Orlando, FL",
            "dates": "Oct 2004 - Present",
            "description": "Develop dynamic web applications using Java Servlet technology"
        },
        {
            "employer": "Concentra formerly Health Network Systems",
            "url": "http://concentra.com",
            "title": "Sr Java Developer",
            "location": "Naperville, IL",
            "dates": "Aug 2001 - June 2002",
            "description": "Develop medical billing rules in Java for the automated medical claims processing engine"
        }
    ],

    "display": function () {
        $('#workExperience').append(HTMLworkStart);
        work.jobs.forEach(function (job) {
            var empLink = HTMLworkEmployer.replace('#', job.url);
            empLink = empLink.replace('%data%', job.employer);

            $('#workExperience').append(empLink + HTMLworkTitle.replace('%data%', job.title));
            $('#workExperience').append(HTMLworkDates.replace('%data%', job.dates));
            $('#workExperience').append(HTMLworkLocation.replace('%data%', job.location));
            $('#workExperience').append(HTMLworkDescription.replace('%data%', job.description));
        });
    }

};

var projects = {
    "projects": [
        {
            "title": "myCHEP",
            "dates": "10/2014 - Present",
            "description": "Modern web application to replace and aging portal applications which support the global business by allowing customers to Order, Transfer, manage their shipping containers, also allowing customers to query thieir Invoices, inventory reports, etc",
            "images": ["./images/myCHEP_sm.png"]
        }
    ],

    "display": function () {
        $('#projects').append(HTMLprojectStart);
        projects.projects.forEach(function (proj) {
            $('#projects').append(HTMLprojectTitle.replace('%data%', proj.title));
            $('#projects').append(HTMLprojectDates.replace('%data%', proj.dates));
            $('#projects').append(HTMLprojectDescription.replace('%data%', proj.description));
            proj.images.forEach(function (img) {
                $('#projects').append(HTMLprojectImage.replace('%data%', img));
            });

        });
    }
};

var education = {
    "schools": [
        {
            "name": "Florida Atlantic University",
            "location": "Boca Raton, FL",
            "degree": "Bachelors",
            "dates": "08/1992 - 08/1994",
            "url": "https://fau.edu",
            "majors": ["Computer Science"]
        },
        {
            "name": "Broward College",
            "location": "Fort Lauderdale, FL",
            "degree": "Associates",
            "dates": "08/1990 - 08/1992",
            "url": "https://fau.edu",
            "majors": ["Computer Science"]
        }
    ],

    "display": function () {
        $('#education').append(HTMLschoolStart);
        education.schools.forEach(function (school) {
            $('#education').append(HTMLschoolName.replace('%data%', school.name));
            $('#education').append(HTMLschoolDegree.replace('%data%', school.degree));
            $('#education').append(HTMLschoolDates.replace('%data%', school.dates));
            $('#education').append(HTMLschoolLocation.replace('%data%', school.location));
            school.majors.forEach(function (major) {
                $('#education').append(HTMLschoolMajor.replace('%data%', major));
            });
        });
    }
};




bio.display();
work.display();
projects.display();
education.display();
 $('#mapDiv').append(googleMap);



