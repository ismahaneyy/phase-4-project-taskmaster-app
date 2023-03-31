# TASK MASTER API
- You can access the deployed site here:
  - https://task-master-app.onrender.com

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

