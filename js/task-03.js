const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const gallery = document.querySelector('.gallery');
// console.dir(gallery);
// const markup = images.map(img => {
//   `<li>
//   <img src=${url} alt=${alt}>
//   </li>`;
//   gallery.insertAdjacentHTML('beforeend', markup);
// });
// // console.log(gallery);

const makeGalleryCard = ({ url, alt }) =>
  `<li class="gallery-item"><a href="#"><img src="${url}" alt="${alt}" width = "300px"</a></li>`;

const markup = images.map(el => makeGalleryCard(el));
console.log(markup);

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', markup.join(''));
