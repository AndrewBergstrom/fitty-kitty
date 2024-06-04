document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery-container');
  const imageUrls = [
      'https://source.unsplash.com/200x200/?cat,fitness',
      'https://source.unsplash.com/200x201/?cat,exercise',
      'https://source.unsplash.com/200x202/?cat,yoga',
      'https://source.unsplash.com/200x203/?cat,workout',
      'https://source.unsplash.com/200x204/?cat,training',
      'https://source.unsplash.com/200x205/?cat,gym',
      'https://source.unsplash.com/200x206/?cat,run'
  ];

  imageUrls.forEach(url => {
      const img = document.createElement('img');
      img.src = url;
      galleryContainer.appendChild(img);
  });
});
