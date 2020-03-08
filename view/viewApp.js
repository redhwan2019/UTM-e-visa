const dbQuery = require('../database');

module.exports = function (app, res) {

    const sql = `select * from applications where appID = ?`;
    dbQuery(sql,app, function (err, result, fields) {
        if (err) throw err;

        res.send(render(result[0]));
    });
}

function render(app) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="/css/viewapp.css">
        <title>viewAPP</title>
    </head>
    
    <body>
        <div id="contanier" class="container-style">
            <div id="header">
                <img class="logo" src="/img/e-visa.png" alt="evisa image">
                <img class="logo" src="/img/tiger.png" alt="logo image">
            </div>
            <hr>
            <div id="back-arrow">          
           <a href="/Staff"> <p>Back to Records list</p></a>
            </div>
            <div id="applicant-info">
                <p class="applicationid-style">
                    Application ID:<span id="application-id">${app.appID}</spans>
        
                </p>
                <p class="applicationid-style">
                    Applicant Name: <span id="applicant-name">${app.fullName}</span>
                </p>
                <p class="applicationid-style" > 
                    Application Status: <span id="application-status"> ${app.status} </spans>
                </p>
                <p class="applicationid-style" > 
                   Application Fees: <span id="application-status"> 
                   <form action="/fee/${app.appID}" method="post" ">
                   <input type="text" name="fees" > 
                   <input type="submit" value="Submit" >
                   </form>
                    </spans>
                </p>
            </div>
            <br>
    
            <div id="user-files">
                <div>
                    <p>
                        Applicant's photo 4*4
                    </p>
    
                    <p>
                    <a href="/uploads/${app.profLink}"><img src="/uploads/${app.profLink}" alt=""></a>
                    </p>
                    
                </div>
                <div>
                    <p>
                        Applicant's passport copy (.pdf)
                    </p>
    
                    <p>
                    <a href="/uploads/${app.passLink}"><img src="/uploads/${app.passLink}" alt=""></a>
                    </p>
                   
    
    
                </div>
                <div>
                    <p>
                        Verifcation of attendence
                    </p>
                    <p>
                    <a href="/uploads/${app.attendLink}"><img src="/uploads/${app.attendLink}" alt=""></a>
                    </p>
                  
    
    
                </div>
                <div>
                    <p>
                        Last semester's score
                    </p>
    
                    <p>
                    <a href="/uploads/${app.scoreLink}"><img src="/uploads/${app.scoreLink}" alt=""></a>
                    </p>

                </div>
                <div>
                    <p>
                        Fees payment slip
                    </p>
                    <p>
                    <a href="/uploads/${app.payLink}"><img src="/uploads/${app.payLink}" alt=""></a>
                    </p>
                   
    
                </div>
            </div>
        </div>
       
    </body>
    
    </html>
`
}

