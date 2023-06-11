// Social Media Icons
var icons = [
    { icn: "    <a href=\"https://www.facebook.com/Roman.Ron21\" target=\"_blank\" ><i class=\"fa-brands fa-facebook-f text-light\"></i></a>" },
    { icn: "<a href=\"https://api.whatsapp.com/send?phone=972533396906\" target=\"_blank\"><i class=\"fa-brands fa-whatsapp text-light\"></i></a>" },
    { icn: "<a href=\"https://github.com/298Ron?tab=repositories\" target=\"_blank\"><i class=\"fa-brands fa-github text-light\"></i></a>" },
];
function socialMediaBar() {
    var socialNav = document.getElementById("socialMedia");
    for (var _i = 0, icons_1 = icons; _i < icons_1.length; _i++) {
        var icon = icons_1[_i];
        socialNav.innerHTML += "<ul class=\"align-content-center bg-dark \">\n        <li class=\"list-group-item h3 p-1\" style=\"margin-left:-10px;\">".concat(icon.icn, "</li>\n        </ul>");
    }
}
socialMediaBar();
// About me
var personalInfo = [
    {
        fullName: "Ron Shilimov",
        proffesion: "Fullstack Web Developer",
        email: "298Ron@gmail.com",
        phone: "0533396906",
    }
];
function displayAboutLeftColumn() {
    var leftColumn = document.getElementById("leftColumn");
    for (var i = 0; i < personalInfo.length; i++) {
        leftColumn.innerHTML += "<div class=\"h5 text-light\" style=\"line-height:4rem;text-align:left;\">\n        <ul>\n        <li>Full Name: ".concat(personalInfo[i].fullName, "</li>\n        <li>Proffesion: ").concat(personalInfo[i].proffesion, "</li>\n        <li>Email: ").concat(personalInfo[i].email, "</li>\n        <li>Phone: ").concat(personalInfo[i].phone, "</li>\n        </ul>\n        </div>");
    }
}
displayAboutLeftColumn();
// My skills
var languages = [
    { img: "./Images/languages/javascript.png" },
    { img: "./Images/languages/typescript.png" },
    { img: "/Images/languages/html5.png" },
    { img: "./Images/languages/css3.png" },
    { img: "./Images/languages/bootstrap.png" },
    { img: "./Images/languages/sass.png" },
];
function displayLanguagesInRightColumn() {
    var rightColumn = document.getElementById("rightColumn");
    for (var _i = 0, languages_1 = languages; _i < languages_1.length; _i++) {
        var image = languages_1[_i];
        rightColumn.innerHTML += "\n        <img src=\"".concat(image.img, "\" style=\"width: 70px;\"alt=\"\" class=\"m-4\">\n\n        ");
    }
}
displayLanguagesInRightColumn();
var projects = [
    {
        id: 1,
        title: "ManageU",
        img: "./Images/ManageU.jpg.png",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript, TypeScript",
        git: "https://github.com/298Ron/ManageU",
        DevelopmentField: "FullStack",
        link: 'https://manageu-ron.netlify.app/',
    },
    {
        id: 2,
        title: "MyAccount",
        img: "./Images/MyAccount.jpg.png",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript",
        git: "https://github.com/298Ron/MyAccount",
        DevelopmentField: "FullStack",
        link: 'https://myaccount-ron.netlify.app/',
    },
    {
        id: 3,
        title: "TechIT",
        img: "./Images/TechIT.jpg",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript",
        git: "https://github.com/298Ron/TECHIT",
        DevelopmentField: "FullStack",
        link: 'https://techit-ron.netlify.app/'
    },
];
function displayGallery() {
    var gallery = document.getElementById("gallery");
    for (var i = 0; i < projects.length; i++) {
        gallery.innerHTML += "<div class=\" col-md-4  mt-3\">\n        <div class=\"card\" style=\"width: 100%;\">\n                    <a href=\"".concat(projects[i].link, "\" target=\"_blank\"><img src=\"").concat(projects[i].img, "\" class=\"card-img-top\" alt=\"...\" style=\"object-fit: cover;\"></a>\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title mt-3\" style=\"font-weight:bold\">").concat(projects[i].title, "</h5>\n                        <p class=\"card-text\">").concat(projects[i].description, "</p>\n                    </div>\n                    <ul class=\"list-group list-group-flush\">\n                        <li class=\"list-group-item\" >").concat(projects[i].stack, "\n                        <a href=\"").concat(projects[i].git, "\" target=\"_blank\"><i class=\"fa-brands fa-github text-dark fs-3 gitIcon\" style=\"margin-left:20px;\" ></i></a></li>\n                        <li class=\"list-group-item\">").concat(projects[i].DevelopmentField, "</li>\n                        <li class=\"list-group-item mobileGit\" style=\"display:none;\"><a href=\"").concat(projects[i].git, "\" target=\"_blank\"><h2>Github Link</h2></a></li>\n                        \n                    </ul>\n\n                </div>\n        </div>\n        ");
    }
}
;
displayGallery();
/* Contact Page validation */
function checkFormValidation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (name == "") {
        alert("Please enter your name.");
    }
    else if (emailRegex.test(email) == false) {
        alert("Please enter a valid email");
    }
    else if (message == "") {
        (alert("Please enter your message"));
    }
    else {
        localStorage.setItem("full-name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("message", message);
        window.open("formValidation.html", "_blank");
    }
}
