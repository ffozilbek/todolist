"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    const elForm = document.querySelector(".todo__form"),
        elInput = document.querySelector(".todo__input"),
        elTodoList = document.querySelector(".todo__list");

        showTodo();
    function addTodo() {
        if(elInput.value) {
            // create elements
            const todoItem = document.createElement("li"),
                itemDelBtn = document.createElement("button");

            todoItem.innerHTML = elInput.value;

            todoItem.classList.add("todo__item");
            itemDelBtn.classList.add("todo__trashbin");

            elTodoList.appendChild(todoItem);
            todoItem.appendChild(itemDelBtn);

            elInput.value = "";
            saveTodo();

        } else {
            alert("Please add todo...")
        }
    }

    elForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        addTodo()
    })

    elTodoList.addEventListener("click", (e)=> {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveTodo();
        }
        else if(e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
            saveTodo();
        }
    })

    function saveTodo() {
        localStorage.setItem("todos", elTodoList.innerHTML);
    }

    function showTodo() {
        elTodoList.innerHTML = localStorage.getItem("todos");
    }



})