/*
This is empty on purpose! Your code to build the resume will go here.
 */
//var name = "Jenni Carde"
//var formattedName = HTMLheaderName.replace("%data%", name);
//var role = "Front End Developer"
//var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var work = {
  "jobs" : [
    {
      "employer" : "Self",
      "title" : "Freelance English Teacher",
      "location" : "Germany",
      "dates" :"2014-2016",
      "description" : "Create lesson plans for adults learning English and teach them."
    }, {
      "employer" : "Wall Street English",
      "title" : "English Educator",
      "location" : "Thailand",
      "dates" :"2011-2015",
      "description" : "Unshy magazine editor, Language instructor"
    }, {
      "employer" : "Pacifica, LLC",
      "title" : "Contacting Specialist",
      "location" : "California",
      "dates" :"2007-2009",
      "description" : "Proofread contacts"
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
      "url",
      "url",
      "url"
      ]
    }, {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" : [
        "url",
        "url",
        "url"
      ]
    }, {
      "title" : "",
      "dates" : "",
      "description" : "",
      "images" : [
      "url",
      "url",
      "url"
      ]
    }
  ]
};

var bio = {
  "name" : "Jenni Carde",
  "role" : "Front End Developer",
  "welcomeMessage" : "I create for the web.",
  "bioPic" : "http://placehold.it/200x200",
  "contacts" : {
    "mobile" : "949-555-1234",
    "email" : "jc1@gmail.com",
    "github" : "jennicarde",
    "twitter" : "jenni_carde",
    "location" : "California"
  },
  "skills" : ["HTML", "CSS", "JavaScript"]
};

var education = {
  "schools" : [
    {
      // 1st one matches course
      "name" : "",
      "city" : "",
      "degree" : "",
      "majors" : "",
      "dates" : "",
      "url" : ""
    }, {
      "name" : "",
      "location" : "",
      "dates" : "",
      "url" : "",
      "major" : ["", ""]
    }
  ],
  "onlineCourses" : [
    {
      "title" : "",
      "school" : "",
      "dates" : "",
      "url" : ""
    }, {
      "title" : "",
      "school" : "",
      "dates" : "",
      "url" : ""
    }
  ]
};

//var name = "Jenni Carde"
var formattedName = HTMLheaderName.replace("%data%", bio.name);
//var role = "Front End Developer"
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

// Call function
displayWork();

// Logging location of document/page clicks
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Internationalized name

// varible is coming out as undefined in both functions

// MY function
// function inNAME(name) {
//   var oldName = name;
//   console.log(oldName);
//   var names = oldName.split(" ");
//   names[1] = names[1].toUpperCase();
//   names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//   var finalName = names.join(" ");
//   console.log(names);
//   console.log(finalName);
//   return finalName;
// }

// CLASS example function
function inNAME(name) {
  name = name.trim().split(" ");
  console.log(name)
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}
//Note that this at the very bottom, left of the page
$("#main").append(internationalizeButton);
