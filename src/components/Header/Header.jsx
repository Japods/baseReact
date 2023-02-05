import React from "react";
import Routing from "../../router/collectionRoutes";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();

  return (
    <h1 className="header">
      {Routing.map((element, index) => {
        return (
          <div key={index} className="flex space-x-3">
            {element.children.map((data, i) => {
              return (
                <div
                  key={i}
                  onClick={() => navigation(data.path)}
                  className={data.name === "Details" ? "hidden" : "flex"}
                >
                  {data.name}
                </div>
              );
            })}
          </div>
        );
      })}
    </h1>
  );
}

export default Header;
