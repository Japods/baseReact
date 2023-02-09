import "./429.css";
function requestConsumer() {
  return (
    <div className="w-full flex justify-center items-center flex-col h-full">
      <div className="title-429">Waoo... Te consumiste las 60 Peticiones</div>
      <div className="subtitle-429">
        Para tener otras 60 siga los siguientes pasos:
      </div>
      <ul className="list-disc space-y-7">
        <li>Paso 1: Ingrese a la terminal de su sistema operativo</li>
        <li>
          Paso 2: Corra el comando:&nbsp;
          <span className="terminal-style">npm install -g vite</span>
          &nbsp; (Solamente si no tiene Vite instalado en su sistema operativo)
        </li>
        <li>
          Paso 3: Al finalizar la instalacion corra el comando:&nbsp;
          <span className="terminal-style">vite --port 3000</span>
        </li>
        <li>Paso 4: Corra el proyecto e ingrese al nuevo puerto</li>
      </ul>

      <div className="mt-10">
        Esto habilitara cambiara el puerto al que esta corriendo el proyecto
        <br /> y le consedera otras 60 peticiones por una Hora
      </div>
    </div>
  );
}

export default requestConsumer;
