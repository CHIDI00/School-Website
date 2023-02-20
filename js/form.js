const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const nameField = document.getElementById('nameField');
const title = document.getElementById('title');

const username = document.querySelector('.username').value;
const email = document.querySelector('.email').value;
const password = document.querySelector('.password').value;


signinBtn.onclick = () => {
    nameField.style.maxHeight = '0'
    title.innerText = 'Sign in';
    signinBtn.style.backgroundColor = '#0a6b40'
    signinBtn.style.color = '#FFF'
    signupBtn.style.backgroundColor = '#cbf0bb'
    signupBtn.style.color = '#0a6b40'
    console.log('clicked');
}

signupBtn.onclick = () => {
    nameField.style.maxHeight = '65px'
    title.innerText = 'Sign up'
    signupBtn.style.backgroundColor = '#0a6b40'
    signupBtn.style.color = '#FFF'
    signinBtn.style.backgroundColor = '#cbf0bb'
    signinBtn.style.color = '#0a6b40'
    console.log('clicked');
}


// signupBtn.onclick = () => {
//     if (username.value == "") {
//         alert("Please enter a username")
//     } else if (email.value == '') {
//         alert("Please enter an email address")
//     } else if (password.value == '' && password.value < 4) {
//         alert("Please enter a valid password")
//     }
// }