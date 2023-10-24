const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
const imgAlt = ['睁开的眼睛', '堆叠的演示', '一簇蓝紫色的花', '古老的壁画', '一只美丽的蝴蝶']
/* Looping through images */
for (let i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', imgAlt[i]);

    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (event) => {
    displayedImage.setAttribute('src', event.target.src);
    displayedImage.setAttribute('alt', event.target.alt)
});
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    let btnClass = btn.getAttribute('class');

    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {        
            btn.setAttribute('class', 'dark');
            btn.textContent = 'Darken';
            overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
