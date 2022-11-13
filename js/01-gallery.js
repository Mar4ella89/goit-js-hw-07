import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "basiclightbox";
// Change code below this line

console.log(galleryItems);

const ref = {
  imgRef: document.querySelector("div.gallery"),
};

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

imgAdd();

let modalImg = "";

const onClickOpenModal = (event) => {
  event.preventDefault();
  const modalImgSource = event.target.dataset.source;

  modalImg = basicLightbox.create(
    `<img src="${modalImgSource}" width="800" height="600">`
  );

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
    modalImg.show();
    window.addEventListener("keydown", onEscKeyPress);
};

const onEscKeyPress = (event) => {
  
  if (event.code === "Escape") {
    
    modalImg.close();
    
  }
  window.removeEventListener("keydown", onEscKeyPress);
};

ref.imgRef.addEventListener("click", onClickOpenModal);


