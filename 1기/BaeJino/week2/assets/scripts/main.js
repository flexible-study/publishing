import { getPhotos } from './modules/api.js'
import { initModal } from './modules/modal.js'
import { initNavigation } from './modules/navigation.js'
import { validate } from './modules/validate.js'

(function main() {
  initModal()
  initNavigation()

  getPhotos().then(photos => {
    const sourceSets = [
      ['(max-width: 768px)', 'thumb'],
      ['(max-width: 1024px)', 'small'],
    ];
    document.querySelector('.gallery .grid').innerHTML = (
      photos.map((photo) => {
        return `
          <figure>
            <picture>
              ${sourceSets.map(([media, size]) => (
                `<source media="${media}" srcset="${photo.urls[size]}">`
              )).join('')}
              <img src="${photo.urls.regular}" alt="${photo.alt_description ? photo.alt_description : ''}">
            </picture>
            <figcaption>
              ${photo.description ? photo.description : ''}
              <time>${photo.created_at}</time>
            </figcaption>
          </figure>
        `;
      }).join('')
    )
  })

  document.querySelector('#sendMail').addEventListener('submit', (e) => {
    e.preventDefault()
    if (validate(e.currentTarget)) {
      // e.currentTarget.submit()
    }
  })
})()
