import React, { useState, useEffect } from "react";

import axios from "axios";
import consumerApi from "../../services/index.js";
import { useDispatch, useSelector } from "react-redux";
import GET_CONTENT from "../../Store/Content/contentActions.js";
import { setContent } from "../../Store/Content/content.js";
function Home() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const details = useSelector((state) => state.content);
  console.log(setContent, "setContent");

  // console.log(details, "vemoas que llea asi");
  // console.log(dispatch, "dispatch");

  // useEffect(() => {
  // consumerApi
  //   .getContent()
  //   .then((data) => {
  //     console.log(data.data, "content");
  //   })
  //   .catch((err) => console.log(err));
  // consumerApi
  //   .getImages()
  //   .then((image) => {
  //     console.log(image, "imagenes");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // consumerApi
  //   .getDetailsById()
  //   .then((data) => {
  //     console.log(data.data, "content");
  //   })
  //   .catch((err) => console.log(err));
  // }, [data]);

  useEffect(() => {
    if (!loading) {
      // setLoading(true);
      dispatch(setContent());
      //   .then(() => {
      //     setLoading(false);
      //   })
      //   .catch(() => {
      //     setLoading(false);
      //   });
    }
  }, [dispatch]);

  return (
    <div>
      {details.map((item) => (
        <p key={item._id}>{item.title}</p>
      ))}
    </div>
  );
}

export default Home;
