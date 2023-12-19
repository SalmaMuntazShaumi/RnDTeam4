function validation(){
    let hasDigit = /[0-9]/.test(document.formSignUp.psw.value);
    let hasUpper = /[A-Z]/.test(document.formSignUp.psw.value);
    let hasLower = /[a-z]/.test(document.formSignUp.psw.value);
    if(document.formSignUp.psw.value.length<8 || document.formSignUp.psw.value.length>64){
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
    else if(document.formSignUp.confirmPsw.value !== document.formSignUp.psw.value){
        document.getElementById("result").innerHTML="Confirmation password isn't the same as the Password!*";
        return false;
    }
    redirectToWelcomePage();
}

function redirectToWelcomePage() {
    try {
        console.log('Redirecting...');
        window.location.href = '../html/signInPage.html';
    } catch (error) {
        console.error('Error:', error);
    }
}


document.getElementById("submit_btn").addEventListener('click', (event) => {
    event.preventDefault(); 
    validation();
});