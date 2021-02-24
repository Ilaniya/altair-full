class Carousel {
  constructor(images) {
    this.images = images;
    this.currIndex = 0;
    this.showCurrentImage();
    document
      .querySelector(".prev")
      .addEventListener("click", () => this.prevImage());
    document
      .querySelector(".next")
      .addEventListener("click", () => this.nextImage());
    setInterval(() => this.nextImage(), 3000);
  }
  showCurrentImage() {
    document.querySelector(".currentImg").src = this.images[this.currIndex];
  }
  nextImage() {
    if (++this.currIndex >= this.images.length) this.currIndex = 0;
    this.showCurrentImage();
  }
  prevImage() {
    if (--this.currIndex < 0) this.currIndex = this.images.length - 1;
    this.showCurrentImage();
  }
}

new Carousel([
  "img/galery-1.jpg",
  "img/galery-2.jpg",
  "img/galery-3.jpg",
  "img/galery-4.jpg",
  "img/galery-5.jpg",
]);
