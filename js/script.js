"use strict"
window.addEventListener("DOMContentLoaded", ()=> {
    const elForm = document.querySelector(".todo__form"),
        elInput = document.querySelector(".todo__input"),
        elTodoList = document.querySelector(".todo__list"),
        elTodoDate = document.querySelector(".todo__date"),
        elTodoIsEmpty = document.querySelector(".todo__empty");

    function showDate() {
        let day = new Date().getDay(),
            date = new Date().getDate(),
            month = new Date().getMonth(),
            year = new Date().getFullYear();

            switch (day) {
                case 0:
                  day = "Sunday";
                  break;
                case 1:
                  day = "Monday";
                  break;
                case 2:
                   day = "Tuesday";
                  break;
                case 3:
                  day = "Wednesday";
                  break;
                case 4:
                  day = "Thursday";
                  break;
                case 5:
                  day = "Friday";
                  break;
                case 6:
                  day = "Saturday";
              }

              switch (month) {
                case 1:
                  month = "Jan";
                  break;
                case 2:
                  month = "Feb";
                  break;
                case 3:
                   month = "Mar";
                  break;
                case 4:
                  month = "Apr";
                  break;
                case 5:
                  month = "May";
                  break;
                case 6:
                  month = "Jun";
                  break;
                case 7:
                  month = "Jul";
                case 8:
                  month = "Aug";
                  break;
                case 9:
                  month = "Sep";
                  break;
                case 10:
                  month = "Oct";
                  break;
                case 11:
                  month = "Nov";
                case 12:
                    month = "Dec";
              }

        elTodoDate.innerHTML = `Today is ${day} ${date} ${month} ${year}`
    }

    showDate();

    showTodo();
    function addTodo() {
        if(elInput.value.trim()) {
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


    function todoIsEmpty() {
      let todos = elTodoList.querySelectorAll("li").length;
      todos ? elTodoIsEmpty.style.display="none" : elTodoIsEmpty.style.display="block";

    }

    elForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        addTodo();

        todoIsEmpty();

    })

    elTodoList.addEventListener("click", (e)=> {
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveTodo();
        }
        else if(e.target.tagName === "BUTTON") {
            e.target.parentElement.remove();
            todoIsEmpty();
            saveTodo();
        }
    })

    function saveTodo() {
        localStorage.setItem("todos", elTodoList.innerHTML);
    }

    function showTodo() {
        elTodoList.innerHTML = localStorage.getItem("todos");
        todoIsEmpty();
    }



})