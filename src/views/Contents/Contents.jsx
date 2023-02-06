// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../Store/Content/contentActions";
import { useLocation } from "react-router-dom";
import { setContent } from "../../Store/Content/content";

function Contents() {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.content.data);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoading(true);
    getContent()
      .then((response) => {
        dispatch(setContent(response.data.data.items));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        "cargando"
      ) : (
        <>
          <Slides items={data} />
        </>
      )}
    </div>
  );
}
{
  /* <ContentImage />; */
}
export default Contents;
