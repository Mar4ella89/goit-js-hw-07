import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ref = {
  imgRef: document.querySelector("ul.gallery"),
};

const creatImgList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
  .join("");

const imgAdd = () => {
  ref.imgRef.insertAdjacentHTML("beforeend", creatImgList);
};

imgAdd();

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  disableScroll: false,
  scrollZoom: false,
});
