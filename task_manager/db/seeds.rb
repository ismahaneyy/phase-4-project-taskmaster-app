jeff = User.create(name: 'jeff', email:"jeff@gmail.com", password: "123455")

project = Project.create(name: "project one", description: "random description to check validations", due_date: "2013", completed: true, user_id: 8) 


# task1 = Task.create(name: "task one", description: "random description to check validations", due_date: "2013", user_id: jeff.id, project_id: project.id)
# task2 = Task.create(name: "task two", description: "random description to check validations", due_date: "2013", user_id: jeff.id, project_id: project.id)
# task3 = Task.create(name: "task three", description: "random description to check validations", due_date: "2013", user_id: jeff.id, project_id: project.id)
# task4 = Task.create(name: "task four", description: "random description to check validations", due_date: "2013", user_id: jeff.id, project_id: project.id)
# task5 = Task.create(name: "task five", description: "random description to check validations", due_date: "2013", user_id: jeff.id, project_id: project.id)