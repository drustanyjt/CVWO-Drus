class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[destroy]
  def index
    users = User.all.order(created_at: :desc)
    render json: users 
  end

  def create
    # user = User.create!(user_params)
    if User.exists?(:name => params[:user][:name])
      render json: User.find_by(name: params[:user][:name])
    else
      user = User.create!(user_params)
      render json: user
      # render json: user.errors
    end
  end

  def read
    if User.exists?(:name => params[:user][:name])
    end 
  end

  def destroy
    @user&.destroy
    render json: { message: 'user deleted!'}
  end

  private
  def user_params
    params.require(:user).permit(:name)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
