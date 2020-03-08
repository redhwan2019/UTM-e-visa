const dbQuery = require('../database');

module.exports = function (userInfo,res) {
    
    
    const sql = 'select * from applications';
    dbQuery(sql, function (err, result, fields) {
        if (err) throw err;
        
        res.send(render(result, userInfo));
    });
}

function render(apps, info) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Staff-Dash</title>
    <link rel="stylesheet" href="css/staff.css">
    <script src="js/staffModel.js"></script>
</head>

<body>
    <div id="container">
        <header class="header1">
            <div class="activation_button" onclick="slide_SideBar()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="search">
                <form action="">
                    <input type="text" placeholder="Search..">
                    <button type="submit"><img id="searchImg" src="../img/search.png"></img></button>
                </form>
            </div>
            <div>
                <img class="img1" src="img/${info.userID}.jpg" alt="">
                <button id="header1_button" onclick="showDropDown('dropDown')"> <img id="arrowdown"
                        src="img/arrowdown.png" alt="">
                </button>
            </div>

            <div id="dropDown">
                <ul>
                    <li id="top"><a href="#Manage Accounts"> Manage Accounts</a></li>
                    <li><a href="#Change Password">Change Password</a> </li>
                    <li><a href="/logout">Sign Out</a> </li>
                </ul>
            </div>
        </header>


        <aside id="sideBar">
            <div id="infoField">
                <img class="img1" src="img/${info.userID}.jpg" alt="">
                <div>
                    <h2 id="sideBarName">${info.firstName + "  " + info.lastName}</h2>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <h2>my account</h2>
                    </li>
                    <ul>
                        <li> <a href="#" onclick="navigation('profile')">profile</a></li>
                        <li> <a href="#" onclick="navigation('dashboard')">account dashboard</a></li>
                        <li> <a href="#" onclick="navigation('pending')">Pending Applications</a></li>
                        <li> <a href="#" onclick="navigation('approve')">Approved Applications</a></li>
                        <li> <a href="#" onclick="navigation('reject')">Rejected Applications</a></li>
                    </uL>
                </ul>
            </div>
        </aside>
        <main id="main">
            <div id="profile">
                <div class="heading">
                    <h2> my profile
                    </h2>
                </div>

                <div id="imgAInfo">
                    <input id="uplodeImg" type="file" name="" id="">
                    <img class="img1" id="img2" src="/img/${info.userID}.jpg" alt="">
                    <div id="inputInfo">
                        <form action="">
                            <div class="form">
                                <label for="Name">Name:</label>
                                <input id="name" class="input00" type="text" placeholder="Name" disabled="true" value=${info.firstName}>
                                <div class="editImage">
                                    <!-- <img src="img/edit.png" alt="" onclick="editingTextArea('name',false)"> -->
                                </div>
                            </div>
                        </form>
                        <form action="">
                            <div class="form"><label for="email">Email Address:</label>
                                <input id="email" class="input00" type="email" placeholder="Email" disabled="true" value=${info.emailAddress}>
                                <div class="editImage">
                                </div>
                            </div>
                        </form>
                        <form action="">
                            <div class="form">
                                <label for="Phone">Phone Number:</label>
                                <input id="phone" class="input00" type="text" placeholder="Phone Number" value=${info.phoneNumer}
                                    disabled="true">
                                <div class="editImage">
                                    <!-- <img src="img/edit.png" alt="" onclick="editingTextArea('phone',false)"> -->
                                </div>
                            </div>
                        </form>
                    </div>

                    <div id="button1">
                        <button>Back</button>
                    </div>
                    <div id="button2">
                        <button onclick="saveButton()">save</button>
                    </div>
                </div>
            </div>

            <div id="dashboard">
                <div class="heading">
                    <h2>my dashboard </h2>
                </div>

                <div id="msg">
                    <p id="hello">
                       Hello ${info.firstName}
                    </p>
                </div>

                <div id="upperbox">

                    <div>
                        <h3>All applications</h3>
                        <span id="total-app">
                            ${apps.length}
                        </span>
                    </div>
                    <div>
                        <h3>Accepted applications</h3>
                        <span id="accepted-app">
                        ${ getLengths('completed',apps) }
                        </span>
                    </div>
                    <div>
                        <h3>Rejected applications</h3>
                        <span id="rejected-app">
                        ${ getLengths('rejected',apps) }
                        </span>
                    </div>
                </div>

                <div id="lowerbox">
                    <table id="app-table" class="table-style">
                    
                    <tr>
                    <td class=thead>application ID</td>
                    <td class=thead>applicant</td>
                    <td class=thead>Country</td>
                    <td class=thead>Visa Status</td>
                    <td class=thead>Date</td>
                    <td class=thead>Edit / view</td>
                    </tr>
                    ${ renderApplicationList(apps)}
                    </table>
                    </div>
                    </div>
                    <div id="pending">
                    <div class="heading">
                    <h2>pending application</h2>
                    </div>
                    <div id="pending-page">
                    <table id="pending-table" class="table-style">
                    <tr>
                    <td class=thead>application ID</td>
                    <td class=thead>applicant</td>
                    <td class=thead>Country</td>
                    <td class=thead>Visa Status</td>
                    <td class=thead>Date</td>
                    <td class=thead>Edit / view</td>
                    </tr>
                    ${ renderPart('Pending',apps)}  
                    </table>
                    </div>
                    </div>
                    
                    <div id="approve">
                    <div class="heading">
                    <h2>Approved application</h2>
                    </div>
                    <div id="approve-page">
                    <table id="approved-table" class="table-style">
                    <tr>
                    <td class=thead>application ID</td>
                    <td class=thead>applicant</td>
                    <td class=thead>Country</td>
                    <td class=thead>Visa Status</td>
                    <td class=thead>Date</td>
                    <td class=thead>Edit / view</td>
                    </tr>
                    ${ renderPart('Completed',apps)}
                    
                      
                    
                    </table>
                </div>
            </div>

            <div id="reject">
                <div class="heading">
                    <h2>reject application</h2>
                </div>
                <div id="reject-page">
                    <table id="reject-table" class="table-style">
                    <tr>
                    <td class=thead>application ID</td>
                    <td class=thead>applicant</td>
                    <td class=thead>Country</td>
                    <td class=thead>Visa Status</td>
                    <td class=thead>Date</td>
                    <td class=thead>Edit / view</td>
                    </tr>
                    ${ renderPart('Rejected',apps)}
                    </table>
                </div>
            </div>
        </main>

        <footer id="footer1"></footer>
    </div>
    
