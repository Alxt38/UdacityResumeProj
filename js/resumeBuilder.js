/*
 This is empty on purpose! Your code to build the resume will go here.
 */

let work = {
    "jobs": [
        {
            "employer": "CHEP",
            "title": "Sr Web Developer",
            "location": "Orlando, FL",
            "startDate": "2004-10-14",
            "endDate": "Present",
            "description": "Develop dynamic web applications using Java Servlet technology"
        },
        {
            "employer": "Health Network Systems",
            "title": "Sr Java Developer",
            "location": "Naperville, IL",
            "startDate": "2001-08-01",
            "endDate": "2002-06-01",
            "description": "Develop medical billing rules in Java in support of automated medical claims processing"
        }
    ]

};

let projects = {
  "projects": [
      {
          "title":"myCHEP",
          "startDate": "2014-10-01",
          "endDate": "Contineous",
          "description":"Modern web application to replace and aging portal applications which support the global business by allowing customers to Order, Transfer, manage their shipping containers, also allowing customers to query thieir Invoices, inventory reports, etc",
          "images": ["{url strings to proj images"]
        }
  ]  
};

let bio = {
    "name": "Joe Developer",
    "role": "Frontend Technical Lead Developer",
    "welcomeMessage": "Its all about the UX",
    "biopic": "https://robohash.org/JoeDeveloper.png?size=300x175",
    "skills": ["ECMA5", "Java", "Java EE", "SQL", "Handlebars", "Marionette", "SAP"],
    "contacts": {
        "mobile": "407.344.4400",
        "email": "alxt38@yahoo.com",
        "github":"Alxt38",
        "location": "Orlando, FL",
        "twitter":""
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

let headerName = HTMLheaderName.replace('%data%', bio.name);
$("#header").append(headerName);