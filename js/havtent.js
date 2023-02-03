const menuIcon = document.getElementById('menu-icon');
const navBar = document.querySelector('.nav-bar');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const slider = document.querySelector('#image');
const imageContainer = document.querySelector('.image-container');

// Nav-bar toggle
menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
})

// Image slider 
const images = ['image9', 'image4', 'image2']
let currentImg = 0;
let timeOut;

prevBtn.addEventListener('click', () =>{
    if (currentImg < 1) {
        currentImg = images.length
    } 
    updateImg()
})

nextBtn.addEventListener('click', () =>{
    if (currentImg > images.length) {
        currentImg = 0
    }
    updateImg()
});

function updateImg() {
    const image = images[currentImg]
    slider.src = `images/${image}.jpeg`;
    currentImg++
    
    if (currentImg == images.length) {
        currentImg = 0
    } 
    // imageContainer.style.transform = `translateX(-${(currentImg - 1) * 0}px)`;
    setTimeout(()=> {
        updateImg()
    }, 3000)
}
updateImg()

// nextBtn.addEventListener("click", ()=>{
//     currentImg++
//     clearTimeout(timeOut)
//     updateImg()
// })

// prevBtn.addEventListener("click", ()=>{
//     currentImg--
//     clearTimeout(timeOut)
//     updateImg()
// })

// function updateImg() {
//     const image = images[currentImg]
//     slider.src = `images/${image}.jpeg`
//     currentImg++

//     if (currentImg > images.length) {
//         currentImg = 1;
//     }else if(currentImg < 1) {
//         currentImg = images.length
//     }
//     // imageContainer.style.transform = `translateX(-${(currentImg - 1) * 1535}px)`;
//     timeOut = setTimeout(()=>{
//         currentImg++
//         updateImg()
//     }, 3000)
// }

// updateImg()