"use client";
import homestyle from "../app/home.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header({ current }) {
  const router = useRouter();
  return (
    <nav
      className={`navbar  navbar-expand-lg navbar-light ${
        current == "comanda" ? "bg-dark" : "bg-white"
      } px-4 py-0`} 
      style={{boxShadow:"0 1px 8px rgba(0,0,0,0.3)"}}
    >
      <div className="container-fluid">
        <Link href="/" style={{ textDecoration: "none" }}>
          <h3
            className={`${
              current == "comanda" ? homestyle.logofontdark : homestyle.logofont
            } navbar-brand`}
          >
            DisCalc
          </h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              href="/"
              className={`nav-link ${current == "home" ? "active" : ""} ${
                current == "comanda" ? homestyle.textwhite : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/comanda"
              className={`nav-link ${
                current == "comanda" ? homestyle.textwhite : ""
              }`}
            >
              Comanda
            </Link>
            <button className="nav-link ml-auto" onClick={() => logout()}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
