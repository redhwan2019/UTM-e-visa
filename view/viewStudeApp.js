const dbQuery= require('../database.js');
module.exports = function(appID,res)
{
    console.log("here");
    
   var sql =`  select * from applications where appID =?`;
   dbQuery(sql,appID,function (err, result2, fields){
         if (err)throw err;
      
             res.send(createApplication(result2[0]));
});
}

function createApplication(applications) {
return  `
     <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>View Application</title>
    <link rel="stylesheet" href="../css/student.css">

</head>
<body>
     <div id="left" class="leftAright">
    </div>
<div id="heading1">

<img class="applicationImg" id ="tiger"src="../img/tiger.png" alt="">
<img class="applicationImg" id="e-visa"src=" ../img/e-visa.png" alt="">
</div>

<div id="right"class="leftAright"></div>
<main id="main1">
<div id="e-visaHeaderDiv">
<h2 id="e-visaHeader">
e-visa holder information
</h2></div>
<div id="information">
<div id="appId">
<h1>${applications.appID}</h1>
</div>
<p id="fullname">full name: <span>${applications.fullName}</span></p>
<p id="gender">gender: <span></span>${applications.applicantGender}</p>
<p id="birth">place of birth: <span>${applications.applicantPOB}</span></p>
<p id="nationality">nationality: <span>${applications.applicantNationality}</span></p>
<p id="documentNumber">travel document number: <span>${applications.passportNumber}</span></p>
<p id="institutionName">institution name: <span>${applications.institutionName}</span></p>
<p id="Coursename">Course name <span>${applications.courseName}</span></p>
<p id="yearOfIntak">yearOfIntak: <span></span>${applications.yesrOfStudy}</p>
<p id="dateApply"> date of apply : <span>${applications.dateApplied}</span></p>
</div>
</main>
<div id="payment">
<div id="(excluding GST)">
<p>Total(excluding GST):
<span>
RM ${applications.totalAmount - ((6 / 100) * applications.totalAmount)}
</span>
</p>
</div>
<div id="GST">
<p>
GST (payable @ 6%):
<span>
RM ${((6 / 100) * applications.totalAmount)}
</span>
</p>
</div>
<div id="Convenience">
<p> Convenience Fee:
   <span>RM ${applications.totalAmount- (applications.totalAmount)}.00</span>
</p>
</div>
<div id="totalAmount">
<p>
Total Amount Payable:
<span>RM ${applications.totalAmount}</span>
</p>
</div>
<div id ="buttonView">
<a href="/Student"><button>Back</button></a>
</div>
</div> 
</body>
`
}
