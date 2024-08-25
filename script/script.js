const taskList = [{
  name: 'mego',
  doDate: '2024-5-6'
},
{
  name: 'memo',
  doDate:'2024-5-11'
}];
render();
function render() {
  const viewInput = document.querySelector(".js-task-view");
  let tasklistHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const value = taskList[i];
    const taskName = value.name;
    const taskDate = value.doDate;
    const html = `<div class="layout">
    <p class="to-do-name">${taskName}</p>
    <p class="to-do-date">${taskDate}</p>
    <button class="delete-bt" onclick='
      taskList.splice(${i}, 1);   
      render();
    '>Delete</button>
    </div>`;
    tasklistHTML += html;
  }
  viewInput.innerHTML = tasklistHTML;
}

function addTask() {
  const inputElement = document.querySelector(".js-name-input");
  const inputElementDate = document.querySelector(".js-date-input");
  const name = inputElement.value;
  const date = inputElementDate.value;
  taskList.push({
    name: name,
    doDate: date
  });
  console.log(taskList);
  inputElement.value = "";
  // inputElementDate.value = "";
  render();
}
render();

document.querySelector('.js-add-bt').addEventListener('click', ()=>{
  addTask()
});
document.querySelector('.js-name-input').addEventListener('keydown', (event)=>{
  if (event.key === "Enter") {
    addTask();
  }
})