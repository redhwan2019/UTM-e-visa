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