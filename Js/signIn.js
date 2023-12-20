function validation(){
    
    if(document.formSignIn.uname.value !== "Admin123"){
        document.getElementById("result").innerHTML="Username Invalid!*";
        return false;
    }
    else if(document.formSignIn.psw.value !== "Password123"){
        document.getElementById("result").innerHTML="Wrong Password!*";
        return false;
    }
    redirectToDashboard();
}

function redirectToDashboard() {
    try {
        console.log('Redirecting...'); // Check if this log is reached
        window.location.href = '../html/dashboard.html';
    } catch (error) {
        console.error('Error:', error);
    }
}

// Add the event listener separately outside of the validation function
document.getElementById("submit_btn").addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    validation();
});