function changeContent(imgURL, color) {
  const prodImg = document.querySelector(".product-img img");
  prodImg.setAttribute("src", imgURL);
  const prodImgCircle = document.querySelector(".circle");
  prodImgCircle.style.backgroundColor = color;
}
