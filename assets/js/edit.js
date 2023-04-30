// EditButton
import{getCategoryByID
} from "./httprequest.js";
Array.from(cards.children).forEach((item) => {
let cards=document.querySelector(".cards")
let editButton = item.children[0].children[1].children[3].children[0];
  let editNameInput = document.querySelector("#edit-name");
let editDescInput = document.querySelector("#edit-desc");
let editBtn = document.querySelector(".edit-btn");
  
  // console.log(editButton);
  let nameEdit = titeles.textContent;
    let descEdit = bodies.getAttribute("data-desc");
    let idEdit = item.children[0].children[1].children[3].children[0].getAttribute("data-id");
    let editingObj = {
      id: idEdit,
      name: nameEdit,
      title: descEdit,
    };
    editNameInput.value = editingObj.name;
      editDescInput.value = editingObj.title;
      editBtn.setAttribute("data-id",editingObj.id);

      //getting currently editin list item
      item.setAttribute("is-editing",true);
    editButton.addEventListener("click", (e) => {
      e.preventDefault();
      let newName = editNameInput.value;
      let newDesc = editDescInput.value;
      let id = e.target.getAttribute("data-id");
      let updatedCategory = {
        name: newName,
        description: newDesc,
      };
    })
      getCategoryByID(id,updatedCategory);
    

    Array.from(cards.children).filter((item)=>{
      if (item.getAttribute("is-editing")) {
        item.children[0].children[1].textContent = newName;
      }
    })
    })
