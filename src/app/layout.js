import Link from "next/link";
import Script from 'next/script'
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "@/components/Header";
import localFont from 'next/font/local'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const links = [
  {
    label: "Inicio",
    route: "/",
  },
  {
    label: "Conjuntos",
    route: "/comanda",
  },
];


export const metadata = {
  title: "DisCalc - Inicio",
  description: "Calculadora de matemáticas discretas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="body">
        <Header />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11" />
      </body>
    </html>
  );
}
