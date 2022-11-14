import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ref = {
  imgRef: document.querySelector("div.gallery"),
};

const modalImg = basicLightbox.create(`<img>`);

const creatImgList = galleryItems
  .map(
    ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
  )
  .join("");

const imgAdd = () => {
  ref.imgRef.insertAdjacentHTML("beforeend", creatImgList);
};

imgAdd();

const onClickOpenModal = (event) => {
  event.preventDefault();
  const modalImgSource = event.target.dataset.source;

  modalImg.element().querySelector("img").src = modalImgSource;

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
