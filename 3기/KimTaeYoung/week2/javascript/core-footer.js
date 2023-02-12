// 모바일 사이드바 토글
document.querySelector('.toggle-sidebar').addEventListener('click', () => {
  document.documentElement.classList.toggle('sidebar-active');
});

// 탭 기능
const wrap = document.querySelector('#wrap');
const tabButtons = wrap.querySelectorAll('.navigation [data-tab]');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 불필요한 실행 방지를 위한 active 체크
    if ( ! button.parentNode.classList.contains('active') ) {
      const tabId = button.dataset.tab;

      button.parentNode.parentNode.querySelector('.active').classList.remove('active');
      button.parentNode.classList.add('active');

      wrap.querySelector('#main .tab-content.active').classList.remove('active');
      wrap.querySelector(`#main .${tabId}`).classList.add('active');
    }

    if ( document.documentElement.classList.contains('sidebar-active') ) {
      document.documentElement.classList.remove('sidebar-active')
    }
  })
});

// 타임라인 통신
fetch('./json/timeline.json')
  .then(response => response.json())
  .then(data => {
    const timelineLists = document.querySelector('#fetch-timeline');
    const item = data.map((item) => {
      return `<li>
                <div class="date">${item.period}</div>
                <div class="content">
                  <h3 class="title">${item.title}</h3>
                  <p class="description">${item.description}</p>
                </div>
              </li>`
    }).join('');
    timelineLists.innerHTML = item;
  });

// 포트폴리오 통신
fetch('./json/portfolio.json')
  .then(response => response.json())
  .then(data => {
    const timelineLists = document.querySelector('#fetch-portfolio');
    const item = data.map((item) => {
      return `<li>
                <button class="button" type="button" data-item-detail='${JSON.stringify(item)}'
                  onclick="modalOpen(this);">
                  <img class="thumbnail" src="${item.thumbnail}" alt="${item.title} 포트폴리오 대표 이미지">

                  <span class="overlay">
                    <span class="title">${item.title}</span>

                    <img class="arrow" src="./svgs/arrow_outward.svg" alt="화살표 아이콘" aria-hidden="true">
                  </span>
                </button>
              </li>`
    }).join('');
    timelineLists.innerHTML = item;
  });

// 모달 액션
function modalOpen(button) {
  // 모달 영역 가져오기
  const modal = document.querySelector('#modal');
  const thumbnail = modal.querySelector('.thumbnail');
  const title = modal.querySelector('.title');
  const languages = modal.querySelector('.languages span');
  const date = modal.querySelector('.date span');
  const body = modal.querySelector('.body');

  // 포트폴리오 데이터 가져오기
  const item = JSON.parse(button.dataset.itemDetail);

  // 부모 스크롤 잠그기
  document.documentElement.classList.add('scroll-lock');

  // 모달에 데이터 넣기
  thumbnail.innerHTML = `<img src="${item.thumbnail}" alt="${item.title} 포트폴리오 대표 이미지">`;
  title.innerHTML = item.title;
  languages.innerHTML = item.languages.map(item => item).join(', ');
  date.innerHTML = item.date;
  body.innerHTML = item.description;

  // 모달 보이기
  modal.style.display = 'flex';

  // 포커스 이동
  modal.querySelector('[autofocus]').focus();
}

function modalClose() {
  // 모달 영역 가져오기
  const modal = document.querySelector('#modal');

  // 모달 닫기
  modal.style.display = 'none';

  // 부모 스크롤 허용
  document.documentElement.classList.remove('scroll-lock');
}


// 폼 유효성 검사
const form = document.querySelector('form');
const requiredItems = form.querySelectorAll('[required]');

function sendEmail(form) {
  let detectValidationItems = [];

  // Array.from()을 사용해 NodeList를 Array로 변환
  Array.from(requiredItems, (item) => {

    if ( ! item.checkValidity() ) {
      detectValidationItems.push(item);
      form.classList.add('validation-detect');
    }
  });

  if ( detectValidationItems.length > 0 ) {
    console.log(detectValidationItems);
  } else {
    alert('submit!');
  }

  return false;
}
