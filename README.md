# MyPortfolio

*This is a website that includes information about me and some of my projects.* 

## Usage

HTML
30.4%
 
CSS
26.3%
 
JavaScript
21.8%
 
TypeScript
21.5%

## Demo

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

## Errors and bugs

If something is not behaving intuitively, it is a bug and should be reported.
Report it here by creating an issue: https://github.com/298Ron?tab=repositories/issues

Help us fix the problem as quickly as possible by following [whatsapp for reporting bugs.](https://api.whatsapp.com/send?phone=972533396906)

## Patches and pull requests

Your patches are welcome. Here's our suggested workflow:
 
* Fork the project.
* Make your feature addition or bug fix.
* Send us a pull request with a description of your work. Bonus points for topic branches!

## Copyright and attribution

Copyright (c) 2023 DataMade. Released under the [MIT License](https://github.com/298Ron?tab=repositories/blob/master/LICENSE).
