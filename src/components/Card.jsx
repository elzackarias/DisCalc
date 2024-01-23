"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
function Card({ title, route, url, nolink, size }) {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.post("/api/logout");
      router.refresh();
    } catch (error) {
      alert(error);
    }
  };
  if (!nolink) {
    return (
      <div
        className="card mt-2 mx-2"
        style={{ width: 18 + "rem", cursor: "pointer", backgroundColor: "#7145d5" }}
      >
        <Link href={url} style={{ textDecoration: "none", color: "#fff" }}>
          <div className="card-body">
            <h5 className="card-title text-center">{title}</h5>
            <Image
              className="img-fluid mb-4 rounded mx-auto d-block"
              src={"/" + route}
              alt={title}
              priority
              width={size == "" || size == undefined ? "120" :size}
              height={size == "" || size == undefined ? "120" :size}
            />
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div
      className="card mt-2 mx-2"
      style={{ width: 18 + "rem", cursor: "pointer", backgroundColor:"#7145d5" }}
      onClick={() => logout()}
    >
      <div className="card-body">
        <h5 className="card-title text-center" style={{color:"#fff"}}>{title}</h5>
        <Image
          className="img-fluid mb-4 rounded mx-auto d-block"
          src={"/" + route}
          alt={title}
          priority
          width={size == "" || size == undefined ? "120" :size}
          height={size == "" || size == undefined ? "120" :size}
        />
      </div>
    </div>
  );
}

export default Card;
