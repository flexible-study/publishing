const ACCESS_KEY = "ZKhbkAPgqqPWvdsRQFsYx0A8vxJ_NR17SYqajMxkrmA";
const BASE_URL = "https://api.unsplash.com/photos/random";

const tabNavigation = document.querySelector(".tab-navigation");
const tabBtns = document.querySelectorAll(".tab-btn");

const tabs = document.querySelectorAll(".tab");

tabNavigation.addEventListener("click", onHandleTabChange);

async function getImages(count = 1) {
  const images = await fetch(`${BASE_URL}?count=${count}`, {
    headers: {
      authorization: `Client-ID ${ACCESS_KEY}`,
    },
  }).then((response) => response.json());

  return images;
}

function removeClass(htmlCollections, className) {
  htmlCollections.forEach((tag) => tag.classList.remove(className));
}

async function onHandleTabChange(event) {
  const btn = event.target.closest("button");

  if (!btn || btn.classList.contains("active")) return;

  removeClass(tabBtns, "active");
  removeClass(tabs, "active");

  btn.classList.add("active");

  if (btn.classList.contains("my-profile")) {
    document.querySelector(".tab.my-profile").classList.add("active");
  } else if (btn.classList.contains("my-gallery")) {
    document.querySelector(".tab.my-gallery").classList.add("active");

    const gridWrapper = document.querySelector(".tab2-content");

    console.log(gridWrapper);

    const images = await getImages(50);

    const imageList = images
      .map((image) => {
        return /* html */ `
        <li class="image-item">
            <picture>
                <source media="(max-width: 767px)" srcset="${image.urls.thumb}"/>
                <source media="(max-width: 1023px)" srcset="${image.urls.small}"/>
                <img src="${image.urls.full}" alt="${image.alt_description}"/>
            </picture>
        </li>
      `;
      })
      .join("");

    console.log(imageList);

    gridWrapper.innerHTML = imageList;
  }
}
