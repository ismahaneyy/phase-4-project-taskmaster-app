# Create Users
user1 = User.create!(name: 'Jefff', email: 'jefff@user.com', password: '1234567')
user2 = User.create!(name: 'Ismahann', email: 'ismahann@user.com', password: '1234567')

# Create Projects for user1
project1 = Project.create!(name: 'My Portfolio', description: 'My portfolio app', completed: false, due_date: Date.today + 1.week, user_id: user1.id)
project2 = Project.create!(name: 'Project Manager',description: 'My Project Manager app', completed: true, due_date: Date.today + 2.weeks, user_id: user1.id)

# Create Projects for user2
project3 = Project.create!(name: 'Todo App',description: 'My Todo app', completed: false,  due_date: Date.today + 3.weeks, user_id: user2.id)
project4 = Project.create!(name: 'Movie App',description: 'My Movie app', completed: false,  due_date: Date.today + 4.weeks, user_id: user2.id)

# Create Tasks for project1
task1 = Task.create!(name: 'Task 1 for My Portfolio', description: 'This is the first task for My Portfolio', completed: false, project_id: project1.id, due_date: Date.today + 1.week, user_id: user1.id)
puts "Created task #{task1.id}"
task2 = Task.create!(name: 'Task 2 for My Portfolio', description: 'This is the second task for My Portfolio', completed: true, project_id: project1.id, due_date: Date.today + 2.weeks, user_id: user1.id)
task3 = Task.create!(name: 'Task 3 for My Portfolio', description: 'This is the third task for My Portfolio', completed: false, project_id: project1.id, due_date: Date.today + 3.weeks, user_id: user1.id)

# Create Tasks for project2
task4 = Task.create!(name: 'Task 1 for Project Manager', description: 'This is the first task for Project Manager', completed: false, project_id: project2.id, due_date: Date.today + 4.weeks, user_id: user1.id)
task5 = Task.create!(name: 'Task 2 for Project Manager', description: 'This is the second task for Project Manager', completed: false, project_id: project2.id, due_date: Date.today + 5.weeks, user_id: user1.id)
task6 = Task.create!(name: 'Task 3 for Project Manager', description: 'This is the third task for Project Manager', completed: true, project_id: project2.id, due_date: Date.today + 6.weeks, user_id: user1.id)

# Create Tasks for project3
task7 = Task.create!(name: 'Task 1 for Todo App', description: 'This is the first task for Todo App', completed: false, project_id: project3.id, due_date: Date.today + 7.weeks, user_id: user2.id)
task8 = Task.create!(name: 'Task 2 for Todo App', description: 'This is the second task for Todo App', completed: true, project_id: project3.id, due_date: Date.today + 8.weeks, user_id: user2.id)
task9 = Task.create!(name: 'Task 3 for Todo App', description: 'This is the third task for Todo App', completed: false, project_id: project3.id, due_date: Date.today + 9.weeks, user_id: user2.id)
task10 = Task.create!(name: 'Task 1 for Movie App', description: 'This is the first task for Movie App', completed: false, project_id: project4.id, due_date: Date.today + 10.weeks, user_id: user2.id)
task11 = Task.create!(name: 'Task 2 for Movie App', description: 'This is the second task for Movie App', completed: false, project_id: project4.id, due_date: Date.today + 11.weeks, user_id: user2.id)
task12 = Task.create!(name: 'Task 3 for Movie App', description: 'This is the third task for Movie App', completed: true, project_id: project4.id, due_date: Date.today + 12.weeks, user_id: user2.id)

puts "Created users, projects and tasks successfully!"
