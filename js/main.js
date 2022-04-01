let instagramList = document.querySelector('#instagramlist')
let heartCount = document.querySelector('#heartcount')
let postSort =document.querySelector('#postsort')
let modalBody = document.querySelector('#modalbody')
let heartBtn = document.querySelectorAll('.heart')
let bookmark = document.querySelectorAll('.bookmark')
let addArr=[]



function showPosts(posts) {

    posts.forEach(item => {

        let li= document.createElement('li');
        li.className = "instagram__item ";

        li.setAttribute("data-bs-toggle","modal");
        li.setAttribute("data-bs-target","#exampleModalToggle");
  

        if(item.type =="img") {
            li.innerHTML =`
            <div onclick ="addModal(${item.id})" >
            <img class="instagram__img" src="${item.media[0]}" alt="img">
            <div style="display: flex;" class="instagram__btn-box">
              <button class="instagram__btn btn-heart"><i class='bx bxs-heart'></i></button>
            <span class="instagram__heart-count"id ="heartcount" onclick="countLike(${item.id})">
            ${item.like}
            </span>
          </div>
            <div style="display: flex;" class="instagram__btn-boxmess">
              <button class="instagram__btn btn-mess"><i class='bx bxs-message-rounded'></i></button>
              <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
            </div>
            <div class="instagram__item-shadow"></div>
            </div>

            `
            instagramList.appendChild(li)
        }
        else if (item.type =="video") {
            li.innerHTML =`
            <div onclick ="addModal(${item.id})"> 
            <video class="instagram__video"  src="${item.media}"></video>

            <div style="display: flex;" class="instagram__btn-box">
              <button class="instagram__btn btn-heart " id="heartbtn" onclick="addLike">
              <i class='bx bx-play'></i></button>
            <span class="instagram__heart-count"id ="heartcount" onclick="countLike(${item.id})">
            ${item.like}
            </span>
          </div>
            <div style="display: flex;" class="instagram__btn-boxmess">
              <button class="instagram__btn btn-mess">
              <i class='bx bxs-message-rounded'></i></button>
              <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
            </div>
            <div class="instagram__item-shadow"></div>
            </div>
            `
            instagramList.appendChild(li);
        }
    });
}

showPosts(posts)

// ===========like img===========


