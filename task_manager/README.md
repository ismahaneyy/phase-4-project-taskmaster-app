# TASK MASTER API
- You can use this API alone:
  - https://task-master-app.onrender.com

## BDD(Behavior-Driven Development)

#### User

  - Signup 
    - When a user tries to sign up to the application, they shoild be able do do so given they fill the form as required.

  - login
    - When a user tries to log in to the application and they already have an account, then they should be able to do so if the email and password they enter matches.

  - logout
    - A user should be able to logout form this application.    

#### Projects
 - Add a Project
  - When a user clicks button "Add Project",
    - And the user fills in the project details And they click "Create Project"
    - Then they should see the new project in the project list

 - Edit Project
  -  When a user clicks on a project to edit,
    - And the user changes the project details
    - And the user clicks "Update Project"
    - Then I should see the updated project details in the project list

 - Delete a project
  -  When users clicks on a project to delete,
    - And they click  delete button
    - Then they should not see the deleted project in the project list   

#### Tasks
 - Add a task to a Project
  - When users click on a project to view its tasks,
    - And they click "Add Task"
    - And they fill in the task details
    - And they click "Create Task"
    - Then they should see the new task in the task list for that project
  - Edit Tasks
   - When users click on a project to view its tasks,
    - And they click on a task to edit
    - And they change the task details
    - And they click "Update Task"
    - Then they should see the updated task details in the task list for that project 

   - Delete Tasks
    - When users click on a project to view its tasks,
     - And they click on a task to delete
     - And they confirm the deletion
     - Then they should not see the deleted task in the task list for that project   
     
### Pseudocode

START

 POST /signup
- Once the user fills the sign up form,

Steps:
1. Validate presence of name, email, and password.
2. Validate email format and uniqueness.
3. Validate password length.
4. Create a new user with the provided name, email, and password.
5. Return success message or error message if validation fails.

 POST /login
- Once the user fills the log in form,

Steps:
1. Find user with the provided email.
2. Verify the provided password matches the stored password for the user.
3. Return success message with the access token or error message if login fails.

DELETE /logout
- Once a user clicks the button "Logout",

Steps:
1. Return success message if logout is successful or error message if logout fails.

GET /user/projects
- Once the user is authenticated,

Steps:
1. Find all projects associated with the authenticated user.
2. Return array of all projects for the user.

POST /user/projects
- Once the user is authenticated and fills the form,

Steps:
1. Validate presence of name and description.
2. Create a new project with the provided name, description, due date, and completed status.
3. Associate the project with the authenticated user.
4. Return success message or error message if validation fails.

PUT /user/projects/:id
- Once the user is authenticated and fills the form,

Steps:
1. Update the project with the provided name, description, due date, and completed status.
2. Return success message or error message if validation fails.

DELETE /user/projects/:id
- When an authenticated user wants to delte his/her projects, 

Steps:
1. Find the project with the provided id.
2. Delete the project.
3. Return success message or error message if project not found.


GET /projects/:project_id/tasks
- Once the user is authenticated,

Steps:
1. Find the project with the provided project_id.
2. Find all tasks associated with the project.
3. Return array of all tasks for the project.
 
POST /projects/:project_id/tasks
- Once the user is authenticated,

Steps:
1. Find the project with the provided project_id.
2. Create a new task associated with the project using the provided information.
3. Return details of the newly created task.

PUT /projects/:project_id/tasks/:task_id
- Once the user is authenticated,

Steps:
1. Find the project with the provided project_id.
2. Find the task with the provided task_id associated with the project.
3. Update the task using the provided information.
4. Return details of the updated task.

DELETE /projects/:project_id/tasks/:task_id

- Once the user is authenticated,

Steps:
1. Find the project with the provided project_id.
2. Find the task with the provided task_id associated with the project.
3. Delete the task.
4. Return a success message indicating the task has been deleted.

STOP

### Technologies Used
- Ruby on Rails
- ActiveRecord

