const pagesNavigate = [{
        pageName: 'profile'
    },
    {
        pageName: 'dashboard',
    },
    {
        pageName: 'application',
    }
];

function slide_SideBar1() {
    let side_bar1 = document.getElementById("dropDown");
    validation(side_bar1);
}

function slide_SideBar() {

    let side_bar = document.getElementById("sideBar");
    let main = document.getElementById("main");
    let footer = document.getElementById("footer1");
    validation(side_bar, main, footer);
}

function hide(s, type) {
    display(s, type);

}

function show(s, type) {
    display(s, type);

}

function display(s, type) {
    s.style.display = type;
}

function increse(main, footer) {

    if (main && footer != null) {
        main.classList.add('main-res');
        footer.classList.add('footer-res');
    }
}

function remove(main, footer) {
    if (main && footer != null) {
        main.classList.remove('main-res');
        footer.classList.remove('footer-res');
    }
}

function validation(e, main, footer) {
    if (e.style.display == 'none') {
        show(e, 'block');
        remove(main, footer);
    } else {
        hide(e, 'none');
        increse(main, footer);
    }
}




function navigation(pageId) {
    var displayedID;
    if (displayedID === pageId) {} else {
        displayedID = pageId;
    }
    hideDive(displayedID);
}

function hideDive(displayedID) {
    var id = displayedID;
    var div;
    for (let i = 0; i < pagesNavigate.length; i++) {
        div = document.getElementById(pagesNavigate[i].pageName);
        if (id === pagesNavigate[i].pageName) {
            show(div, "grid");
        } else {
            hide(div, "none");
        }
    }
}

function editingTextArea(inputId, type) {
    let id = document.getElementById(inputId);
    id.classList.add('effect');
}



function changeImg(img) {
    img.src = '../img/edit.png';
}

function normalImg(img) {
    img.src = inputUser.img[0].src;
}

function change(img) {
    let source = document.getElementById(img);
    source.click();

}