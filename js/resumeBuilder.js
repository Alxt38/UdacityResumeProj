/*
 This is empty on purpose! Your code to build the resume will go here.
 */

let work = {
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
            let empLink = HTMLworkEmployer.replace('#',job.url);
            empLink = empLink.replace('%data%', job.employer);
       
            $('#workExperience').append(empLink + HTMLworkTitle.replace('%data%', job.title));
            $('#workExperience').append(HTMLworkDates.replace('%data%', job.dates));
            $('#workExperience').append(HTMLworkDescription.replace('%data%', job.description));
        });
    }

};

let projects = {
    "projects": [
        {
            "title": "myCHEP",
            "startDate": "2014-10-01",
            "endDate": "Contineous",
            "description": "Modern web application to replace and aging portal applications which support the global business by allowing customers to Order, Transfer, manage their shipping containers, also allowing customers to query thieir Invoices, inventory reports, etc",
            "images": ["{url strings to proj images"]
        }
    ]
};

let bio = {
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
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            $('#header').append(HTMLskills.replace('%data%', skill));
        });



    }

}

let education = {
    schools: [
        {
            "name": "Florida Atlantic University",
            "city": "Boca Raton, FL",
            "degree": "Bachelors",
            "startDate": "1992-08",
            "endDate": "1994-08",
            "url": "www.fau.edu",
            "majors": ["Computer Science"]
        },
        {
            name: "Florida Atlantic University",
            city: "Boca Raton, FL",
            degree: "Bachelors",
            major: ["Computer Science"]
        }
    ]
}




bio.display();
work.display();


