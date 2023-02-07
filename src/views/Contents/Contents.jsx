// import React from "react";
import Slides from "../../components/Slides/Slides";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "../../Store/Content/contentActions";
import { setContent } from "../../Store/Content/content";
import ContentImage from "./ContentImage";

function Contents() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.content.data);
  const [loading, setLoading] = useState(true);

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
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "cargando"
      ) : (
        <>
          <Slides items={data} />
          <ContentImage />
        </>
      )}
    </div>
  );
}
{
}
export default Contents;
