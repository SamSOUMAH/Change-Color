

const btn1 = document.getElementById('btn1');
const btn2=document.getElementById('btn2');
const btn3=document.getElementById('btn3');
const btn4=document.getElementById('btn4');
const btn5=document.getElementById('btn5');
const btn6=document.getElementById('btn6');
const btn7=document.getElementById('btn7');
const btn8=document.getElementById('btn8');

btn1.onclick = () => document.body.style.backgroundColor="violet";
btn2.onclick =()=> document.body.style.backgroundColor="yellow";
btn3.onclick =()=> document.body.style.backgroundColor="red";
btn4.onclick =()=> document.body.style.backgroundColor="green";
btn5.onclick =()=> document.body.style.backgroundColor="#FF8C00";
btn6.onclick =()=> document.body.style.backgroundColor="#87CEEB";
btn7.onclick =()=> document.body.style.backgroundColor="#0000CD";
btn8.onclick =()=> document.body.style.backgroundColor="#FF69B4";

loadEvents();
// load every event in the page  charger tous les événements de la page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
}
// subit data function
function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != ''){
    addTask(input.value);
    input.value = '';
  }
  else{alert("Ecrivez quelque chose svp")}
  
}

// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  // recently added
  document.getElementById('clear').addEventListener('click',clearList);

}

function clearList(e){
  // setting the ul innerHML to an empty string
  let ul = document.querySelector('ul').innerHTML = '';
}

loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  // recently added
  document.querySelector('ul').addEventListener('click',deleteOrTick);

}
// deleteTick
function deleteOrTick(e){
  if(e.target.className == 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

// tick a task
function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}





