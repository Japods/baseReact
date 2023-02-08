import { getImage } from "../../Store/Image/imageAction";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setImage } from "../../Store/Image/image";

function Images({ id, type }) {
  const dispatch = useDispatch();
  const image = useSelector((state) => state.image.image);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const body = {
      id: "5c0a702daf9115001518f694",
      type: "square",
      scale: "25",
      placeholder: true,
    };
    getImage(body)
      .then((response) => {
        dispatch(setImage(response));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <img src={image} />;
}

export default Images;
