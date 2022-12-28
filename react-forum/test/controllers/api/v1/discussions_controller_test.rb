require "test_helper"

class Api::V1::DiscussionsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_v1_discussions_index_url
    assert_response :success
  end

  test "should get create" do
    get api_v1_discussions_create_url
    assert_response :success
  end

  test "should get show" do
    get api_v1_discussions_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_v1_discussions_destroy_url
    assert_response :success
  end
end
