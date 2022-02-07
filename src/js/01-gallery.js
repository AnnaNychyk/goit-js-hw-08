import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItemsRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

galleryItemsRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryItemsRef.addEventListener('click', onGalleryImageClick);

function createGalleryItemsMarkup (items) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    }).join('');
}

function onGalleryImageClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(`<img src="${evt.target.src}">`);
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
});