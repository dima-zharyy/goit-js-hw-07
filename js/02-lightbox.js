import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ----------------------- Render gallery items -----------------------

const galleryList = document.querySelector(".gallery");

function createGalleryMarkup(data) {
  return data
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
    <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
    `;
    })
    .join("");
}

function renderGalleryElements(data) {
  const galleryMarkup = createGalleryMarkup(data);
  galleryList.innerHTML = galleryMarkup;
}

renderGalleryElements(galleryItems);

// ----------------------- SimpleLightbox initialization -----------------------

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captionsData: "alt",
  captionDelay: 250,
});
