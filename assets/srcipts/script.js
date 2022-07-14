const imgs = document.querySelectorAll('.product__card-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('mouseover', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.product__card-showcase img:first-child').clientWidth;

    document.querySelector('.product__card-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

// số lượng

// const quan_minus = document.getElementById('quanlity_minus');
// const quan_num = document.getElementById('quanlity_num');
// const quan_plus = document.getElementById('quanlity_plus');

// const index = 1;

// function Plus() {
//     quan_num = index;
//     index ++;
// }

// quan_plus.addEventListener('click', Plus);