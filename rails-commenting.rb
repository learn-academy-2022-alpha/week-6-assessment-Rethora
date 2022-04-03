# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPostsController is a class that extends the parend class of ApplicationController that was generated from a rails command. This class will handle logic for routes dealing with the blogposts table in the database.
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # In this index method, the instance variable of posts is being assigned to all the records that currently exist in the blogposts table. BlogPost is a class for the model and .all is an ActiveRecord query that is retrieving all the entries. @posts is an array of all the records that can now be refrenced in the view file and looped over to display it to the user.
    @posts = BlogPost.all
  end

  # ---3)
  # The show method is for a single view of data. The show method needs a parameter of an id, so we can make an active record query to find that piece of data by the primary key.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method will show a view for a form. The form will be for the user to input values into the designated fields. We can use BlogPost.new to create an empty hash that we will be able to assign values to from the user's input of the form.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # The create method will take the params from the request's body and pass them to the strong params method. The strong params method will ensure that only the parameters we want are permitted. This is an additional security measure that makes sure someone can't access anything in the database we don't want them to. The strong params methods are private so they can not be called anywhere outside of the class that they are defined in. If the row was successfully created, the user will be redirected to blog post that they just created, otherwise they will be redirected to the page where they will create one.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # In this edit method, the blog post is being found by the id that was passed as a parameter and being assigned to the instance variable of post. This method will show a form where the user will be able to edit an existing entry in the database. We can use this instance variable to display a form for the user to interact with.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # In this update method, the post with the id of the parameter is being updated in the database after being permited by the strong params method. If the update was a success, the user is redirected to the url where they can view their new post, otherwise they will be redirected to the url where they can update the post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # In this destroy method, the if statement is checking that the post was successfully deleted and if so, the user is redirected to the url where all the posts are shown. The else statement is if the blog post was not successfully deleted and the user is being redirected to that url where they can see the post they tried to delete.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # The private keyword makes this method only accessible by the class it was defined in. Meaning if you were in instantiate a BlogPostsController class and assign it to a variable and try to call the method blog_post_params, you would not be able to. This is to ensure protection of sensitive code from executing places where it is not supposed to be.
  private
  def blog_post_params
    # ---10)
    # In this strong params method, the blog_post model is being required and only permiting/allowing attributes of title and content from the requests. This increases security of data that is being sent through requests/forms. 
    params.require(:blog_post).permit(:title, :content)
  end
end
