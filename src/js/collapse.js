export default class Collapse {
  init() {
    if (typeof document === 'undefined') return;
    const btnCollapse = document.querySelector('.button-collapse');
    const elCOllapse = document.querySelector('.collapse');

    btnCollapse.addEventListener('click', () => {
      elCOllapse.classList.toggle('active');
    });
  }
}
