const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
 axios.get(" https://crudcrud.com/api/9cfa29b0a1aa45f390ae96382541da61/todo")
 .then((res)=>{
    console.log(res)
 })
 .catch((err)=>{
    console.log(err);
 })
}

function postTodo() {
  axios
    .post(' https://crudcrud.com/api/9cfa29b0a1aa45f390ae96382541da61/todo',{
      name	:"mahi",
      email	:"mahi@gmail.com"
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}

function putTodo() {
  // Write your code here
  axios.put('https://crudcrud.com/api/9cfa29b0a1aa45f390ae96382541da61/todo/65ccecd06227a803e824c614',{
    name	:"mahi",
      email	:"mahi1001@gmail.com"

  }).then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
}

function deleteTodo() {
  // Write your code here
    axios.delete("https://crudcrud.com/api/9cfa29b0a1aa45f390ae96382541da61/todo/65ccecd06227a803e824c614").then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
}

