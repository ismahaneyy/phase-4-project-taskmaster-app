import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../styles/dashboardbody.css";

function DashboardBody({ toggleTaskForm, projectId, handleProjectDelete, handleUpdateProject, toggleUpdateProjectForm,transferValues }) {



  const token = localStorage.getItem("jwt");  //store token in localStorage

  // Fetching one project's details;


  let [projectObj, setProjectObj] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/user/projects/${projectId}`, {
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setProjectObj(data);
      transferValues(data);
    });
  }, [projectId]);


  // Project values;


  let projectName = projectObj["name"];
  let dueDate = projectObj["due_date"];
  let tasks = projectObj["tasks"];


  // Creating a element for each task present;


  let taskList;
  if (tasks) {
    taskList = tasks.map((task) => {
      return (
        <div className={`draggable${task.id}`} id="draggable">
          <div className="menu-inactive" id="task-menu">
            <span
              onClick={(e) => {
                const h4Element = document.getElementById(`task-name-${task.id}`);
                const pElement = document.getElementById(`task-desc-${task.id}`);
                const btnElement = document.getElementById(`task-confirm-${task.id}`);
                e.target.parentNode.parentNode.classList.toggle("menu-active");

                h4Element.contentEditable = true; 
                h4Element.style.border = "1px solid #fff";   
                pElement.contentEditable = true; 
                pElement.style.border = "1px solid #fff"; 
                btnElement.style.visibility = 'visible';
              }}
            >
              <h5>Edit</h5>
            </span>
            <span
              onClick={(e) => {
                handleDeleteTask(task.id);
              }}
            >
              <h5>Delete</h5>
            </span>
          </div>
          <i
            onClick={(e) => {
              e.target.previousSibling.classList.toggle("menu-active");
            }}
            id="menu-icon"
            className="material-icons"
          >
            more_vert
          </i>
          <h4 id={`task-name-${task.id}`}>{task.name}</h4>
          <p id={`task-desc-${task.id}`}>{task.description}</p>
          <div onClick={(e)=>{
              const name = document.getElementById(`task-name-${task.id}`);
              const desc = document.getElementById(`task-desc-${task.id}`);
              const btnElement = document.getElementById(`task-confirm-${task.id}`);

              name.contentEditable = false;
              desc.contentEditable = false;

              name.style.border = "none";   
              desc.style.border = "none"; 
              btnElement.style.visibility = 'hidden'

              console.log(name, desc);

              handleUpdateTask(task.id,name.textContent, desc.textContent)

              // e.target.style.visibility = "hidden";
          }} id={`task-confirm-${task.id}`}  className="done-btn">
            <i className="material-icons">done</i>
          </div>
          <div id="more-info">
             <h5>Mark as done</h5>
             <input onChange={(e)=>{
              let completed;
              if(e.target.checked === false){
                handleUpdateCompletedTask(task.id, completed = false);
            }
              else{
                handleUpdateCompletedTask(task.id, completed = true);
              }
             }} type="checkbox" required />
          </div>
          <div className="task-status">
            {
              task.completed ? <h6 className="task-done">Done</h6> : <h6 className="task-incomplete">Incomplete</h6>
            }
          </div>
        </div>
      );
    });
  } else {
    taskList = <h1 id="tasks_alert">You do not have any tasks yet :(</h1>;
  }



  // *** TASKS CRUD OPERATIONS *** //


  // Deleting tasks;


  let handleDeleteTask = (id) => {
    fetch(`http://localhost:3000/projects/${projectId}/tasks/${id}`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    }).then((response) => {
      console.log(response.json())});
      window.location.reload()
  };


  // Updating tasks;


  let handleUpdateTask = (id,name,description,completed) => {
    let obj = {name,description,completed}
    fetch(`http://localhost:3000/projects/${projectId}/tasks/${id}`, {
      method: "PATCH",
      headers: {     
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token},
      body: JSON.stringify(obj)
    }).then((response) => {
      // window.location.reload();
      console.log(response.json())});
  };


  // Updating a project status to completed;


  let handleUpdateCompletedTask = (id,completed) => {
    let obj = {completed}
    fetch(`http://localhost:3000/projects/${projectId}/tasks/${id}`, {
      method: "PATCH",
      headers: {         
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token },
      body: JSON.stringify(obj)
    }).then((response) => {
      window.location.reload();
      console.log(response)}
      );
  };


  //*** LOG OUT USER ***//


  let[isLoggedOut, setIsLoggedOut] = useState(false)

  let handleLogOut = () => {
    fetch(`http://localhost:3000/logout`, {
      method: "DELETE",
      headers: {         
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token }
        }).then((response) => {
      if(response.ok){
      setIsLoggedOut(true)
    }
      else{
        alert("Error")
      }
      console.log(response)}
      );
  };


  // Redirect user to the login page when user LogsOut


  if(isLoggedOut){
    return <Redirect exact to = "/" />
  }



  return (
    <div className="col-body">
      <div className="row-nav">
        <div id="board-name-title">
          <h2 id="project-name">{projectName}</h2>
          <span>
          <i onClick={(e)=>{
            let nameElement = e.target.parentNode.previousSibling;
            let name = nameElement.textContent

            if(e.target.textContent === "edit"){
              toggleUpdateProjectForm()
            }
            else if(e.target.textContent === "done"){
              toggleUpdateProjectForm()
              handleUpdateProject(name)
            }

          }} id="project-edit-icon" className="material-icons">edit</i>
          <i onClick={()=>{
            handleProjectDelete()
          }} id="project-delete-icon" className="material-icons">delete</i>
          </span>
        </div>
        <h6 id="due-date">
          Due on : <span>{dueDate}</span>
        </h6>
        <div id="options-container">
          <div onClick={()=>{handleLogOut()}} id="logout-cont">
            <h3>Logout</h3>
          </div>
          <div className="hamburger ham-example-six">
            <div className="ham-container-six">
              <input type="checkbox" id="example-six-checkbox" />
              <div id="example-six-bar1" className="example-six-bar"></div>
              <div id="example-six-bar2" className="example-six-bar">
                <div id="bar-bar1"></div>
                <div id="bar-bar2"></div>
              </div>
              <div id="example-six-bar3" className="example-six-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="row-body">
        <div className="body-col">{taskList}</div>
      </div>
      <button
        onClick={() => {
          toggleTaskForm();
        }}
        id="add-task-btn"
      >
        <i className="material-icons">add</i>
      </button>
    </div>
  );
}

export default DashboardBody;
