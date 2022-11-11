// // CREAT ELEMENTS
const Content = document.querySelector('#content');
const List = document.createElement("ul");
const Input = document.querySelector('#inputId');
const Add = document.querySelector("#AddtoDo");
const RemoveButton = document.querySelector("#remove")
Content.appendChild(List);

Add.addEventListener('click',() =>{
  
    const txt = Input.value;
    if(Input.value == " "){
        alert("Ne ise daxil etmeilisiniz!")
    }else{
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        button.setAttribute("id", "delete")
        const checkbox = document.createElement('button');
        checkbox.setAttribute("id","check");
        span.textContent = txt;
        Input.value = " ";
        button.textContent = "delete";
        checkbox.textContent = "checked";
        li.appendChild(span);
        li.appendChild(button);
        li.appendChild(checkbox);
        List.appendChild(li);
        button.addEventListener('click',()=>{
            li.innerHTML = " "
            
        })
        checkbox.addEventListener('click',()=>{
            li.style.textDecorationLine = "line-through";
        });
    }}
)
RemoveButton.addEventListener('click',()=>{
    List.innerHTML =" "
})
// const myList = document.createElement("ul");
// const bodyElement = document.getElementsByTagName("body")[0];
// bodyElement.appendChild(myList);
// const myInput = document.getElementsByTagName("input")[0];

// function addTodo() {
//   if (myInput.value === "") return;
//   const spanElement = document.createElement("span");
//   const liElement = document.createElement("li");
//   const buttonElement = document.createElement("button");
//   spanElement.textContent = myInput.value;
//   myInput.value = "";
//   buttonElement.innerHTML = "delete";
//   liElement.appendChild(spanElement);
//   liElement.appendChild(buttonElement);
//   myList.appendChild(liElement);
// }

// const myButton = document.getElementById("my_button");

// myButton.onclick = addTodo;

// const removeBtn = document.querySelector("#remove_btn");

// function removeListItem() {
//   myList.innerHTML = "";
// }

// removeBtn.onclick = removeListItem;