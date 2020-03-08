 const dbQuery = require('../database.js');
 module.exports = function (results, res) {
     var sql = ' select * from applications join users_applications on applications.appID=users_applications.appID where users_applications.userID =? ';
     const param =results.userID;
     dbQuery(sql, param,function (err, result2, fields) {
         if (err) throw err;
         
             res.send(studentRendering(result2, results));
         });
 }

 function studentRendering(result2, results) {
     
     return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="../css/student.css">
</head>

<body>

    <div id="container">
        <header class="header1">
            <div class="activation_button" onclick="slide_SideBar()">
                <span></span>
                <span></span>
                <span></span>
               
            </div>
            <!-- <input type="search"> -->
            <div id="search">
                <form action="">
                    <input type="text" placeholder="Search..">
                    <button type="submit"><img id="searchImg" src="../img/search.png"></img></button>
                </form>
            </div>
            <div>
                <img class="img1" src="img/${results.imgLink}" alt="">
                <button onclick="slide_SideBar1()" id="header1_button"> <img id="arrowdown" src="../img/arrowdown.png"
                        alt=""></button>

            </div>

            <div id="dropDown">
                <ul>

                    <li id="top"><a href="#Manage Accounts" onclick="navigation('profile')"> Manage Accounts</a></li>
                    <li><a href="#Change Password" onclick="navigation('profile')">Change Password </a> </li>
                    <li><a href="/logout">Sign Out</a> </li>
                </ul>
            </div>
        </header>
        <aside id="sideBar">


            <div id="imagecon"> <img class="img1" src="img/${results.imgLink}" alt=""></div>
            <div>
                <ul>
                    <li>
                        <h2>my account</h2>

                        <ul>
                            <li> <a href="#profile" onclick="navigation('profile')">profile</a></li>
                            <li> <a href="#account dashboard" onclick="navigation('dashboard')"> account dashboard</a>
                            </li>
                            <li> <a href="#my application" onclick="navigation('application')">my application</a> </li>
                        </uL>
                    </li>
                </ul>

                <ul>
                    <li>
                        <h2>apply now</h2>
                        <ul>
                            <li><a href="/apply"> apply for student visa</a></li>

                    </li>
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
                    <img class="img1" id="img2" src="img/${results.imgLink}" onmouseover="changeImg(this)" onmouseout="normalImg(this)"
                        onclick="change('uplodeImg')" alt="">
                        </div>

                        <div id="inputInfo">
                   
                                <form action="/edit2/${results.userID}" method="post">
                                <div class="form">
        
                                <label for="Name">Name:</label>
                                <input id="name" class="input00" type="text" placeholder="Name" name="name"
                                     value=${results.firstName}>
                                <div class="editImage">
        
                                    <img src="../img/edit.png" alt="" onclick="editingTextArea('name',false)">
        
                                </div>
                                </div>
                                <div class="form">

                                <label for="email">Email Address:</label>
                                <input id="email" class="input00" type="email" placeholder="Email" name="email"
                                     value=${results.emailAddress}>
                                <div class="editImage">
        
                                    <img src="../img/edit.png" alt="" onclick="editingTextArea('email',false)">
        
                                </div>
                                </div>
                                <div class="form">

                                <label for="Phone">Phone Number:</label>
                            <input id="phone" class="input00" type="text" placeholder="Phone Number"
                                name ='phone' value=${results.phoneNumber}>
                            <div class="editImage">
        
                                <img src="../img/edit.png" alt="" onclick="editingTextArea('phone',false)">
        
                            </div>
                            </div>
                            
                             
                            <button type="submit" value="OK">save
                            </button>
                        </form>
                    </div>
                

                   
                
            </div>

            <div id="dashboard">
                <div class="heading">
                    <h2>my dashboard </h2>
                </div>

                <div id="msg">
                    <p id="hello">
                        <h2>
                            Hello ${results.firstName}
                        </h2> 
                    </p>
                    <p>From your My Account Dashboard you have the ability to view a snapshot of your recent
                        activity <br>and update your account information. Select a link below to view or
                        edit information.</p>

                    <p id="emad"></p>

                </div>

                <div id="tableContent">
                    <div id="tableHead">
                        <p>recent application</p>
                    </div>
                    <table class="table">
                    ${createtable(3,result2)}
                  
                    </table>
                </div>
                <div id="statics">
                    <div id="totalapplication"> total application
                        <span class="numbers" id="totalnumber">
                        ${result2.length}
                        </span>

                    </div>
                    <div> accepted
                        <span id="accepted-style" class="numbers">
                        ${caluclateTotal('Completed', result2)}
                        </span>
                    </div>
                    <div>panding
                        <span id="pending-style" class="numbers">
                        ${caluclateTotal('Pending', result2)}
                        </span>
                    </div>
                    <div> rejected
                        <span id="rejected-style" class="numbers">
                        ${caluclateTotal('Rejected', result2)}
                        </span>
                    </div>
                </div>
            </div>
            <div id="application">
                <div class="heading">
                    <h2>my application</h2>
                </div>
                <div id="showEntries">
                    show
                    <select name="" id="select">
                    ${createEntries(result2)}
                    </select>
                    entries
                </div>
                <div id="tableContentApplication">
                <table class="table">
                ${createtable(result2.length,result2)};
                </table>

                </div>

            </div>
        </main>
        <footer id="footer1"></footer>
    </div>
</div>
    </div>
</body>
<script src="../js/studentData.js"></script>
<script src="../js/studentView.js"></script>
</html>
`
 }

 function createtable(size, result2) {
     let title = [
         'application ID', ' date', 'total', 'status', 'view'
     ]
     var html = `<tr>`;
     for (var column = 0; column < 5; column++) {
         html += `<td class=thead>  ${title[column]}  </td>`;
     }
     html += '</tr>';
     for (var row = 0; row < size; row++) {
         if (result2[row]) {
             html += `
        <tr class='trow' id='row${row+1}'>
       <td>${result2[row].appID}</td>
       <td>${result2[row].dateApplied}</td>
      <td>${result2[row].totalAmount} RM</td>
       <td>${result2[row].status}</td>
       <td><a href="view2/${result2[row].appID}"><img src="../img/edit.png" class='view'  alt=""></a>
       <a href="delete/${result2[row].appID}"><img src="../img/delete3.png" class='view'</a>
       </td>`
         }
     }
     html += "</tr>";

     return html;
 };

 function createEntries(result2) {
     let html = "";
     total = result2.length;
     result2.forEach(Element => {
         html += `<option>${total--}</option>`
     });
     return html;
 }

 function caluclateTotal(type, result2) {
     let total = 0;
     result2.forEach(element => {
         if (element.status == type) {
             total++;
         }

     });
     return total;
 }