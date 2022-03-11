import { Component } from "react";
import { APP_SETTING } from "../../env";
import axios from "axios";
class ApiController extends Component {
  static GetPosts = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.POST,
        method: "GET",
      });
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  static GetComments = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.COMMENTS,
        method: "GET",
      });
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  static GetAlbums = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.ALBUMS,
        method: "GET",
      });
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  static GetPhotos = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.PHOTOS,
        method: "GET",
      });
     
      return result.data;

    } catch (error) {
      console.log(error.message);
    }
  };

  static GetTodos = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.TODO,
        method: "GET",
      });
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };

  static GetUsers = async () => {
    try {
      const result = await axios({
        url: APP_SETTING.DEV.WEBS_CONFIG.USERS,
        method: "GET",
      });
      return result.data;
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default ApiController;