function addModal(id) {

  modalBody.innerHTML= "";
  let postId = id;

  posts.forEach((item) => {
    if(item.id ==postId) {
      let box = document.createElement('div');

      if(item.type == "img") {
        box.innerHTML = `
   
        <div class="modal-body" id="modalbody">
          <div  class="modal__info" style="width: 100%;">
          <div style="width: 50%; overflow: hidden; position: relative; ">
            <button id="modalLeftBtn" class="slide__btn leftbtn">
              <i class='bx bx-chevron-left' ></i>
            </button >
            <button id="modalRightBtn" class="slide__btn rightbtn">
              <i class='bx bx-chevron-right' ></i>
            </button>
            <div style="display: flex;  transition: all 0.3s ease; width: 90% !important;" id="modallist">
              
            <img class="modal__img" src="${item.media}" alt="img">

            </div>
          </div>
          <div style="width: 50%;" class="modal__desc">
            <header class=" modal__header">
              <div class="modal__link-box"> 
                <a class="modal__link" href="#">
                  <img class="modal__link-img" src="images/photo-logo.jpg" alt="img">
                  najottalim
                </a>
  
                <span class="modal__soan"></span>
                <button class="modal__follow">Following</button>
                <button class="modal__menu"><i class='bx bx-dots-horizontal-rounded'></i></button>
              </div>
            </header>
            <div class="modal__body-info">
              <div style="display: flex; align-items: center; margin: 0 0 20px 0;">
                <a class="modal__link" href="#">
                  <img class="modal__link-img" src="images/photo-logo.jpg" alt="img">
                  najottalim
                </a>
                <p class="modal__text">
                  Tipografika bo'yicha foydali maslahatlar
                </p></div>
       
              <p class="modal__text-inner">
                Tipografika nima? Grafik dizayn sohasida 
                ${item.desc}
              </p>
            </div>
            <div class="modal__bot-box">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex;">
                  <button class="modal__bt-btn heart" id="heartbtn" onclick="addLike(${item.id})">
                    <i class='bx bx-heart'></i>
                  </button>
                  <button class="modal__bt-btn ">
                    <i class='bx bx-navigation'></i>
                  </button>
                  <button class="modal__bt-btn">
                    <i class='bx bx-message-rounded'></i>
                  </button>
                  <button class="modal__bt-btn">
                    <i class='bx bx-telegram'></i>
                  </button>
                </div>
                <button class="modal__bt-btn bookmark" onclick="bookmarkWork(${item.id})">
                  <i class='bx bx-bookmark'></i>
                </button>
              </div>
              <div>
                <p class="modal__likes" onclick="countLike(${item.id})">${item.like} likes</p>
                <p class="modal__watch">4 hours ago</p>
              </div>
              <div style="display: flex; align-items: center; border-top: 1px solid #e7e2e2; padding: 10px 10px 10px 0;">
                <button class="modal__bt-btn">
                  <i class='bx bx-smile' ></i>
                </button>
                <input class="modal__input" type="text" placeholder="Add a comment">
                <p class="modal__post-text">post</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        `
        modalBody.appendChild(box)
      }
      else if (item.type =="video") {
        box.innerHTML =`
        <div class="modal-body" id="modalbody">
        </button>
          <div  class="modal__info" style="width: 100%;">
          <div style="width: 50%; overflow: hidden; position: relative; ">
            <button id="modalLeftBtn" class="slide__btn leftbtn">
              <i class='bx bx-chevron-left' ></i>
            </button >
            <button id="modalRightBtn" class="slide__btn rightbtn">
              <i class='bx bx-chevron-right' ></i>
            </button>
            <div style="display: flex;  transition: all 0.3s ease; width: 90% !important;" id="modallist">
            <video src="${item.media}" controls autoplay></video>
            </div>
          </div>
          <div style="width: 50%;" class="modal__desc">
            <header class=" modal__header">
              <div class="modal__link-box"> 
                <a class="modal__link" href="#">
                  <img class="modal__link-img" src="images/photo-logo.jpg" alt="img">
                  najottalim
                </a>
  
                <span class="modal__soan"></span>
                <button class="modal__follow">Following</button>
                <button class="modal__menu"><i class='bx bx-dots-horizontal-rounded'></i></button>
              </div>
            </header>
            <div class="modal__body-info">
              <div style="display: flex; align-items: center; margin: 0 0 20px 0;">
                <a class="modal__link" href="#">
                  <img class="modal__link-img" src="images/photo-logo.jpg" alt="img">
                  najottalim
                </a>
                <p class="modal__text">
                  Tipografika bo'yicha foydali maslahatlar
                </p></div>
       
              <p class="modal__text-inner">
                Tipografika nima? Grafik dizayn sohasida 
                ${item.desc}
              </p>
            </div>
            <div class="modal__bot-box">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="display: flex;">
                  <button class="modal__bt-btn heart" id="heartbtn" onclick="addLike(${item.id})">
                    <i class='bx bx-heart'></i>
                  </button>
                  <button class="modal__bt-btn ">
                    <i class='bx bx-navigation'></i>
                  </button>
                  <button class="modal__bt-btn">
                    <i class='bx bx-message-rounded'></i>
                  </button>
                  <button class="modal__bt-btn">
                    <i class='bx bx-telegram'></i>
                  </button>
                </div>
                <button class="modal__bt-btn bookmark" onclick="bookmarkWork(${item.id})">
                  <i class='bx bx-bookmark'></i>
                </button>
              </div>
              <div>
                <p class="modal__likes" )">${item.like} likes</p>
                <p class="modal__watch">4 hours ago</p>
              </div>
              <div style="display: flex; align-items: center; border-top: 1px solid #e7e2e2; padding: 10px 10px 10px 0;">
                <button class="modal__bt-btn">
                  <i class='bx bx-smile' ></i>
                </button>
                <input class="modal__input" type="text" placeholder="Add a comment">
                <p class="modal__post-text">post</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        `
        modalBody.appendChild(box)
      }
    }
  })
}




// ==================post slider list ===============

let leftBtn = document.querySelector('#leftbtn')
let rightBtn = document.querySelector('#rightbtn')
let slideList = document.querySelector('#slidelist')
let itemCard = document.querySelectorAll('#slidelist li')

let idx =0;

function postSlider() {
    if(idx > itemCard.length-11){
        idx = 0;
    }
    else if(idx < 0) {
        idx = itemCard-11
    }

    slideList.style.transform =`translateX(${-idx*150}px)`
}
rightBtn.addEventListener('click', ()=> {
    idx++;
    resetInter();
    postSlider();
})
leftBtn.addEventListener('click', ()=> {
    idx--;
    resetInter();
    postSlider();
})

let interval = setInterval(run, 3000);

function run() {
    idx++;
    postSlider();
}
function resetInter() {
    clearInterval(interval);
    interval = setInterval(run, 3000)
}


