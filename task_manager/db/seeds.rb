# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#some users
user_1 = User.create(name: "Jeff", email: "jeff@example.com", password: "1234567")
user_2 = User.create(name: "Ismahan", email: "ismahan@example.com", password: "1234567")


#some projects for each user
user_1.projects.create(name: "First Project", description: "Jeff's first project", due_date: 1.week.from_now, completed: false)
user_1.projects.create(name: "Second Project", description: "Jeff's second project", due_date: 2.weeks.from_now, completed: false)
user_2.projects.create(name: "Third Project", description: "Ismahan's first project", due_date: 3.weeks.from_now, completed: false)
user_2.projects.create(name: "Fourth Project", description: "Ismahan's second project", due_date: 4.weeks.from_now, completed: false)