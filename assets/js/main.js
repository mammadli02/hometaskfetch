import{getAllCategories,
    deleteCategoryByID,
    getCategoryByID
} from "./httprequest.js";
let cards=document.querySelector(".cards")
let loader = document.querySelector(".loader")
loader.style.display = "block"
getAllCategories().then((data) => {
    loader.style.display = "none"
    cards.innerHTML=""
    data.forEach((posts) => {
       
        cards.innerHTML +=`<div class="card  col-3 p-3 mt-3 " >
        <div class="cart p-2  ">
        <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" class="card-img-top" alt="..." width="100%">
        <div class="card-body h-400">
          <a class="card-title " href="./detail.html">${posts.title}</a>
          <br>
          <a class="card-text " href="./detail.html">${posts.body}</a>
          <div>
      <button class="btn btn-warning"data-id="${posts.id}">Edit</button>
      <button class="btn btn-danger" data-id="${posts.id}">Delete</button>
        </div>
        </div>
        </div>
      </div>`
    });
    Array.from(cards.children).forEach((item) => {

      let titeles=item.children[0].children[1].children[0]
      titeles.setAttribute("href", "./detail.html")
      let bodies=item.children[0].children[1].children[2]
      let editButton = item.children[0].children[1].children[3].children[0];
      editButton.setAttribute("href","./edit.html")
      // console.log(titeles);

      //Detail page
      // let cards2=document.querySelector(".cards2")
  //     titeles.addEventListener("click",async()=>{
  // await getCategoryByID().then((data)=>{
  //   data.forEach((posts)=>{
  //     cards2.innerHTML +=`<div class="card  col-3 p-3 mt-3 " >
  //     <div class="cart p-2  ">
  //     <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" class="card-img-top" alt="..." width="100%">
  //     <div class="card-body h-400">
  //       <h5 class="card-title " >${posts.title}</h5>
  //       <p class="card-text ">${posts.body}</p>
  //       <div>
  //   <button class="btn btn-warning"">Edit</button>
  //   <button class="btn btn-danger" data-id="${posts.id}">Delete</button>
  //     </div>
  //     </div>
  //     </div>
  //   </div>`
  //   })
  // })

  //     })
















  
//Delete Button

        let deleteButton = item.children[0].children[1].children[3].children[1];
        // console.log(deleteButton);
        deleteButton.addEventListener("click", (e) => {
            //sweet alert
            const swalWithBootstrapButtons = Swal.mixin({
              customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger",
              },
              buttonsStyling: false,
            });
      
            swalWithBootstrapButtons
              .fire({
                title: `Are you sure to delete?`,
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true,
              })
              .then((result) => {
                if (result.isConfirmed) {
                  swalWithBootstrapButtons.fire(
                    "Deleted!",
                    "Your file has been deleted.",
                    "success"
                  );
                  let id = e.target.getAttribute("data-id");
                  deleteCategoryByID(id);
                  console.log(data);
            // console.log(globalData);
                  //delete from UI
                 e.target.parentElement.parentElement.parentElement.parentElement.remove()
            
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                  swalWithBootstrapButtons.fire(
                    "Cancelled",
                    "Your imaginary file is safe :)",
                    "error"
                  );
                }
              });
          });
})
})


//search input
let search = document.querySelector("#search");
search.addEventListener("keyup",(e)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data =>{
        cards.innerHTML = "";
        let filteredData = data.filter((posts)=>
        // console.log(posts)
        posts.title.trim().toLowerCase().includes(e.target.value.trim().toLowerCase()
        )
        )
        
        filteredData.forEach((posts)=>{
            cards.innerHTML +=`<div class="card  col-3 p-3 mt-3 " >
            <div class="cart p-2  ">
            <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" class="card-img-top" alt="..." width="100%">
            <div class="card-body h-400">
              <h5 class="card-title " >${posts.title}</h5>
              <p class="card-text ">${posts.body}</p>
              <div>
          <button class="btn btn-warning"">Edit</button>
          <button class="btn btn-danger" data-id="${posts.id}">Delete</button>
            </div>
            </div>
            </div>
          </div>`
        })
    })
})

