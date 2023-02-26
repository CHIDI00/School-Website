const title = document.getElementById('title');
const name_field = document.getElementById('nameField');

const user_name = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

const sign_in = document.getElementById('signIn');
const sign_up = document.getElementById('signUp');

const container = document.querySelector('.body-container');
const form_Container = document.querySelector('.container');

const error_Message = document.getElementById('errorMessage');

const email_container = document.getElementById('email')

sign_in.addEventListener('click', () => {
    name_field.style.maxHeight = '0'
    title.innerText = 'HavTont | Sign in';
    sign_in.style.backgroundColor = '#0a6b40';
    sign_in.style.color = '#d1f0bb'
    sign_up.style.backgroundColor = '#d1f0bb'
    sign_up.style.color = '#0a6b40'
    console.log('clicked');

})

sign_up.addEventListener('click', ()=> {
    name_field.style.maxHeight = '65px'
    title.innerText = 'HavTont | Sign up'
    sign_up.style.backgroundColor = '#0a6b40'
    sign_up.style.color = '#d1f0bb'
    sign_in.style.backgroundColor = '#d1f0bb'
    sign_in.style.color = '#0a6b40'

})


function validate_signIn() {
  
    try {
        if (user_name.value == '') {
            console.log('Please enter a username')
            throw new Error('Fill the form')
        } else if (email.value == '' || !email.value.includes('@gmail.com')) {
            //email_container.style.border = '1px solid red';
            console.log('Enter a valid email address')
            error_Message.innerText = 'Enter a valid email address'
            error_Message.style.color = 'red'
        } else if (password.value == '' || password.value.length <= 7) {
           console.log('Password must be at least 8 characters long')
            error_Message.innerText = 'Password must be at least 8 characters long';
            error_Message.style.color = 'red'
        } else {
            // console.log(`${user_name.value} your acc has been created`)
            error_Message.innerText = `${user_name.value} your account has been created`;
            error_Message.style.color = 'green'

            form_Container.style.display = 'none'
            container.style.display = 'flex'
            error_Message.style.display = 'none'

            let profile = document.createElement("div");
            profile.classList.add("body-container")
            profile.innerHTML = `
            <div class="profile-container">
                <div class="container">
                    <h1>HavTont</h1>
                    <div class="course-list">
                        <a href="">Python</a>
                        <a href="">Data Analyst</a>
                        <a href="">Networking</a>
                        <a href="">Cloud Computing</a>
                        <a href="">AWS</a>
                        <a href="">Python</a>
                        <a href="">Java</a>
                        <a href="">JavaScript</a>
                        <a href="">Ruby</a>
                    </div>
    
                    <!-- <div class="logOut"> -->
                        <button>Log out<i class="fa-solid fa-right-from-bracket"></i></button>
                    <!-- </div> -->
                </div>
            </div>
    
            <div class="article">
                <div class="article-container">
    
                    <div class="user-dashboard">
    
                        <div class="profile">
                            <img src="images/profilepic.jpg" alt="">
                            <div class="profile-name">
                                <h3>${user_name.value}</h3>
                                <p>Computer Science</p>
                            </div>
                        </div>
    
                        <div class="profile-board">
                            <div class="profie-board-2">
                                <div class="dash-board">
                                    <i class="fa-solid fa-clipboard"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Profile</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-book"></i>
                                    <p>Courses</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                <div class="dash-board">
                                    <i class="fa-solid fa-user"></i>
                                    <p>Dash Board</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
                    <div class="right-board">
                        <div class="right-board-container">
    
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
            `
            container.appendChild(profile)
        
        }
    } catch (e) {
        console.log('Oops! Something went wrong', e.message)
        // error_Message.innerText = 'Oops! Something went wrong', e.message
        // error_Message.style.color = 'red'
    }
}

sign_up.addEventListener('click', ()=> {
    validate_signIn()
})

