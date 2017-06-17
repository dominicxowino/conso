require 'test_helper'

class ConsolataControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get schedule" do
    get :schedule
    assert_response :success
  end

  test "should get members" do
    get :members
    assert_response :success
  end

  test "should get gallary" do
    get :gallary
    assert_response :success
  end

  test "should get news" do
    get :news
    assert_response :success
  end

  test "should get downloads" do
    get :downloads
    assert_response :success
  end

end
