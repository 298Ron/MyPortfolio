// Social Media Icons
let icons: { icn: string; }[] = [
    { icn: `    <a href="https://www.facebook.com/Roman.Ron21" target="_blank" ><i class="fa-brands fa-facebook-f text-light"></i></a>` },
    { icn: `<a href="https://api.whatsapp.com/send?phone=972533396906" target="_blank"><i class="fa-brands fa-whatsapp text-light"></i></a>` },
    { icn: `<a href="https://github.com/298Ron?tab=repositories" target="_blank"><i class="fa-brands fa-github text-light"></i></a>` },
]
function socialMediaBar(): void {
    var socialNav = document.getElementById("socialMedia")
    for (let icon of icons) {
        socialNav!.innerHTML += `<ul class="align-content-center bg-dark ">
        <li class="list-group-item h3 p-1" style="margin-left:-10px;">${icon.icn}</li>
        </ul>`
    }

}
socialMediaBar()
// About me
let personalInfo: { fullName: string; proffesion: string; email: string; phone: string; }[] = [
    {
        fullName: "Ron Shilimov",
        proffesion: "Fullstack Web Developer",
        email: "298Ron@gmail.com",
        phone: "0533396906",
    }
];
function displayAboutLeftColumn(): void {
    var leftColumn = document.getElementById("leftColumn")
    for (let i = 0; i < personalInfo.length; i++) {
        leftColumn!.innerHTML += `<div class="h5 text-light" style="line-height:4rem;text-align:left;">
        <ul>
        <li>Full Name: ${personalInfo[i].fullName}</li>
        <li>Proffesion: ${personalInfo[i].proffesion}</li>
        <li>Email: ${personalInfo[i].email}</li>
        <li>Phone: ${personalInfo[i].phone}</li>
        </ul>
        </div>`

    }
}
displayAboutLeftColumn()
// My skills
let languages: { img: string }[] = [
    { img: `./Images/languages/javascript.png` },
    { img: `./Images/languages/typescript.png` },
    { img: `/Images/languages/html5.png` },
    { img: `./Images/languages/css3.png` },
    { img: `./Images/languages/bootstrap.png` },
    { img: `./Images/languages/sass.png` },
]
function displayLanguagesInRightColumn() {
    var rightColumn = document.getElementById("rightColumn")
    for (let image of languages) {
        rightColumn!.innerHTML += `
        <img src="${image.img}" style="width: 70px;"alt="" class="m-4">

        `
    }
}
displayLanguagesInRightColumn()

let projects: { id: number; title: string; img: string; description: string; stack: string; DevelopmentField: string; link: string }[] = [
    {
        id: 1,
        title: "ManageU",
        img: "./Images/ManageU.jpg.png",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript",
        DevelopmentField: "FullStack",
        link: 'https://manageu-ron.netlify.app/',
    },
    {
        id: 2,
        title: "MyAccount",
        img: "./Images/MyAccount.jpg.png",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript",
        DevelopmentField: "FullStack",
        link: 'https://myaccount-ron.netlify.app/',
    },
    {
        id: 3,
        title: "TechIT",
        img: "./Images/TechIT.jpg",
        description: "Some quick example text to build on the card title and make up the bulk",
        stack: "HTML, JavaScript",
        DevelopmentField: "FullStack",
        link: 'https://techit-ron.netlify.app/'
    },
]
function displayGallery(): void {
    var gallery = document.getElementById("gallery");
    for (let i = 0; i < projects.length; i++) {
        gallery!.innerHTML += `<div class=" col-md-4  mt-3">
        <div class="card" style="width: 100%;">
                    <a href="${projects[i].link}" target="_blank"><img src="${projects[i].img}" class="card-img-top" alt="..." style="object-fit: cover;"></a>
                    <div class="card-body">
                        <h5 class="card-title mt-3" style="font-weight:bold">${projects[i].title}</h5>
                        <p class="card-text">${projects[i].description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${projects[i].stack}</li>
                        <li class="list-group-item">${projects[i].DevelopmentField}</li>
                    </ul>

                </div>
        </div>
        `
    }
};
displayGallery()

/* Contact Page validation */
function checkFormValidation(): void {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let email = (document.getElementById("email") as HTMLInputElement).value;
    let message = (document.getElementById("message") as HTMLInputElement).value;
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (name == "") {
        alert("Please enter your name.")
    } else if (emailRegex.test(email) == false) {
        alert("Please enter a valid email")
    } else if (message == "") {
        (alert("Please enter your message"))
    } else {
        localStorage.setItem("full-name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("message", message)

        window.open("formValidation.html", "_blank")
    }
}

