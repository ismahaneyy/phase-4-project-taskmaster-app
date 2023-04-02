import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import DashboardBody from "./dashboardbody";
import NewBoardForm from "./newboardform";

function Dashboard() {

  // Retrieve the token from local storage

  const token = localStorage.getItem("jwt");


  // Task states

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  let handleName = (value) => {
    setName(value);
  };
  let handleDescription = (value) => {
    setDescription(value);
  };
  let handleDueDate = (value) => {
    setDueDate(value);
  };
  let handleCompleted = (value) => {
    if (value === "Not yet") setCompleted(false);
    else if (value === "Yes") {
      setCompleted(true);
    }
  };


  // Adding Tasks CRUD operation;


  let handleAddingTasks = () => {

    setAddedProject(true);

    let taskobj = {
      name,
      description,
      due_date: dueDate,
      completed,
    };

    fetch(`http://localhost:3000/projects/${projectId}/tasks`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token},
      body: JSON.stringify(taskobj),
    }).then((response) => {
      if (response.ok === true) {
            toggleTaskForm();
            setProjectId();
            window.location.reload();
            setAddedProject(false);
            handleNotifs("board-success-notification");
        } else if (!response.ok) {
            setAddedProject(false);
            return response.json().then((error) => {
            let errorMessage = error.error[0];
            handleNotifs("board-error-notification", errorMessage);
          });
      }
    });
  };


  //*** CRUD FORMS ***//   


  // TOGGLE PROJECT FORM VISIBILITY;   


  const [isAddBoardFormActive, setAddBoardFormActive] = useState(false);

  let toggleAddBoardForm = () => {
    if (!isAddBoardFormActive) {
      document.getElementById("add-board-form").style.zIndex = "99999";
      setAddBoardFormActive(true);
    } else {
      document.getElementById("add-board-form").style.zIndex = "-1";
      setAddBoardFormActive(false);
    }
  };



  // TOGGLE TASK FORM VISIBILITY;


  const [isAddTaskFormActive, setAddTaskFormActive] = useState(false);

  let toggleTaskForm = () => {
    if (!isAddTaskFormActive) {
      document.querySelector("#add-task-form").style.zIndex = "999";
      setAddTaskFormActive(true);
    } else {
      document.getElementById("add-task-form").style.zIndex = "-1";
      setAddTaskFormActive(false);
    }
  };


  // *** PROJECT CRUD OPERATIONS  ***//


  // NEW PROJECT CREATION;

  const [boardName, setBoardName] = useState("");
  const [boardDescription, setBoardDescription] = useState("");
  const [boardDueDate, setBoardDueDate] = useState("");
  const [boardCompleted, setboardCompleted] = useState("");

  let handleBoardCompleted = (value) => {
    if (value === "Not yet") setboardCompleted(false);
    else if (value === "Yes") {
      setboardCompleted(true);
    }
  };


  // ADDING PROJECTS;


  const [addedProject, setAddedProject] = useState(false);

  let handleBoardName = (obj) => {
    setAddedProject(true);

    console.log(obj);

    fetch("http://localhost:3000/user/projects", {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token },
      body: JSON.stringify(obj),
    }).then((response) => {
      if (response.ok === true) {
        toggleAddBoardForm();
        setAddedProject(false);
        window.location.reload();
        let newBoard = document.createElement("div");

        let icon = document.createElement("i");
        icon.classList = "material-symbols-outlined";
        icon.innerHTML = "view_kanban";

        let name = document.createElement("h5");
        name.innerHTML = `${boardName}`;

        newBoard.classList = "board";
        newBoard.appendChild(icon);
        newBoard.appendChild(name);

        document.querySelector(".boards-list").appendChild(newBoard);
        setBoardName("");
        handleNotifs("board-success-notification");
      } else if (!response.ok) {
        setAddedProject(false);
        return response.json().then((error) => {
          console.log(error.errors[0]);
          let errorMessage = error.errors[0];
          handleNotifs("board-error-notification", errorMessage);
        });
      }
    });
  };


  // DELETING PROJECTS;


  let handleProjectDelete = () => {
    fetch(`http://localhost:3000/user/projects/${projectId}/`, {
      method: "DELETE",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token},
    }).then((response) => {
      if (response.ok) {
        handleNotifs(
          "board-success-notification",
          "Project deleted successfully"
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };


  // UPDATING PROJECTS ;


  let [defaultProjectValues, setDefaultProjectValues] = useState({});

  // Default project values incase they are not specified / updated ;

  let defaultProjectName;
  let defaultProjectDescription;
  let defaultProjectDueDate;
  let defaultProjectCompleted;

  if (defaultProjectValues) {
    defaultProjectName = defaultProjectValues["name"];
    defaultProjectDescription = defaultProjectValues["description"];
    defaultProjectDueDate = defaultProjectValues["due_date"];
    defaultProjectCompleted = defaultProjectValues["completed"];
  }

  let handleUpdateProject = (value) => {
    setAddedProject(true);
    console.log(defaultProjectValues);

    let updatedProjectObj = {
      name: value.name || defaultProjectName,
      description: value.description || defaultProjectDescription,
      due_date: value.due_date || defaultProjectDueDate,
      completed: value.completed || defaultProjectCompleted,
    };
    fetch(`http://localhost:3000/user/projects/${projectId}/`, {
      method: "PUT",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token},
      body: JSON.stringify(updatedProjectObj),
    }).then((response) => {
      if (response.ok) {
        setAddedProject(false);

        handleNotifs(
          "board-success-notification",
          "Project updated successfully"
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    });
  };

  let transferValues = (project) => {
    console.log(project);
    setDefaultProjectValues(project);
  };


  // Toggle visibility of form for updating a project ;


  const [isUpdateFormActive, setUpdateFormActive] = useState(false);

  let toggleUpdateProjectForm = () => {
    if (!isUpdateFormActive) {
      document.querySelector("#update-project-form").style.zIndex = "999";
      setUpdateFormActive(true);
    } else {
      document.getElementById("update-project-form").style.zIndex = "-1";
      setUpdateFormActive(false);
    }
  };


  // Notification Handling // *let's see


  let handleNotifs = (id, notifMessage) => {
    setTimeout(() => {
      document.querySelector(`#${id}`).classList.remove("inactive");
      document.querySelector(`#${id}`).classList.add("active");
    }, 0);

    setTimeout(() => {
      document.querySelector(`#${id}`).classList.add("inactive");
      document.querySelector(`#${id}`).classList.remove("active");
    }, 3000);

    if (notifMessage) {
      document.querySelector(`#${id}`).innerHTML = "";
      document.querySelector(`#${id}`).innerHTML = notifMessage;
    }
  };


  /*remove error using close icon*/


  let removeNotifications = (id) => {
    let elemClass = document.querySelector(`#${id}`).classList[1];

    if (elemClass === "active") {
      document
        .querySelector(`#project-error-message`)
        .classList.remove("active");
      document
        .querySelector(`#project-error-message`)
        .classList.add("inactive");
    }
  };


  // Retrieving all projects from database;
  

  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:3000/user/projects", {
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
     }
    })
      .then((response) => response.json())
      .then((data) => {
        let projects = Array.from(data[0])
        console.log(projects)
        setProjects(data);
        console.log(data[0]);
      });
  }, []);


  let handleId = (id) => {
    console.log(id);
    setProjectId(id);
  };


  //  Creates an element for each project ;


  let projectsList;
  if (projects.length > 0) {
    {
      projectsList = projects.map((project) => {
        return (
          <div
            onClick={() => {
              handleId(project.id);
            }}
            className="board"
          >
            <i className="material-symbols-outlined">view_kanban</i>
            <h5>{project.name}</h5>
          </div>
        );
      });
    }
  } else {
    projectsList = <h5 id="projects_alert">You have no projects yet :(</h5>;
  }

  return (
    <div id="dashboard-container">
      <div id="side-nav" className="col-nav">
        <div className="row-logo">
          <h1>
            taskMaster<span>.</span>
          </h1>
        </div>
        <div className="row-boards">
          <h5>ALL Projects ({projects.length})</h5>
          <div className="boards-list">{projectsList}</div>
          <div
            onClick={() => {
              toggleAddBoardForm();
            }}
            className="add-board"
          >
            <i className="material-symbols-outlined">add</i>
            <h5>Create New Project</h5>
            <i id="create-arrow" className="material-icons">
              arrow_forwards
            </i>
          </div>
        </div>
        <div className="row-settings">
          <div id="theme-container">
            <i className="material-icons">dark_mode</i>
          </div>
        </div>
      </div>
      <DashboardBody
        toggleUpdateProjectForm={toggleUpdateProjectForm}
        handleUpdateProject={handleUpdateProject}
        handleProjectDelete={handleProjectDelete}
        projectId={projectId}
        toggleTaskForm={toggleTaskForm}
        transferValues={transferValues}
      />
      {/* add board popup */}
      <NewBoardForm
        toggleAddBoardForm={toggleAddBoardForm}
        handleBoardName={handleBoardName}
        setBoardDescription={setBoardDescription}
        boardDescription={boardDescription}
        setBoardName={setBoardName}
        boardName={boardName}
        setBoardDueDate={setBoardDueDate}
        boardDueDate={boardDueDate}
        boardCompleted={boardCompleted}
        handleBoardCompleted={handleBoardCompleted}
      />
      <div id="board-status-messages">
        <div className="notification inactive" id="board-success-notification">
          <h4 id="project-error-message">Board created successfully</h4>
          <i
            onClick={() => {
              removeNotifications("board-success-notification");
            }}
            className="material-icons"
          >
            {" "}
            close{" "}
          </i>
        </div>
        <div className="notification inactive" id="board-error-notification">
          <h4 id="project-error-message"></h4>
          <i
            onClick={() => {
              removeNotifications("board-error-notification");
            }}
            className="material-icons"
          >
            {" "}
            close{" "}
          </i>
        </div>
      </div>

      <div
        onClick={(e) => {
          toggleTaskForm();
        }}
        className="crud-form"
        id="add-task-form"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <i
            onClick={() => {
              toggleTaskForm();
            }}
            id="form-close-icon"
            className="material-icons"
          >
            close
          </i>
          <h3 className="dash-form-title">Add New Task</h3>
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                handleName(e.target.value);
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={name}
            />
            <label className="dash-form-label">Name</label>
          </div>{" "}
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                handleDescription(e.target.value);
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={description}
            />
            <label className="dash-form-label">Description</label>
          </div>
          <div className="dash-form-group">
            <label className="dash-label-normal">Due date</label>
            <br />
            <br />
            <input
              onChange={(e) => {
                handleDueDate(e.target.value);
              }}
              id="board-name-input"
              type="date"
              placeholder="..."
              value={dueDate}
            />
          </div>
          <div className="dash-form-group">
            <label className="dash-label-normal">Completed</label>
            <select
              onChange={(e) => {
                handleCompleted(e.target.value);
              }}
            >
              <option>Not yet</option>
              <option>Yes</option>
            </select>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddingTasks();
            }}
            className="dash-form-button"
          >
            Add New Task
          </button>
        </form>
      </div>

      <div
        onClick={(e) => {
          toggleUpdateProjectForm();
        }}
        className="crud-form"
        id="update-project-form"
      >
        <form
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <i
            onClick={() => {
              toggleUpdateProjectForm();
            }}
            id="form-close-icon"
            className="material-icons"
          >
            close
          </i>
          <h3 className="dash-form-title">Update Project</h3>
          <div className="dash-form-group">
            <input
              onChange={(e) => {
                setBoardName(e.target.value);
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={boardName}
            />
            <label className="dash-form-label">Title</label>
          </div>

          <div className="dash-form-group">
            <input
              onChange={(e) => {
                setBoardDescription(e.target.value);
              }}
              id="board-name-input"
              type="text"
              placeholder="..."
              value={boardDescription}
            />
            <label className="dash-form-label">Description</label>
          </div>

          <div className="dash-form-group">
            <input
              onChange={(e) => {
                setBoardDueDate(e.target.value);
              }}
              id="board-name-input"
              type="date"
              placeholder="..."
              value={boardDueDate}
            />
            <label className="dash-form-label">Description</label>
          </div>

          <div className="dash-form-group">
            <label className="dash-label-normal">Completed</label>
            <select
              onChange={(e) => {
                handleBoardCompleted(e.target.value);
              }}
            >
              <option>Not yet</option>
              <option>Yes</option>
            </select>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleUpdateProject({
                name: boardName,
                description: boardDescription,
                due_date: boardDueDate,
                completed: boardCompleted,
              });
            }}
            className="dash-form-button"
          >
            Add
          </button>
        </form>
      </div>

      {addedProject && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
