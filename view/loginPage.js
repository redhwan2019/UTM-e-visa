module.exports = function (){

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Login</title>
        <link rel="stylesheet" href="css/loginStyle.css">  
    </head>
    
    <body>
        <div id="login-box">
            <h3>Login</h3>
            <form action="/login" method="POST">
                <input type="text" name="username" id="uname" placeholder="username...">
                <input type="password" name="secret" id="pass" placeholder="password...">
                <input type="submit" value="Login">
            </form>
            <a href="#">Forget password ?</a>
        </div>
    </body>
    
    </html>`
}