// Get  Element by DOM
const searchBtn = document.getElementById("search");
const listItems = document.getElementById("list-items");
const listItem = document.querySelectorAll(".list-item");
const addList = document.getElementById("input-add");
const form = document.getElementById("input-wrap");
// const deleteBtn = document.querySelectorAll(".btn");

// Add eventlistener to form
form.addEventListener("submit", searchItem);

function searchItem(e) {
  //prevent default form submission by html
  e.preventDefault();

  //create h4 element and append text content
  let heading4 = document.createElement("h4");
  heading4.append(addList.value);

  //create button element and append text content
  let listBtn = document.createElement("button");
  listBtn.className = "btn";
  listBtn.append("x");

  //create li element and append h4 and button
  let newList = document.createElement("li");
  newList.className = "list-item";
  newList.append(heading4, listBtn);

  //append newlist to the ul
  listItems.append(newList);
}

//Delete item function
  
  // for (let i = 0; i < deleteBtn.length; i++) {
  //   deleteBtn[i].addEventListener("click", deleteItem);
  // }
  // function deleteItem() {
  //   if(confirm('Are you sure?')){
  //     let badItem = this.parentElement;
  //     listItems.removeChild(badItem);
      
  //   }
  // }

// deleteBtn.forEach((item) => {
//   item.addEventListener('click', deleteItem);
//   function deleteItem() {
//     if(this.classList.contains('btn')){
//       if(confirm('Are you sure?')){
//         let badItem = this.parentElement;
//         listItems.removeChild(badItem);
        
//       }
//     }
//     }
// })

listItems.addEventListener('click', deleteItem);

function deleteItem(e) {
  if(e.target.classList.contains('btn')){
    if(confirm('Are you sure?')){
      let badItem = e.target.parentElement;
      listItems.removeChild(badItem);
      
    }
  }
  }

  

