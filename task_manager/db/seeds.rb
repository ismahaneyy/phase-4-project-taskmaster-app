# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create some users
user_1 = User.create(name: "Jeff", email: "Jeff@example.com", password: "password")
user_2 = User.create(name: "Ismahan", email: "Ismahan@example.com", password: "password")

# Create some projects for each user
project1 = Project.create(name: "First Project", description: "Jeff's first project", due_date: 1.week.from_now, completed: false, user_id: user_1.id)
project2 = Project.create(name: "Second Project", description: "Jeff's second project", due_date: 2.weeks.from_now, completed: false, user_id: user_1.id)
project3 = Project.create(name: "Third Project", description: "Ismahan's first project", due_date: 3.weeks.from_now, completed: false, user_id: user_2.id)
project4 = Project.create(name: "Fourth Project", description: "Ismahan's second project", due_date: 4.weeks.from_now, completed: false, user_id: user_2.id)
