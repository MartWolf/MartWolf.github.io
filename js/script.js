const main = document.getElementById("main");
const portfolio = document.getElementById("portfolio");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

const portfolio_html = `
<div class="box">
<a href="Employee Direct/index.html""><p>A websit that shows of 13 different random employees using a fetch request </p><img src="img/employe.png" alt="picture of project" class="logo"></a>
<a href="Game Show App/index.html"><p>A Sentence guessing game using javascript</p><img src="img/gameshow.png" alt="picture of project" class="logo"></a>
<a href="An Interactive Photo Gallery/Index.html"><p>A photogallery where you can search for the image using tags</p><img src="img/photogallery.jpg" alt="picture of project" class="logo"></a>
<a href="Web App Dashboard/index.html"><p>A website that shows off different graphs made using chart.js</p><img src="img/diagram.png" alt="picture of project" class="logo"></a>
</div>
`;

const about_html = `
<h2>Hi my name is Martin Wolf.<br> I am a programmer in Html, CSS and Javascript.</h2>
`;

const contact_html = `        
<div class="box">
<a href="https://www.linkedin.com/"><img class="logo" src="img/LI-In-Bug.png" alt="Linkedin logo"></a>
<a href="https://outlook.live.com/"><img class="logo" src="img/Microsoft_Outlook-Logo.wine.png" alt=" Outlook logo"></a>
<a href="https://twitter.com/"><img class="logo" src="img/twu.png" alt="Twitter Logo"></a>
</div>
`;

function ChangeDisplay (display) {
    main.innerHTML = display;  
}

portfolio.addEventListener("click", function() { 
    ChangeDisplay(portfolio_html);
});

about.addEventListener("click", function() { 
    ChangeDisplay(about_html);
});

contact.addEventListener("click", function() { 
    ChangeDisplay(contact_html);
});