const $tabWrapper = document.querySelector(".tab-wrapper");
const $tabNavigation = document.querySelector(".tab-navigation");

$tabNavigation.addEventListener("click", (event) => {
  const $button = event.target.closest("button");

  // 불필요한 실행 방지를 위한 active 체크
  if (!$button || $button.classList.contains("active")) {
    return;
  }

  const tabId = $button.dataset.tabTarget;

  $tabNavigation.querySelector(".active").classList.remove("active");
  $button.classList.add("active");

  $tabWrapper.querySelector(".active").classList.remove("active");
  $tabWrapper.querySelector(tabId).classList.add("active");
});
