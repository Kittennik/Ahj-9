export default class Callback {
  init() {
    if (typeof document === 'undefined') return;
    const elCallbackForm = document.querySelector('.callback-form');
    const elCloseCallback = document.querySelector('.callback-close');
    const elCallCallback = document.querySelector('.call-callack');

    elCallCallback.addEventListener('click', () => {
      elCallbackForm.classList.remove('hidden');
      elCallCallback.classList.add('hidden');
    });

    elCloseCallback.addEventListener('click', () => {
      elCallCallback.classList.remove('hidden');
      elCallbackForm.classList.add('hidden');
    });
  }
}
