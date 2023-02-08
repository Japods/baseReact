import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getContentByIdFetch } from "../Fetch/index";

function ContentDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const element = useSelector((state) => state.content.element);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getContentByIdFetch(id, dispatch, setLoading);
  }, [dispatch]);
  return (
    <div>
      {" "}
      {loading ? (
        "Cargando"
      ) : (
        <div
          style={{
            background: "#ff00004b",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="position-des-title space-y-5 ml-10">
            <h2 className="title-image">{element.title.original}</h2>
            <p className="description-image">
              {element.description.plain.original}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentDetails;
