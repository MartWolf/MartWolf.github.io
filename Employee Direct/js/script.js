const gridcontainer = document.querySelector(".grid-container");
const modalclose = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
const modalcontainer = document.querySelector(".modal-content");

let employees = [];

fetch(`https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`)
    .then(res => res.json())
    .then(res => res.results)
    .then(displayemployees)
    .catch(err => console.log(err));

function displayemployees(employeedata){
    employees = employeedata;
    let employee_html = "";
    employees.forEach((employee, index) => {
        let picture = employee.picture;
        let name = employee.name;
        let city = employee.location.city;
        let email = employee.email;
  
    employee_html += `
        <div class="box" data-index="${index}">
            <img class="profile" src="${picture.large}">
            <div class="text-container">
                <h2 class="name">${name.first} ${name.last}</h2>
                <p class="email">${email}</p>
                <p class="address">${city}</p>
            </div>
        </div>
        `
});
    gridcontainer.innerHTML = employee_html;
}

function modal(index) {
    let { name, dob, phone, email, location: { city, street, state, postcode
    }, picture } = employees[index];

    let date = new Date(dob.date);
    const modalhtml = `
    <img class="avatar" src="${picture.large}" />
    <div class="text-container">
        <h2 class="name">${name.first} ${name.last}</h2>
        <p class="email">${email}</p>
        <p class="address">${city}</p>
        <hr/>
        <p>${phone}</p>
        <p class="address">${Object.values(street)}, ${state} ${postcode}</p>
        <p>Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
    `;
    overlay.classList.remove("hidden");
    modalcontainer.innerHTML = modalhtml;
}

gridcontainer.addEventListener("click", e => {
    const box = e.target.closest(".box");
    const index = box.getAttribute("data-index");
    modal(index);
});

modalclose.addEventListener("click", () => {
overlay.classList.add("hidden");
});


    
            