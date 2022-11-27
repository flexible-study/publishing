import { getRandomPhotos } from "./api.js";

const $tabWrapper = document.querySelector(".tab-wrapper");
const $tabNavigation = document.querySelector(".tab-navigation");
const $imageArea = document.querySelector("#image-area");

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

  if (tabId === "#gallery") {
    renderGallery();
    // renderGallery2();
  }
});

async function renderGallery() {
  const randomImages = await getRandomPhotos();
  const imageHTMLList = new Array(randomImages.length).fill(
    `<div class="placeholder"></div>`
  );

  $imageArea.innerHTML = imageHTMLList.join("\n");

  const $placeholders = document.querySelectorAll(".placeholder");

  randomImages.forEach((randomImage, index) => {
    const pictureObj = {
      thumb: randomImage.urls.thumb,
      small: randomImage.urls.small,
      full: randomImage.urls.full,
      alt: randomImage.alt_description,
      date: randomImage.created_at,
      description: randomImage.description,
      $placeholder: $placeholders[index],
    };

    console.log(randomImage);
    loadImg(pictureObj);
  });
}

//스칼렛톤
function loadImg({ full, thumb, samll, alt, date, description, $placeholder }) {
  const $picture = document.createElement("picture");

  const $tabletSource = document.createElement("source");
  $tabletSource.srcset = thumb;
  $tabletSource.media = "(max-width: 1023px)";

  const $mobileSource = document.createElement("source");
  $mobileSource.srcset = samll;
  $mobileSource.media = "(max-width: 575px)";

  const $img = document.createElement("img");
  $img.src = full;
  $img.alt = alt;

  const $descriptionWrap = document.createElement("div");
  $descriptionWrap.className = "img-description-wrap";

  const $description = document.createElement("span");
  $description.textContent = description;
  $description.className = "img-description-content";

  const $date = document.createElement("span");
  $date.textContent = date;
  $date.className = "img-description-date";

  $descriptionWrap.appendChild($description);
  $descriptionWrap.appendChild($date);

  $picture.appendChild($mobileSource);
  $picture.appendChild($tabletSource);
  $picture.appendChild($img);
  $picture.appendChild($descriptionWrap);

  $img.addEventListener("load", () => {
    setTimeout(() => {
      $placeholder.appendChild($picture);
    });
  });
}

//lazy loading
//스클롤 내리면서 나는 효과인데 내 상황과 맞지 않아 적용안함
function renderGallery2() {
  document.addEventListener("DOMContentLoaded", function () {
    const lazyloadImages = document.querySelectorAll("img.lazy");
    console.log(lazyloadImages);
    let lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        let scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove("lazy");
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  });
}
