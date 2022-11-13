import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ref = {
  imgRef: document.querySelector("ul.gallery"),
};

const creatImgList = galleryItems
  .map(
    (item) =>
      `<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-source="${item.original}" />
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

