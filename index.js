
const express = require('express');
const bodyParser = require('body-parser');
const dbQuery = require('./database');
const path = require('path');
const multer = require('multer');
const app = express();
app.use(express.static('public'));



const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});







const staff = require('./view/staff.js');
const viewApp = require('./view/viewApp.js');
const loginPage = require('./view/loginPage.js')
const home = require('./view/home.js')
const apply = require('./view/apply.js')
//emad
const student = require('./view/student.js');
const studentViewApp = require('./view/viewStudeApp.js');

const port = 8080;
const sessionName = 'myapp_' + port;


const session = require('express-session');

app.use(
    session({
        name: sessionName,
        resave: false,
        secret: 'hello world',
        saveUninitialized: false,
        cookie: {
            sameSite: true,
            httpOnly: false
        }
    })
);



app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, listenHandler);

app.get('/', (req, res) => res.send(home()));
app.get('/login', (req, res) => res.send(loginPage()));
app.post('/login', loginHandler);
app.get('/Student', isAuthenticated, isStudent, (req, res) => student(req.session.user, res));
app.get('/Staff', isAuthenticated, isStaff, (req, res) => staff(req.session.user, res));
app.get('/apply', isAuthenticated, isStudent, (req, res) => res.send(apply()));


app.get('/view/:app', isAuthenticated, isStaff, viewHandler);
app.get('/edit/accept/:app', isAuthenticated, isStaff, acceptHandler);
app.get('/edit/reject/:app', isAuthenticated, isStaff, rejectHandler);
app.post('/fee/:app', isAuthenticated, isStaff, chargeFees);
//emad
app.get('/view2/:name', isAuthenticated, isStudent, studentViewHandeler);
app.get('/delete/:id', isAuthenticated, isStudent, deleteApplication);
app.post('/edit2/:id', editUserInfo);


const upload = multer({
    storage: storage
}).array('photo', 5);





app.post('/upload', isAuthenticated, isStudent, upload, (req, res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '-' + dd + '-' + yyyy;

    const date = req.body.Birthday_Year + "-" + req.body.Birthday_Month + "-" + req.body.Birthday_day;
    const params = [req.body.institution, req.body.nationality, req.body.Gender, date, req.body.pob, req.body.passortid, req.body.course, req.body.yearofstudy, today, req.body.fullname, req.session.user.userID, req.files[0].originalname, req.files[1].originalname, req.files[2].originalname, req.files[3].originalname, req.files[3].originalname];
    //  console.log(params);
    // console.log(req.files);
    const sql = " insert into applications(institutionName,applicantNationality,applicantGender,applicantDOB,applicantPOB,passportNumber,courseName,yesrOfStudy,dateApplied,fullName,userID,profLink,passLink,attendLink,scoreLink,payLink) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    dbQuery(sql, params, function (err, result, fields) {
        if (err) throw err;
        // console.log("uploaded");

        const param = req.session.user.userID;
        const sql1 = 'select appID from applications where userID=?'

        dbQuery(sql1, param, function (err, result, fields) {
            if (err) throw err;
            // console.log("appID");
            // console.log(result[result.length - 1].appID);

            const param2 = [req.session.user.userID, result[result.length - 1].appID, req.session.user.type];
            const sql2 = 'insert into users_applications values(?,?,?)'
            dbQuery(sql2, param2, function (err, result, fields) {
                if (err) throw err;
                // console.log("users apps");
            });
        });

      
    });
    //here




    upload(req, res, (err) => {

        if (err)
            res.redirect(307, 'invalid');
        else
            res.send('/Student');

    });
});



// function getAppData(req,res,next){
//    const params=[req.body.passortid,req.body.fullname,req.body.nationality,req.body.Birthday_day,req.body.Birthday_Month,req.body.Birthday_Year,req.body.course,req.body.emailid,req.body.Gender,req.body.yearofstudy,req.body.address,req.body.institution,req.body.pob];
//     console.log(params);
//     return next();

// }

// app.get('index.js', rederictHandler); //later on 

// app.get('/private/js/model', myhandler);

// app.get('model.js', myHandler);
// app.get('/private/cs/style.css', myHandler);
// app.get('/private/:myfile', myHandler);

// app.get('/html/staff', staffHandler);

// function myHandler(req ,res) {
//     res.sendFile('./private/model.js');
// }


function viewHandler(req, res) {

    const applicationID = req.params.app;
    viewApp(applicationID, res);
}

function acceptHandler(req, res) {
    if (!req.get('referrer'))
        return res.status(403).send('Unauthorized access');

    const applicationID = req.params.app;
    const sql = " update applications set status = 'Completed' WHERE appId = ?";
    dbQuery(sql, applicationID, function (err, result, fields) {
        if (err) throw err;
        res.send("edited successfuly");
    });
}
function rejectHandler(req, res) {
    if (!req.get('referrer'))
        return res.status(403).send('Unauthorized access');
    const applicationID = req.params.app;
    const sql = " update applications set status = 'Rejected' WHERE appId = ?";
    dbQuery(sql, applicationID, function (err, result, fields) {
        if (err) throw err;

        res.send("edited successfuly");
    });
}
function chargeFees(req, res) {
    if (!req.get('referrer'))
        return res.status(403).send('Unauthorized access');
    const param = [req.body.fees, req.params.app]
    const sql = " update applications set totalAmount = ?  WHERE appId = ?";
    dbQuery(sql, param, function (err, result, fields) {
        if (err) throw err;

        res.send("Charged successfuly");
    });
}


//emad


function studentViewHandeler(req, res) {
    const app = req.params.name;
    studentViewApp(app, res);

}

function editUserInfo(req, res) {
    const userID = req.params.id;
    var sql = `  UPDATE users SET firstName= ?, phoneNumber=?, emailAddress=? WHERE userID = ?`;
    const params = [req.body.name, req.body.phone, req.body.email, userID];
    dbQuery(sql, params, function (err, results, fields) {
        if (err) throw err;
        res.send('<h1> edited </h1>')
    });

}

function deleteApplication(req, res) {
    const app = req.params.id;
    var sql = `delete from users_applications where appID = ? `;
    dbQuery(sql, app, function (err, results, fields) {
        var sql = `delete from applications where appID = ? `;
        dbQuery(sql, app, function (err, results, fields) {
            if (err) throw err;
            res.send('<h1> deleted </h1>')
        });
    });
}




function loginHandler(req, res) {
    const sql = 'Select * from users where userID = (Select userID from userlog where username=? and password=? )  ';
    const params = [req.body.username, req.body.secret];

    dbQuery(sql, params, function (err, results, fields) {

        if (err) throw err;

        if (results.length) {
            const user = results[0];
            delete user.password;

            req.session.user = user;

            return res.redirect(`/${user.type}`);
        }
        res.redirect(307, 'invalid');
    });

}

function isAuthenticated(req, res, next) {
    if (req.session.user) return next();
    res.redirect('/login');
}


function isStaff(req, res, next) {
    if (req.session.user.type === 'Staff') return next();
    res.redirect('/login');
}

function isStudent(req, res, next) {
    if (req.session.user.type === 'Student') return next();
    res.redirect('/login');
}




// logout

app.get('/logout', isAuthenticated, function (req, res) {
    req.session.destroy(err => {
        if (err) return;
         res.redirect('/login');
    });

    res.clearCookie(sessionName);
    res.redirect('/login');
});








function listenHandler() {
    console.log(`Server running on port ${port}`);
}