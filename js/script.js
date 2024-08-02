const elInput = document.querySelector(".js-input"),
    elButton = document.querySelector(".js-button"),
    elListGroup = document.querySelector(".js-list-group");


elButton.addEventListener("click", ()=> {
    // Create Element

    const newList = document.createElement("li");
    const newTodoText = document.createElement("span");
    const newTodoIcon = document.createElement("span");

    newTodoIcon.addEventListener("click", (e)=> {
        elListGroup.removeChild(e.target.parentElement);
    })

    if(elInput.value !== "" || elInput.value == null) {
        elListGroup.appendChild(newList);
        newList.appendChild(newTodoText);
        newList.appendChild(newTodoIcon);
        newList.classList.add("list-group-item");
        newTodoIcon.classList.add("delete-icon");
        newTodoText.textContent = elInput.value;
    }
    elInput.value = "";

})
