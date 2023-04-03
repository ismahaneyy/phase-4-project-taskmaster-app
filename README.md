# phase-4-project-taskmaster-app

# phase-4-project-taskmaster-app

You can access the deployed site here:
   - [https://client-bjda8yc9i-ismahaneyy.vercel.app/]

## BDD (Behavior-Driven Development)
### User

1. Signup
As a new user, I want to create an account on the application so that I can access its features.
Given that I am on the Signup page
Then I should see the Signup form with input fields for name, email, password, and confirm password
When I fill out the Signup form with valid information, including a unique email address and a password that meets the application's password requirements
And I click the "Sign up" button
Then I should be redirected to the Login page with a success message indicating that my account has been created
And I should receive a confirmation email to the email address I provided
When I try to sign up with an email address that is already registered in the application
Then I should see an error message indicating that the email address is already taken
And when I try to sign up with a password that does not meet the application's password requirements
Then I should see an error message indicating the password requirements and be asked to try again.

2. Login

When a user navigates to the login page
Then they should see the login form
When a user fills out the login form with valid information
And they click the "Login" button
Then they should be redirected to the dashboard page
When a user fills out the login form with invalid information
And they click the "Login" button
Then they should see an error message indicating what went wrong

3. Logout

When a user clicks the "Logout" button
Then they should be logged out and redirected to the login page

#### Dashboard
1. View Projects

When a user navigates to the dashboard page
Then they should see a list of their projects
When a user clicks on a project from the project list
Then they should be redirected to the project detail page

2. Add Project

When a user clicks the "Add Project" button
Then they should be redirected to the add project page
When a user fills out the add project form with valid information
And they click the "Submit" button
Then they should be redirected back to the dashboard page with the new project added to the project list
When a user fills out the add project form with invalid information
And they click the "Submit" button
Then they should see an error message indicating what went wrong

3. Edit Project

When a user clicks on a project from the project list
Then they should be redirected to the project detail page
When a user clicks the "Edit" button on the project detail page
Then they should be redirected to the edit project page
When a user fills out the edit project form with valid information
And they click the "Submit" button
Then they should be redirected back to the project detail page with the project details updated
When a user fills out the edit project form with invalid information
And they click the "Submit" button
Then they should see an error message indicating what went wrong

4. Delete Project

When a user clicks the "Delete" button on a project from the project list
Then they should see a confirmation modal
When a user clicks the "Confirm" button on the confirmation modal
Then the project should be deleted from the project list
Project Detail

5. View Tasks

When a user clicks on a project from the project list
Then they should be redirected to the project detail page
When a user navigates to the project detail page
Then they should see a list of tasks for that project

6. Add Task

When a user clicks the "Add Task" button on the project detail page
Then they should be redirected to the add task page
When a user fills out the add task form with valid information
And they click "Create Task"
Then they should see the new task in the task list for that project

7. Edit Task

When a user clicks on a project from the project list
Then they should be redirected to the project detail page
When a user clicks on a task to edit
Then they should be redirected to the edit task page
When a user fills out the edit task form with valid information
And they click "Update Task"
Then they should see the

## Pseudocode
1. When the user fills in the signup form:

    - Check that the name, email, and password fields are not empty
    - Check that the email is valid and unique
    - Check that the password meets minimum length requirements
    - Create a new user with the provided information
    - Return a success message or an error message if validation fails

2. When the user fills in the login form:

    - Find the user with the provided email
    - Verify that the provided password matches the stored password for the user
    - Return a success message with an access token or an error message if login fails

3. When the user clicks the "Logout" button:

    - Logout the user
    - Return a success message or an error message if logout fails

4.  When an authenticated user wants to view their projects:
    - Find all projects associated with the authenticated user
    - Return an array of all projects for the user

5. When an authenticated user fills in the "Add Project" form:

    - Check that the name and description fields are not empty
    - Create a new project with the provided information
    - Associate the project with the authenticated user
    - Return a success message or an error message if validation fails

6. When an authenticated user clicks on a project to edit:

    - Find the project with the provided ID
    - Update the project with the new information
    - Return a success message or an error message if validation fails

7. When an authenticated user clicks on a project to delete:

    - Find the project with the provided ID
    - Delete the project
    - Return a success message or an error message if project not found

8. When an authenticated user wants to view the tasks for a project:

    - Find the project with the provided ID
    - Find all tasks associated with the project
    - Return an array of all tasks for the project

9. When an authenticated user fills in the "Add Task" form:

    - Find the project with the provided ID
    - Create a new task associated with the project using the provided information
    - Return details of the newly created task

10. When an authenticated user clicks on a task to edit:

    - Find the project with the provided ID
    - Find the task with the provided ID associated with the project
    - Update the task with the new information
    - Return details of the updated task

11. When an authenticated user clicks on a task to delete:
    - Find the project with the provided ID
    - Find the task with the provided ID associated with the project
    - Delete the task
    - Return a success message indicating the task has been deleted.

### Description

##### Authentication
To use the app, you'll need to create an account on the Task Master API or use an existing account. Once you have an account, you can log in using the app.

##### Projects
After logging in, you'll be taken to the Projects page, where you can view a list of all your projects. To add a new project, click the "Add Project" button and fill in the form. To edit or delete an existing project, click the corresponding button on the project card.

#### Tasks
To view the tasks for a particular project, click the project card to go to the project detail page. Here you can view a list of all tasks for that project, add a new task, or edit or delete an existing task.

##### Technologies used
This app was built using the following technologies:

React
React Router
Axios

## Authors:

[Ismahan Abdirizak] [https://github.com/ismahaneyy]
[Jeff Maina] [https://github.com/Jeffy2k]
[Keittah Oyunga] [https://github.com/KeittahSewe]
[Ian Irungu] [https://github.com/i-muiri]


## License

This project is licensed under the MIT License
