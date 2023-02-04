const $btnList = document.querySelectorAll('button')
const $articleList = document.querySelectorAll('article')

$btnList.forEach(($btn) => {
  $btn.addEventListener('click', (e) => {
    $btnList.forEach(($btn) => $btn.classList.remove('active'))
    $articleList.forEach(($article) => $article.classList.remove('active'))

    const $targetArticle = document.querySelector(
      `article.${Array.from(e.target.classList)[0]}`
    )
    $targetArticle.classList.add('active')
    e.target.classList.add('active')
  })
})
