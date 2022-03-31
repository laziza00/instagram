let instagramList = document.querySelector('#instagramlist')
let heartCount = document.querySelector('#heartcount')
let postSort =document.querySelector('#postsort')

function showPosts(posts) {

    posts.forEach(item => {

        let li= document.createElement('li');
        li.className = "instagram__item ";

        li.setAttribute("data-bs-toggle","modal");
        li.setAttribute("data-bs-target","#exampleModalToggle");
  

        if(item.type =="img") {
            li.innerHTML =`
            <img class="instagram__img" src="${item.media[0]}" alt="img">
            <div style="display: flex;" class="instagram__btn-box">
              <button class="instagram__btn btn-heart"><i class='bx bxs-heart'></i></button>
            <span class="instagram__heart-count"id ="heartcount" onclick="countLike">
            ${item.like}
            </span>
          </div>
            <div style="display: flex;" class="instagram__btn-boxmess">
              <button class="instagram__btn btn-mess"><i class='bx bxs-message-rounded'></i></button>
              <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
            </div>
            <div class="instagram__item-shadow"></div>

            `
            instagramList.appendChild(li)
        }
        else if (item.type =="video") {
            li.innerHTML =`
            <video class="instagram__video"  src="${item.media}"></video>

            <div style="display: flex;" class="instagram__btn-box">
              <button class="instagram__btn btn-heart heart" id="heartbtn" onclick="addLike">
              <i class='bx bx-play'></i></button>
            <span class="instagram__heart-count"id ="heartcount" onclick="countLike">
            ${item.like}
            </span>
          </div>
            <div style="display: flex;" class="instagram__btn-boxmess">
              <button class="instagram__btn btn-mess">
              <i class='bx bxs-message-rounded'></i></button>
              <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
            </div>
            <div class="instagram__item-shadow"></div>
            `
            instagramList.appendChild(li);
        }
     
    });
}

showPosts(posts)


postSort.addEventListener ('click', workSort)

function workSort (e) {
  let btnText = e.target.textContent;
  console.log(btnText);
  if(btnText == 'posts') {
    let newArrOne = posts.map((item) => {
      return `
       <li class="instagram__item "  >
       <img class="instagram__img" src="${item.media}" alt="img">
      <div style="display: flex;" class="instagram__btn-box">
        <button class="instagram__btn btn-heart heart" id="heartbtn" onclick="addLike">
        <i class='bx bx-play'></i></button>
      <span class="instagram__heart-count"id ="heartcount" onclick="countLike">
      ${item.like}
      </span>
    </div>
      <div style="display: flex;" class="instagram__btn-boxmess">
        <button class="instagram__btn btn-mess">
        <i class='bx bxs-message-rounded'></i></button>
        <span class="instagram__heart-count" onclick="countComment">${item.comment}</span>
      </div>
      <div class="instagram__item-shadow"></div>
      </li> 
      `
    })
  }
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



// ===========like img===========
let modalBody = document.querySelector('#modalbody')
let heartBtn = document.querySelectorAll('.heart')
let addArr=[]



heartBtn.forEach(heartBtn => heartBtn.addEventListener('click', (e) => {
  e.target.style.color= 'red'
})
)

function addLike (e) {
  for(let i=0; i<=posts.length; i++) {
    if(posts[i].id==e) {
      let b = posts[i];    
      addArr.push(b)
    }
  }
}



//=========modal slider=============


// let modalList = document.querySelector('#modallist ')
// let modalItem = document.querySelectorAll('#modallist img')

// let modalLeftBtn = document.querySelector('#left')
// let modalRightBtn = document.querySelector('#right')

// let sdx =0;


// function modalSlider() {
//     if(sdx > modalItem.length-1){
//         sdx = 0;
//     }
//     else if(sdx < 0) {
//         sdx = modalItem-1
//     }

//     modalList.style.transform =`translateX(${-sdx*450}px)`
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