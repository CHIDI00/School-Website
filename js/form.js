const signupBtn = document.getElementById('signupBtn');
const signinBtn = document.getElementById('signinBtn');
const nameField = document.getElementById('nameField');
const title = document.getElementById('title');

const username = document.querySelector('.username').value;
const email = document.querySelector('.email').value;
const password = document.querySelector('.password').value;

const container = document.querySelector('.body-container')
const form_Container = document.querySelector('.container')


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
    // console.log('clicked');

    form_Container.style.display = 'none'
    container.style.display = 'flex'
    if (username.value == "") {
        alert("Please enter a username")
    } else if (email.value == "") {
        alert("Please enter an email")
    } else if (password.value == "") {
        alert("Please enter a password")
    } else {
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
                            <h3>${username.value}</h3>
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