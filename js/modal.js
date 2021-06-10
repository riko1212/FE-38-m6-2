;(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  }

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener('click', toggleModal)
  })
  refs.closeModalBtn.addEventListener('click', toggleModal)
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
      toggleModal()
    }
  })

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden')
  }
})()
