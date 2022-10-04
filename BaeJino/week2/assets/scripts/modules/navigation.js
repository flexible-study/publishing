import { openModal } from './modal.js'

export function initNavigation() {
  const $section = Array.from(document.querySelectorAll('main section')).reduce((acc, cur) => {
    acc[cur.dataset.tab] = cur
    return acc
  }, {})
  const $sidebarButtons = document.querySelectorAll('.sidebar button')

  $sidebarButtons.forEach($button => {
    $button.addEventListener('click', (e) => {
      const { tab, modal } = e.currentTarget.dataset

      $sidebarButtons.forEach($button => {
        $button.classList.remove('active')
      })
      e.currentTarget.classList.add('active')
  
      if (tab) {
        Object.keys($section).forEach((key) => {
          $section[key].style.display = 'none'
          $section[key].style.opacity = 0
        })
        
        $section[tab].style.display = 'flex'
        setTimeout(() => {
          $section[tab].style.opacity = 1
        }, 0)
      }

      if (modal) {
        openModal(modal)
      }
    })
  })  
}
