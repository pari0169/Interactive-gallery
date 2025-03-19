const images = [
    { src: 'images/image1.png', hd: 'images/image1_hd.jpeg', caption: 'Beautiful Sunset : Uploaded on August 12th, 2019 at 12:10 PM' },
    { src: 'images/image2.png', hd: 'images/image2_hd.jpeg', caption: 'Mountain View : Uploaded on October 5th, 2019 at 9:32 PM' },
    { src: 'images/image3.png', hd: 'images/image3_hd.jpeg', caption: 'City Lights : Uploaded on May 1st, 2020 at 4:54 AM' },
    { src: 'images/image4.png', hd: 'images/image4_hd.jpeg', caption: 'Ocean Waves : Uploaded on March 20th, 2017 at 4:29 AM' },
    { src: 'images/image5.png', hd: 'images/image5_hd.jpeg', caption: 'Forest Trail : Uploaded on October 26th, 2016 at 3:15 PM' },
    { src: 'images/image6.png', hd: 'images/image6_hd.jpeg', caption: 'Snowy Peaks : Uploaded on March 14th, 2025 at 6:38 PM' },
    { src: 'images/image7.png', hd: 'images/image7_hd.jpeg', caption: 'Desert Dunes : Uploaded on March 13th, 2025 at 8:03 PM' },
    { src: 'images/image8.png', hd: 'images/image8_hd.jpeg', caption: 'Waterfall Paradise : Uploaded on March 20th, 2017 at 5:00 AM' },
    { src: 'images/image9.png', hd: 'images/image9_hd.jpeg', caption: 'Cherry Blossoms : Uploaded on September 22nd, 2018 at 6:29 AM' },
    { src: 'images/image10.png', hd: 'images/image10_hd.jpeg', caption: 'Night Sky : Uploaded on June 17th, 2018 at 7:47 PM' },
    { src: 'images/image11.png', hd: 'images/image11_hd.jpeg', caption: 'Golden Field : Uploaded on December 18th, 2024 at 1:07 PM' },
    { src: 'images/image12.png', hd: 'images/image12_hd.jpeg', caption: 'Rocky Shore : Uploaded on March 16th, 2025 at 3:02 AM' }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');
const closeModal = document.querySelector('.close');


images.forEach((imgData) => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.caption;
    img.dataset.hd = imgData.hd; 
    img.dataset.caption = imgData.caption;
    img.classList.add('gallery-img');
    gallery.appendChild(img);
});


gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const hdImageSrc = event.target.dataset.hd;
        const imageCaption = event.target.dataset.caption;
        
        if (hdImageSrc) {
            modalImg.src = hdImageSrc; 
            modalImg.alt = imageCaption;
            modalCaption.textContent = imageCaption;
            modal.style.display = 'flex';
        }
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});



