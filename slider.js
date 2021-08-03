let btnNext = document.querySelector('.profile-picture--icon-next');
btnNext.addEventListener('click', function(){
    let profileImage = document.querySelector('.profile-picture__first');
    profileImage.src = 'images/image-john.jpg';
    let description = document.querySelector('.selected');
    description.classList.remove('personal-description--next');
    let firstDescription = document.querySelector('.personal-description');
    firstDescription.classList.add('personal-description--next');
})

// btn previous
const btnPrevious = document.querySelector('.profile-picture--icon-prev');
btnPrevious.addEventListener('click', function(){
    let profileImage = document.querySelector('.profile-picture__first');
    profileImage.src = 'images/image-tanya.jpg';
    let firstDescription = document.querySelector('.personal-description');
    firstDescription.classList.remove('personal-description--next');
    let description = document.querySelector('.selected');
    description.classList.add('personal-description--next');
})