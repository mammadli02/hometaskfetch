import{
  postCategory
} from "./httprequest.js";
let cards=document.querySelector(".cards")
 let titleInput = document.querySelector("#name");
 let bodyInput = document.querySelector("#desc");
let addForm = document.querySelector("#addForm");
addForm.addEventListener("submit",async()=>{
 e.preventDefault()
 console.log(e);
 const users = {
     name: titleInput.value,
     username: bodyInput.value,
    };
    titleInput.value = "";
 bodyInput.value = "";
   let id;
   await postCategory(users).then((data)=>{
      id = data.id;
      // console.log(data);
    
  })
   cards.innerHTML +=`<div class="card  col-3 p-3 mt-3 " >
   <div class="cart p-2  ">
   <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" class="card-img-top" alt="..." width="100%">
   <div class="card-body h-400">
     <h5 class="card-title " >${users.name}</h5>
     <p class="card-text ">${users.username}</p>
     <div>
 <button class="btn btn-warning"">Edit</button>
 <button class="btn btn-danger" data-id="${users.id}">Delete</button>
   </div>
   </div>
   </div>
 </div>`
 window.location.href="./index.html"
})