// =========bookmark==========

let ofcanvasModal = document.querySelector('#ofcanvasmodal')
let postList = document.querySelector('#postlist');
let count =0;

function countLike(id) {
  let iconBtn = document.querySelector('.bookmark')
  console.log(iconBtn);
  iconBtn.innerHTML = ` <i class='bx bxs-heart'></i>`
  
  posts.link.forEach((item) => {
    if(item.id==id) {
      count++;
      item.like += `
      ${count}`
    }
  })
}

function bookmarkWork (id) {
  let iconBtn = document.querySelector('.bookmark')
  console.log(iconBtn);
  iconBtn.innerHTML = ` <i class='bx bxs-bookmark'></i>`;

  posts.forEach((item) => {
    if(item.id==id) {

      item.save = true;
      let li =document.createElement('li');
      li.className = "instagram__item ";
    
      if(item.type=="video") {
        li.innerHTML =`
        <div onclick ="addModal(${item.id})"> 
        <video class="instagram__video"  src="${item.media}"></video>

        <div style="display: flex;" class="instagram__btn-box">
          <button class="instagram__btn btn-heart " id="heartbtn" onclick="addLike">
          <i class='bx bx-play'></i></button>
        <span class="instagram__heart-count"id ="heartcount" onclick="countLike(${item.id})">
        ${item.like}
        </span>
      </div>
        <div style="display: flex;" class="instagram__btn-boxmess">
          <button class="instagram__btn btn-mess">
          <i class='bx bxs-message-rounded'></i></button>
          <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
        </div>
        <div class="instagram__item-shadow"></div>
        </div>
        `
        postList.appendChild(li)
      }
      else if (item.type=="img") {
        li.innerHTML =`
        <div onclick ="addModal(${item.id})" >
        <img class="instagram__img" src="${item.media[0]}" alt="img">
        <div style="display: flex;" class="instagram__btn-box">
          <button class="instagram__btn btn-heart"><i class='bx bxs-heart'></i></button>
        <span class="instagram__heart-count"id ="heartcount" onclick="countLike(${item.id})">
        ${item.like}
        </span>
      </div>
        <div style="display: flex;" class="instagram__btn-boxmess">
          <button class="instagram__btn btn-mess"><i class='bx bxs-message-rounded'></i></button>
          <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
        </div>
        <div class="instagram__item-shadow"></div>
        </div>
        `
        postList.appendChild(li)
      }
      else {
        li.innerHTML =`
        <div onclick ="addModal(${item.id})" >
        <img class="instagram__img" src="${item.media[0]}" alt="img">
        <div style="display: flex;" class="instagram__btn-box">
          <button class="instagram__btn btn-heart"><i class='bx bxs-heart'></i></button>
        <span class="instagram__heart-count"id ="heartcount" onclick="countLike(${item.id})">
        ${item.like}
        </span>
      </div>
        <div style="display: flex;" class="instagram__btn-boxmess">
          <button class="instagram__btn btn-mess"><i class='bx bxs-message-rounded'></i></button>
          <span class="instagram__heart-count" onclick="countComment(${item.id})">${item.comment}</span>
        </div>
        <div class="instagram__item-shadow"></div>
        </div>
        `
        postList.appendChild(li)
      }

    }
  })
}







//=========modal slider=============


// let modalList = document.querySelector('#modallist ')
// let modalItem = document.querySelectorAll('#modallist img')

// let modalLeftBtn = document.querySelector('#modalLeftBtn')
// let modalRightBtn = document.querySelector('#modalRightBtn')

// let sdx =0;
// let mediaArr;


// modalList = mediaArr.join("")
// mediaArr = modalList.join("")



// for (let item in posts.length) {
//   let img = document.createElement('img');
//   img.innerHTML =`
//   <img class="modal__img" src="${item.media[0]}" alt="img">
//   `
// }


// function modalSlider() {
//     if(sdx > modalItem.length-1){
//         sdx = 0;
//     }
//     else if(sdx < 0) {
//         sdx = modalItem-1
//     }

//     modalList.style.transform =`translateX(${-sdx*550}px)`
// }
// modalRightBtn.addEventListener('click', ()=> {
//     sdx++;
//     resetInter();
//     modalSlider();
// })
// modalLeftBtn.addEventListener('click', ()=> {
//     sdx--;
//     resetInter();
//     modalSlider();
// })

// let modalInterval = setInterval(run, 3000);

// function run() {
//     sdx++;
//     modalSlider();
// }
// function resetInter() {
//     clearInterval(modalInterval);
//     modalInterval = setInterval(run, 3000)
// }