const $btnList = document.querySelectorAll('button')
const $articleList = document.querySelectorAll('article')
const $menuIcon = document.querySelector('.menu-icon')
const $overlay = document.querySelector('.overlay')
const $sideMenu = document.querySelector('.side-nav')
const $closeIcon = document.querySelector('.close-icon')

$btnList.forEach(($btn) => {
  $btn.addEventListener('click', (e) => {
    $btnList.forEach(($btn) => $btn.classList.remove('active'))
    $articleList.forEach(($article) => $article.classList.remove('active'))

    const $targetArticle = document.querySelector(`article.${Array.from(e.target.classList)[0]}`)
    $targetArticle.classList.add('active')
    e.target.classList.add('active')
  })
})

$menuIcon.addEventListener('click', (e) => {
  $overlay.classList.toggle('active-menu')
  $sideMenu.classList.toggle('active-menu')
})

$overlay.addEventListener('click', (e) => {
  $overlay.classList.toggle('active-menu')
  $sideMenu.classList.toggle('active-menu')
})

$closeIcon.addEventListener('click', () => {
  $overlay.classList.toggle('active-menu')
  $sideMenu.classList.toggle('active-menu')
})
