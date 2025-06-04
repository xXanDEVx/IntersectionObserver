const target = document.querySelector('.visible');
const arrow = document.querySelector('.fa-solid');
const header = document.querySelector('.header');
const options = {
  root: document.querySelector('container'),
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      header.style.display = 'block'
      arrow.style.transform = 'rotate(0.5turn)'
    }
    else {
      header.style.display = 'none'
      arrow.style.transform = 'rotate(1turn)'
    };
  });
}  ,options);

observer.observe(target);