function validation(){
    let hasDigit = /[0-9]/.test(document.formSignIn.psw.value);
    let hasUpper = /[A-Z]/.test(document.formSignIn.psw.value);
    let hasLower = /[a-z]/.test(document.formSignIn.psw.value);
    if(document.formSignIn.psw.value.length<8 || document.formSignIn.psw.value.length>64){
        document.getElementById("result").innerHTML="Password has to be between 8 and 64 characters!*";
        return false;
    }
    else if(!hasDigit){
        document.getElementById("result").innerHTML="Needs at least one digit for the Password!*";
        return false;
    }
    else if(!hasUpper){
        document.getElementById("result").innerHTML="Needs at least one uppercase letter for the Password!*";
        return false;
    }
    else if(!hasLower){
        document.getElementById("result").innerHTML="Needs at least one lowercase letter for the Password!*";
        return false;
    }
    redirectToDashboardPage();
}

function redirectToDashboardPage() {
    try {
        console.log('Redirecting...');
        window.location.href = '../html/dashboard.html';
    } catch (error) {
        console.error('Error:', error);
    }
}


document.getElementById("submit_btn").addEventListener('click', (event) => {
    event.preventDefault(); 
    validation();
});