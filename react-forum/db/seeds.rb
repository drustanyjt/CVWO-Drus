# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
9.times do |i|
    Discussion.create([{
        title: "Discussion ##{i + 1}",
        author: "Johnny #{i + 1}",
        body: "I have a bunch of text for you to read",
        image: "",
    }])
end