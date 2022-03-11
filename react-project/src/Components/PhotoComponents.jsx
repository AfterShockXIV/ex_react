import React from "react";
// import { APP_SETTING } from '../../../env';
import ApiController from "../Apis/ApiController";
import ListComponent from "../Utility/ListComponent";
import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import './Component.scss'
const PhotoComponents = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state)=>state.user)
  const getPhoto = async () => {
    setLoading(true);
    try {
      await ApiController.GetPhotos().then(async (res) => {
        if (res) {
          let photoR = await res.map((x) => ({
            ...x,
            name: x.title,
          }));
          await setData(photoR);
          await setLoading(false);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPhoto();
    console.log(userData)
  }, []);

  return (
    <div>
      {loading === true ? (
        <div className="sprash-container">
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        </div>
      ) : (
        <ListComponent data={data} />
      )}
    </div>
  );
};

export default PhotoComponents;
