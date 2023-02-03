const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const slider = document.querySelector('#image');
const imageContainer = document.querySelector('.container');

// Nav-bar toggle
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

// Image slider 
const images = ['image9', 'image4', 'image2']
let currentImg = 0;
let timeOut;

function updateImg() {
    const image = images[currentImg]
    slider.src = `images/${image}.jpeg`;
    currentImg++
    
    if (currentImg == images.length) {
        currentImg = 0
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1) * 0}px)`;
    setTimeout(()=> {
        updateImg()
    }, 3000)
}
updateImg()



// prevBtn.addEventListener('click', () =>{
//     currentImg--
//     if (currentImg < images.length) {
//         currentImg = 0
//     }
//     updateImg(currentImg)
// })

// nextBtn.addEventListener('click', () =>{
//     currentImg++;
//     if (currentImg > images.length) {
//         currentImg = 0
//     }
//     updateImg(currentImg)
// })

// function updateImg() {
//     const image = images[currentImg]
//     image_Slide.src = `images/${image}.jpeg`
//     currentImg++

//     if (currentImg == images.length) {
//         imageIndex = 0
//     }
//     setTimeout(()=>{
//         updateImg()
//     }, 3000)
// }