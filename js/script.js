"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    const elForm = document.querySelector(".todo__form"),
        elInput = document.querySelector(".todo__input"),
        elTodoList = document.querySelector(".todo__list");

        function setItem() {
            const itemInput = elInput.value.trim();

            if(itemInput) {
                createItem(itemInput);
                saveTodoList();
                elInput.value = "";
            } else alert("Please add todo");
        }
    elForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        function createItem(item) {
            const newItem = document.createElement("li"),
                 newItemText = document.createElement("span"),
                 newTrashBtn = document.createElement("button"),
                 newCheckBtn = document.createElement("input");

                 newCheckBtn.setAttribute("type","checkbox")

            newItem.classList.add("todo__item");
            newItemText.classList.add("todo__text");
            newTrashBtn.classList.add("todo__trashbin");


            newItemText.textContent = item;

            newItem.append(newCheckBtn);
            newItem.append(newItemText);
            newItem.append(newTrashBtn);
            elTodoList.append(newItem);

            newCheckBtn.addEventListener("click", ()=> {
                if(newCheckBtn.checked) newItemText.classList.toggle("checked")
            })

            newTrashBtn.addEventListener("click", (e)=> {
                elTodoList.removeChild(e.target.parentElement);
                saveTodoList()
            })

        }
})