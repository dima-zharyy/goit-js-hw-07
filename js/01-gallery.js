import { galleryItems } from "./gallery-items.js";
// Change code below this line

// ----------------------- Render gallery items -----------------------

const galleryList = document.querySelector(".gallery");
let instance;

function createGalleryMarkup(data) {
  return data
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join("");
}

function renderGalleryElements(data) {
  const galleryMarkup = createGalleryMarkup(data);
  galleryList.innerHTML = galleryMarkup;
}

renderGalleryElements(galleryItems);

// ----------------------- Get larger image from data -----------------------

galleryList.addEventListener("click", onGetLargerImage);
let largeImgUrl = "";

function onGetLargerImage(event) {
  event.preventDefault();
  largeImgUrl = event.target.dataset.source;
}

// ----------------------- Modal open and close logic (+ Esc close option) -----------------------

galleryList.addEventListener("click", onModalOpen);

function onModalOpen() {
  const imageElementMarkup = `
		<img width="1400px" height="900px" src="${largeImgUrl}">
	`;

  instance = basicLightbox.create(imageElementMarkup, {
    onShow: () => {
      window.addEventListener("keydown", onModalCloseByEscape);
    },
    onClose: () => {
      window.removeEventListener("keydown", onModalCloseByEscape);
    },
  });

  instance.show();
}

function onModalCloseByEscape(event) {
  if (event.code !== "Escape") return;

  instance.close();
}

// ----------------------- Modal open and close logic -----------------------

// function onModalOpen() {
//   const instance = basicLightbox.create(
//     `
// 		<img width="1400px" height="900px" src="${largeImgUrl}">
// 	`
//   );
//   instance.show();
// }
