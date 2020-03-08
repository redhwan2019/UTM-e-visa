

const pagesNavigate = [{
        pageName: 'profile'
    },
    {
        pageName: 'dashboard'
    },
    {
        pageName: 'approve',
    },
    {
        pageName: 'reject',
    },
    {
        pageName: 'pending',
    }
];

// to target the user's info elements 
let inputUser = {
    img: document.getElementsByClassName('img1'),
    welcoming: document.getElementById('hello'),
    input: document.getElementById("name"),
    input1: document.getElementById("email"),
    input2: document.getElementById("phone"),
    input3: document.getElementById("sideBarName")
};



function setUserInfo(LoggedIn) {
    
    inputUser.input.value = LoggedIn.firstName;
    inputUser.input1.value = LoggedIn.emailAddress;
    // inputUser.input2.value = LoggedIn.phone;
    document.getElementById("sideBarName").innerHTML = LoggedIn.firstName;
    inputUser.welcoming.innerHTML = 'Hello, ' + LoggedIn.firstName + '<br><br>';
    // for (let i = 0; i < inputUser.img.length; i++) {
    //     inputUser.img[i].src = LoggedIn.picture;
    // }
}

function navigation(pageId) {
    pagesNavigate.forEach(element => {
        var div = document.getElementById(element.pageName);
        if (element.pageName === pageId) {
            display(show, div);
        } else {
            display(hide, div);
        }
    });
}

function hide(s) {
    s.style.display = 'none';
}

function show(s) {
    s.style.display = 'grid';
}

function display(f, type) {
    f(type);
}

function showDropDown(par) {
    var id = document.getElementById(par);
    if (id.style.display === 'none')
        id.style.display = 'block'
    else
        id.style.display = 'none'
}