/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var name = "Jenni Carde"
//var formattedName = HTMLheaderName.replace("%data%", name);
//var role = "Front End Developer"
//var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var bio = {
  "name" : "Jenni Carde",
  "role" : "Front-End Developer",
  "contacts" : {
    "mobile" : "949-555-1234",
    "email" : "jc1@gmail.com",
    "github" : "jennicarde",
    "twitter" : "jenni_carde",
    "location" : "California"
  },
  "welcomeMessage" : "I create for the web.",
  "skills" : ["HTML", "CSS", "JavaScript"],
  "bioPic" : "http://placehold.it/200x200"
};

var work = {
  "jobs" : [
    {
      "employer" : "Self",
      "title" : "Online & Freelance English Teacher",
      "location" : "Germany",
      "dates" :"2014-2016",
      "description" : "Teach private one-on-one lessons and intensive courses for all ages and levels in both General and Business English; <br>Design a diverse curriculum focused on motivating students and meeting each student's needs, learning style, and ability; <br>Incorporate education technology into interactice lessons."
    }, {
      "employer" : "Unshy Magazine, Wall Street English",
      "title" : "Content Coordinator",
      "location" : "Thailand",
      "dates" :"2011-2013",
      "description" : "Taught journalistic writing, including instructing students on advanced sentence styles, encouraging English language enthusiasm and creativity, as well as reviewing and editing weekly writing submissions; <br>Promoted Unshy Magazine (a student newspaper) and complementary writing programs; <br>Co-wrote, directed, filmed, and edited student films for school events and contents."
    }, {
      "employer" : "Wall Street English",
      "title" : "English Language Teacher",
      "location" : "Thailand",
      "dates" :"2011-2013",
      "description" : "Adapted instruction materials to create interesting, challenging, and fluid lessons in Encounter and Complementary classes; <br>Elicit, teach, and provide positive feedback and constructive critcism; <br>Motivated and encouraged students to maintain effective and efficient individual study habbits; <br>Planned and prepared engaging, interactive, and dynamic lesson for Social Clubs and English Corners."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Animal Trading Card",
      "dates" : "2016",
      "description" : "Practice CSS skills",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    }, {
      "title" : "Mock up to Article",
      "dates" : "2016",
      "description" : "Pratice HTML skills",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    }, {
      "title" : "Portfolio",
      "dates" : "2016",
      "description" : "HTML, CSS, JavaScript, image compression, responsive design",
      "images" : [
        "http://placehold.it/350x150",
        "http://placehold.it/350x150",
        "http://placehold.it/350x150"
      ]
    }
  ]
};

var education = {
  "schools" : [
    {
      "name" : "New York University",
      "location" : "New York, New York",
      "degree" : "MA",
      "majors" : ["European & Mediterranean Studies"],
      "dates" : "2010",
      "url" : "http://cems.as.nyu.edu/page/home"
    }, {
      "name" : "University of California, Irvine",
      "location" : "Irvine, CA",
      "degree" : "BA",
      "majors" : ["International Studies; Minor: Conflict Resolution"],
      "dates" : "2006",
      "url" : "http://www.internationalstudies.socsci.uci.edu/"
    }
  ],
  "certificates" : [
    {
      "name" : "International House Bangkok",
      "location" : "Thailand",
      "degree" : "Certificate",
      "majors" : ["CELTA (The Certificate in teaching English to speakers of other languages)"],
      "dates" : "2011",
      "url" : "http://www.ihbangkok.com/"
    }, {
      "name" : "Orange County Human Relations/UCI",
      "location" : "Santa Ana, CA",
      "degree" : "Certificate",
      "majors" : ["Mediation"],
      "dates" : "2005",
      "url" : "http://www.ochumanrelations.org/"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2016",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }, {
      "title" : "Interaction Design Specialization",
      "school" : "Coursera; University of California, San Diego",
      "dates" : "2016",
      "url" : "https://www.coursera.org/specializations/interaction-design"
    }, {
      "title" : "UX Design",
      "school" : "Springboard",
      "dates" : "2016",
      "url" : "https://www.springboard.com/workshops/ux-design/"
    }, {
      "title" : "Design 101",
      "school" : "Designlab",
      "dates" : "2016",
      "url" : "http://trydesignlab.com/web-design-course/"
    }, {
      "title" : "Inbound Marketing Certification",
      "school" : "HubSpot",
      "dates" : "2016",
      "url" : "https://certification.hubspot.com/inbound-certification"
    }
  ]
};

// HEADER - BIO
function displayBio () {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  // if (bio.contacts.length > 0) {
  //   $("#topContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", data));
  //
  //   bio.contacts.forEach(function(contact){
  //     var formattedMobile = HTMLmobile.replace("%data%", contact.mobile);
  //     $("#topContacts").append(formattedMobile);
  //
  //     var formattedEmail = HTMLemail.replace("%data%", contact.email);
  //     $("#topContacts").append(formattedEmail);
  //   })
  // }

  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  }
}
// Call function
displayBio();

// WORK EXPERIENCE
// Changed to forEach() or for()
/*
function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedworkLocation);

    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedworkDates);

    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedworkDescription);
  }
}
*/

function displayWork() { //one way to start function
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedworkLocation);

    var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedworkDates);

    var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedworkDescription);
  })
}
// Call function
displayWork();

// PROJECTS
// Changed to forEach() or for()
/*
projects.display = function () {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
};
*/

projects.display = function () { //another way to start function
  projects.projects.forEach(function(project) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      });
    }
  })
};
// Call function
projects.display();

//EDUCATION
function displayEducation() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedSchoolLocation);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);

    if (school.majors.length > 0) {
      school.majors.forEach(function(major) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        var formattedSchoolTitle = formattedSchoolMajor + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolTitle);
      });
    }
  })

  if (education.onlineCourses.length > 0) {
    $(".education-entry:last").append(HTMLonlineClasses);
  }

  education.onlineCourses.forEach(function(course) {

      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedOnlineSchoolTitle = formattedOnlineTitle + formattedOnlineSchool;
      $(".education-entry:last").append(formattedOnlineSchoolTitle);

      var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
      $(".education-entry:last").append(formattedOnlineDates);

      var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
      $(".education-entry:last").append(formattedOnlineURL);
  })
}
// Call function
displayEducation();


// *************************************
/*
// LOGGING LOCATION OF DOCUMENTS/PAGE CLICKS
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// INTERNATIONALIZED NAME
// **My function**
function inName(name) {
  var oldName = name;
  var names = oldName.split(" ");
  names[1] = names[1].toUpperCase();
  names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
  var finalName = names.join(" ");
  return finalName;
}
// **Class example function**
// function inName(name) {
//   name = bio.name.trim().split(" ");
//   console.log(name)
//   name[1] = name[1].toUpperCase();
//   name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//   return name[0] + " " + name[1];
// }
//Note that this at the very bottom, left of the page
$("#main").append(internationalizeButton);
*/
