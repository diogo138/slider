let btnNext = document.querySelector('.profile-picture--icon-next');
btnNext.addEventListener('click', function(){
    let profileImage = document.querySelector('.profile-picture__first');
    profileImage.src = 'images/image-john.jpg';
})