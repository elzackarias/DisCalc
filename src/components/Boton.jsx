"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import md5 from "md5";

function Boton({ uid, initials }) {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const [mesa, setMesa] = useState(0);
  const [personas, setPersonas] = useState(0);
  const handleMesa = (e) => {
    setMesa(e.target.value);
  };
  const handlePersonas = (e) => {
    setPersonas(e.target.value);
  };
  const sendData = (e) => {
    e.preventDefault();
    if (mesa != 0 && personas != 0) {
      const data = {
        id: md5(Date.now()),
        personas: parseInt(personas),
        mesa: parseInt(mesa),
        uid: parseInt(uid),
        initials,
      };
      MySwal.fire({
        title: "Oops...",
        text: JSON.stringify(data),
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      //localStorage.setItem("favoriteNumber", 1);
    } else {
      MySwal.fire({
        title: "Oops...",
        text: "Rellena todos los campos 😬",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="col-md-5 mt-2">
      <form>
        <h4
          style={{ textAlign: "center", marginBottom: 5, fontWeight: "bold" }}
        >
          Paso 1
        </h4>
        <input
          type="text"
          id="mesa"
          onChange={handleMesa}
          className="form-control mb-2"
          placeholder="No. Mesa"
          autoComplete="off"
          autoFocus
        />
        <input
          type="number"
          className="form-control mb-2"
          min="1"
          id="personas"
          placeholder="No. Personas"
          autoComplete="off"
          onChange={handlePersonas}
        />
        <div className="d-grid gap-1">
          <button
            className="btn btn-primary"
            onClick={(e) => sendData(e)}
            type="button"
          >
            Aceptar
          </button>
          <button
            className="btn btn-secondary"
            onClick={(e) => cancel(e)}
            type="button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Boton;
