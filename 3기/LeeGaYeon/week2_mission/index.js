const $aboutBtn = document.querySelector('#aboutBtn')
const $timelineBtn = document.querySelector('#timelineBtn')
const $about = document.querySelector('.about')
const $timeline = document.querySelector('.timeline')

$aboutBtn.addEventListener('click', () => {
  $timeline.classList.remove('active')
  $about.classList.add('active')
  $aboutBtn.style.fontWeight = 700
})

$timelineBtn.addEventListener('click', () => {
  $about.classList.remove('active')
  $timeline.classList.add('active')
  $timeline.style.width = '100%'
  $timeline.style.height = '100%'
})