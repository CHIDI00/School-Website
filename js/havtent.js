const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const image_Slide = document.querySelector('.imageSlide');

// Nav-bar toggle
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

// Image slider and button functionality
const images = ['image9', 'image2', 'image4']
let currentImg = 0;
// let image = images[currentImg];

// prevBtn.addEventListener('click', () =>{
//     currentImg--;
//     updateImg()
// })

// nextBtn.addEventListener('click', () =>{
//     currentImg++;
//     updateImg()
// });

function updateImg() {
    const image = images[currentImg];
    image_Slide.src = `images/${image}.jpeg`

    if (currentImg == images.length) {
        currentImg = 0
    }
    setTimeout(()=> {
        updateImg()
    }, 500)
    // if (currentImg < 1) {
    //     currentImg = images.length
    // } else if (currentImg > images.length) {
    //     currentImg = 0
    // }
}