</body>


</html>
`
}


function renderApplicationList(apps) {
    
    const html =apps.reduce((append , e ,index) =>
        append +
        `
        <tr class='trow'>
            <td>${e.appID}</td>
            <td>${e.fullName}</td>
            <td>${e.applicantNationality}</td>
            <td>${e.status}</td>
            <td>${e.dateApplied}</td>
            <td class="icona"><a  id="ac${index}" href="${(e.status!='Completed'? `edit/accept/${e.appID}`:'#' )}"><img src="../img/check-solid.svg" class='view' alt=""></a> 
                    <a id="re${index}" href="edit/reject/${e.appID}"><img src="../img/times-solid.svg" class='view' alt=""></a> 
                    <a href="view/${e.appID}"  rel="noopener noreferrer"><img src="../img/eye-solid.svg" class='view' alt=""></a>
            </td>
        </tr> `,''

    );    
    return html;
}


function renderPart(type,apps) {
    apps = apps.filter( e => {return e.status === type});
    const html = apps.reduce((append ,e ,index) =>
        
        append +
        `
        <tr class='trow'>
            <td>${e.appID}</td>
            <td>${e.fullName}</td>
            <td>${e.applicantNationality}</td>
            <td>${e.status}</td>
            <td>${e.dateApplied}</td>
            <td class="icona"><a  id="ac${index}" href="${(e.status!='Completed'? `edit/accept/${e.appID}`:'#' )}"><img src="../img/check-solid.svg" class='view' alt=""></a> 
                    <a id="re${index}" href="edit/reject/${e.appID}"><img src="../img/times-solid.svg" class='view' alt=""></a> 
                    <a href="view/${e.appID}"  rel="noopener noreferrer"><img src="../img/eye-solid.svg" class='view' alt=""></a>
            </td>
        </tr> `
        ,''

    );    
    return html;
}


function getLengths(type,apps) {
   const total = apps.reduce((total,app) =>{return app.status === type ? total+1 : total},0)
    return total;
}


