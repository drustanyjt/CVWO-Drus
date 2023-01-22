class Api::V1::CommentsController < ApplicationController
  before_action :set_comment, only: %i[destroy]
  def index
    comments = Comment.all.order(created_at: :desc)
    render json: comments 
  end

  def create
    comment = Comment.create!(comment_params)
    if comment
      render json: comment
    else
      render json: comment.errors
    end
  end

  def show
    comments = Comment.where("discussion_id = ?", params[:discussion_id]).order(:created_at)
    render json: comments 
  end

  def destroy
    @comment&.destroy
    render json: { message: 'comment deleted!'}
  end

  private
  def comment_params
    params.require(:comment).permit(:text, :user_id, :discussion_id)
  end

  def set_comment
    @comment = Comment.find(params[:id])
  end
end
