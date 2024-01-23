import React from "react";
import { cookies } from "next/headers";
async function getProfile() {
  const res = await fetch("http://localhost:3000/api/perfil", {
    method: "GET",
    headers: { Cookie: cookies().toString() },
  });
  const data = await res.json();
  console.log(data);
  return data.payload;
}

function obtenerFechaFormateada() {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const dias = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ];

  const fechaActual = new Date();
  const diaSemana = dias[fechaActual.getDay()];
  const dia = fechaActual.getDate();
  const mes = meses[fechaActual.getMonth()];
  const año = fechaActual.getFullYear();

  return `${diaSemana} ${agregarCeros(dia)} de ${mes} del ${año}`;
}

function agregarCeros(numero) {
  return numero < 10 ? `0${numero}` : numero;
}

//const dataPromise = getProfile();
async function Msg({name}) {
  var fec = new Date()
  return (
    <div>
      <h5 className="mb-0 mt-1">Hola {name}! <span className="float-end">{obtenerFechaFormateada()}</span></h5>
    </div>
  );
}

export default Msg;