### How to use
- Clone this repo to your local machine 
 - Run bundle or bundle install
 - rails db:migrate (to create migrations with activerecord)
 - rails db:seed(to seed the database)
  

## Endpoints

### User

#### Registering

    post  /signup

 A post request that saves the details of a new user to the database.It takes the following parameters:

- **name** 
    - The name of the user **must** be provided for the request to succeed.

- **email**
    - It **must** be provided for the request to succeed.
    - It should be unique among all records in the database.
    - It should have the following format:
        - It must have at least one character before the "@" symbol.

       - It must have at least one character after the "@" symbol, followed by a period (".") and at least one more character.
       - It cannot contain any whitespace characters (spaces, tabs, etc.) before or after the "@" symbol.
       - It cannot contain any special characters, such as square brackets, parentheses, or quotes, which are not normally allowed in email addresses.

- **password**
    - The password **must** be provided for the request to succeed.
    - It should contain a minimum of six characters.

#### Logging in

    post /login

A post request that logs in a user.It accepts the following parameters;
- **email**
- **password**

<i>The parameters above are subject to validations stated in the previous sign up section</i>

### Projects

#### Retrieving all projects

    get  /user/projects

Returns an array of all the projects of a logged in user in the format below:

```json
[
  {
    "id": 1,
    "name": "Porfolio Manager Web Application",
    "description": "A simple web application that helps you manage your online portfolio.",
    "due_date": "2022-01-01",
    "user_id": 1,
    "completed": false,
    "created_at": "2023-03-30T17:19:41.669Z",
    "updated_at": "2023-03-30T17:19:41.669Z"
  },
  {
    "id": 2,
    "name": "Recipehub",
    "description": "An online website for checking out different recipes.",
    "due_date": "2022-01-01",
    "user_id": 1,
    "completed": true,
    "created_at": "2023-03-30T17:19:43.048Z",
    "updated_at": "2023-03-30T17:19:43.048Z"
  }
]
```

#### Creating a new project

    post '/user/projects'

Creates a new project for a logged in user. it takes in the following parameters:

  - **name**
    - Must be provided.

  - **description**
    - Must be provided.
  - **due_date**
  - **completed**
    - Boolean

#### Updating a project

    put '/user/projects/:id

Updates a user's specific project accepting the specified parameters above.
<br/>
<br/>

#### Deleting a project


    delete '/user/projects/:id'

Deletes a user's specific project accepting the specified parameters above.
<br/>
<br/>

### Tasks

#### Retrieving all tasks


    get "/projects/:project_id/tasks"

Returns an array of a logged in user's tasks:


```json
[
  {
  "name" : "Job application",
  "description" : "Apply for a job.",
  "due_date" : "1-1-2022",
  "completed" : false
  },
  {
  "name" : "Feed the cat",
  "description" : "Get the cat some treats.",
  "due_date" : "1-1-2022",
  "completed" : true
  }
]
```
#### Creating new tasks


    post "/projects/:project_id/tasks"

Creates a new task in a project for a logged in user.It takes in the following parameters:

  - **name**
    - Must be provided.

  - **description**
    - Must be provided.
  - **due_date**
  - **completed**
    - Boolean

#### Updating a task

    patch "/projects/:project_id/tasks/:id"

Updates a user's specific project task accepting the specified parameters above.

#### Deleting a task

    delete "/projects/:project_id/tasks/:id"

Deletes a user's specific project task accepting the specified parameters above.
<br/>
<br/>

## Password Reset
<br/>
<br/>

    get '/password_reset/new'

This request takes in an email address parameter and sends the user an email containing a password reset token.
<br/>
<br/>

    put 'password_reset/create'

This request takes in the password reset token and the new password as parameters.If the password is successfully updated the user will receive an email confirming so.

Authors:

[Ismahan Abdirizak] (https://github.com/ismahaneyy)
[Jeff Maina] (https://github.com/Jeffy2k)
[Keittah Oyunga] (https://github.com/KeittahSewe)
[Ian Irungu] (https://github.com/i-muiri)


License

This project is licensed under the MIT License