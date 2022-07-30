document.addEventListener("DOMContentLoaded", () => {
  // test code for binding two indentifies to two buttons
  // it works
  let allForms = document.getElementsByTagName('form')
  for (let i = 0; i < allForms.length; i++) {
    allForms[i].addEventListener('submit' , (e) => {
    e.preventDefault()
    buildMiamiInput(e.target["new-task-description"].value)
    form.reset()
  })
}});

function buildMiamiInput(input){
  let p = document.createElement('p') 
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = " click to delete!"
  p.textContent = `${input}  ` 
  p.appendChild(button)
  console.log(p)
  document.querySelector("#list").appendChild(p);
}

function handleDelete(e){
  e.target.parentNode.remove()
} 