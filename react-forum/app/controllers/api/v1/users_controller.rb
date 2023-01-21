class Api::V1::UsersController < ApplicationController
  # before_action :set_discussion, only: %i[show destroy]
  def index
    comments = Comment.all.order(created_at: :desc)
    render json: comments 
  end

  def create
    discussion = Discussion.create!(discussion_params)
    if discussion
      render json: discussion
    else
      render json: discussion.errors
    end
  end

  def show
    render json: @discussion
  end

  def destroy
    @discussion&.destroy
    render json: { message: 'discussion deleted!'}
  end

  private
  def discussion_params
    params.require(:comment).permit(:text, :user_id, :discussion_id)
  end

  def set_discussion
    @discussion = Discussion.find(params[:id])
  end
end
