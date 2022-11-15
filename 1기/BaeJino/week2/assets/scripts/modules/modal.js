export function openModal(modal) {
  const $modal = document.querySelector(`.modal[data-modal="${modal}"]`);
  document.body.style.overflow = 'hidden'
  $modal.classList.add('open')

  const $input = $modal.querySelector('input');
  $input
    ? $input.focus()
    : $modal.querySelector('.close').focus()
}

export function initModal() {
  const $modals = Array.from(document.querySelectorAll('.modal')).reduce((acc, cur) => {
    acc[cur.dataset.modal] = cur
    return acc
  }, {})

  Object.keys($modals).forEach(key => {
    function closeModal() {
      document.body.style.overflow = 'auto'
      $modals[key].classList.remove('open')
    }

    $modals[key].querySelector('.modal-overlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        closeModal()
      }
    })

    $modals[key].querySelector('.modal-close').addEventListener('click', (e) => {
      closeModal()
    })
  })
}
