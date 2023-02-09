import React from "react";
import Disconnect from "../../assets/Image/Disconnet.png";
import Button from "../../components/Button/Button";
import "./403.css";

function CorsError() {
  const goPage = (value) => {
    window.open(value, "_blank");
  };
  return (
    <div className="flex justify-between p-10">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="title-403">Oooops...</h1>
          <h2 className="subtitle-403">No tienes Permiso</h2>

          <p className="text-description">
            Disculpa, pero no tienes permisos para acceder.
            <br /> Activa un Servidor temporal para que tengas acceso a 60
            Peticiones
          </p>
        </div>

        <div className="mt-10">
          <Button
            label="Activar"
            action={() =>
              goPage("https://cors-anywhere.herokuapp.com/corsdemo")
            }
          />
        </div>
      </div>
      <img src={Disconnect} alt="" />
      <div className="flex flex-col">
        <span className="number-403">4</span>
        <span className="number-403">0</span>
        <span className="number-403">3</span>
      </div>
    </div>
  );
}

export default CorsError;
