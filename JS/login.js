// add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    //step 2: get the email address inside the email input field
    //always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-id');
    const email = emailField.value;
    // step3: get password
    //3.a:set id on the html element
    //3.b:get the element
    //3.c:get the value from the element
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    //DANGER:DO NOT VERIFY email password on the client side 
    //step 4: verify email and password
    if(email === 'mohaiminul@gmail.com' && password === '123456'){
        window.location.href = 'bank.html'
    }
    else{
        alert('মনভুলো পন্ডিত হলে চলবে?')
    }
})