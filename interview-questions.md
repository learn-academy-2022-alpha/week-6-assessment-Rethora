# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: You would have to create a migration file using rails generate command. You would then open the migration file and add this line of code: 'add_column :students, :cohort_id, :integer'. Then you would run a 'db:migrate' command. This allows you to modify the database table of students adding a column for cohort_id of type integer. This would be your foreign key. You use cohort_id because it would be a foreign key to the cohort table. The foreign key would be on the student model.

  Researched answer: Rails migrations can be used to change the shape of an existing database. When generating your migration file, you should give it a descriptive name using snake_case or PascalCase while staying consistent with this naming convention. You generate migration files in your terminal and modify the migration file in your text editor.

2. Which RESTful routes must always be passed params? Why?

  Your answer: The create, show, update and the destroy RESTful routes must be passed params for the method to know what piece of data to work with or add to the database. Say we want to update a user's data in the database, we would need to know what user id to work with in order to accurately target what row in the database to update. The id of the user and the new data can be passed through url parameters. A little differently then how we would pass params for a create method. Those params would be passed through the body of the request. However, the create RESTful route would still need those parameters to know what to put in the database.

  Researched answer: The RESTful routes that require params are the routes that require working with a piece of data in the database. The create, show, update and destroy RESTful routes either create a database entry, update/delete a database entry, or show a form for a database entry. These need params because the server needs to know what piece of data to get/add from the database. This way we can query results from our database with the primary key.

3. Name three rails generator commands. What is created by each?

  Your answer: Three rails generator commands include resource, model and controller. When you generate a resource, it makes the model, views, controller and routes for you. If you don't use resource, you have to do everything manually.This includes generating your model, your controller and making your routes. When you generate a model, it shapes the entries that go into the database and specifies what the column name is and what type of data is excepted for the value. When you generate a controller, the controller and the views folder is created. The controller handles the logic of what to do with incoming requests to your server. The views display what the user will see on their requests. The controller can pass data to the views to display information from the database.

  Researched answer: When using a rails generate model command for the first time, a new file inside app/models will be created for the model class. It also creates a database schema. The rails generate controller command will a folder inside of app/views where you will put your html.erb files and is what the user sees. It will also create a file inside app/helpers that will handle the connection between your routes, views and controller. The last thing that is created from this command is a file inside app/assets/stylesheets. This will be a SCSS file that can be used to style your view page.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students
A get request to /students would be handled by the index method. It will get all the current students in the database.

action: "POST"   location: /students
A post request to /students would be handled by the create method. The controller would make a new entry in the database with whatever valid params are passed to it via the request body.

action: "GET"    location: /students/new
A get request to /students/new would be handled by the new method. The new method will show a form for the user to create a new student in the database.

action: "GET"    location: /students/2  
A get request to /students/2 would be handled by the show method. The show method will get the user in the database with the id of 2 and show it to the user.

action: "GET"    location: /students/2/edit
A get request to /students/2/edit would be handled by the edit method. It will show a form to the user for them to edit the student in the database with the id of 2.

action: "PATCH"  location: /students/2
A patch request to /students/2 will be handled by the update method. The update method will update the student with the id of 2 to whatever valid params were passed through the request body.

action: "DELETE" location: /students/2
A delete request to /students/2 will be handled by the delete method and delete the student with the id of 2 from the database.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, I can create a new item for my to do list.
As a user, when I create a new to do item: I am required to give it a name.
As a user, when I create a new to do item: I can optionally give it a description.
As a user, when I create a new to do item: I can give it a priority level.
As a user, when I create a new to do item: I can add a time for when it should be completed by.
As a user, when I create a new to do item: I see that it has a default status of incomplete.
As a user, I can mark an item's status as completed on my to do list.
As a user, I can see all the current existing items on my to do list.
As a user, I can edit an existing item on my to do list.
As a user, I can completely remove an item from my to do list.
