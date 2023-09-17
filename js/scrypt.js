$(".nav__toogle").click(function (event) {
  $(".nav__toogle, .nav__wrapper, header").toggleClass('active');
  $('body').toggleClass('lock');
});

const chooseBtn = document.querySelectorAll('.choose__btn');
const contentItem = document.querySelectorAll('.content-item');

chooseBtn.forEach(function(element) {
  element.addEventListener('click', swing)
});

function swing(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);
  
  chooseBtn.forEach(function(item) {
    item.classList.remove('choose__btn--active')
  })

  target.classList.add('choose__btn--active')

  contentItem.forEach(function(item) {
    item.classList.remove('content-item--active')
  });

  contentActive.forEach(function(item) {
    item.classList.add('content-item--active')
  })
}