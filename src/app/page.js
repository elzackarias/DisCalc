"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [arrs, setArrs] = useState({
    arrA: "",
    arrB: "",
  });

  const [union,setUnion] = useState("∅");

  const handleChange = (e) => {
    // Usamos el argumento prevArrs en lugar de prevState
    setArrs((prevArrs) => {
      // Actualizamos el estado basado en el estado previo
      const updatedArrs = {
        ...prevArrs,
        [e.target.name]: e.target.value,
      };

      // Llamamos a doUnion inmediatamente después de actualizar el estado
      doUnion(updatedArrs);

      // Devolvemos el objeto actualizado para actualizar el estado
      return updatedArrs;
    });
  };

  const doUnion = (arreglos) => {

      setUnion("{"+arreglos.arrA+", "+arreglos.arrB+"}");
  }

  return (
    <div className="container">
      <style jsx global>{`
        body {
          background-color: #f5f5f5;
        }
      `}</style>
      <input type="text" onChange={handleChange} name="arrA" placeholder="a,b,.." />
      <input type="text" onChange={handleChange} name="arrB" placeholder="c,d,.." />
      <br />
      <span>{union}</span>
    </div>
  );
}
