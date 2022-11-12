import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ref = {
  imgRef: document.querySelector("div.gallery"),
};

console.log(ref.imgRef);

const creatImgList = galleryItems
  .map(
    (item) => `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
  )
  .join("");

const imgAdd = () => {
  ref.imgRef.insertAdjacentHTML("beforeend", creatImgList);
};

ref.imgRef.addEventListener("load", imgAdd);
imgAdd();
