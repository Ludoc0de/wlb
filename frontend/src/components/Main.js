import React, { useState, useEffect } from "react";
import Product from "./Product";

const Message = ({ message }) => (
  <section
    className="hero flex min-h-screen py-80 pl-4 md:py-40"
    style={{
      backgroundImage: "url(/header.jpg)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center",
      backgroundSize: window.innerWidth <= 480 ? "180% 100%" : "cover",
    }}
  >
    <div className="hero-content text-left text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl">Women luxury beauty</h1>
        <p className="font-satisfy mb-10 text-4xl">{message}</p>
        <li className="list-none text-xl font-light uppercase text-gold">
          <a href="/">Accueil</a>
        </li>
      </div>
    </div>
  </section>
);

export default function Main() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Nous vous remercions! Votre réservation est confirmé");
    }

    if (query.get("canceled")) {
      setMessage(
        "Votre commande est annulée - revenez lorsque vous serez prêt.",
      );
    }
  }, []);

  return message ? <Message message={message} /> : <Product />;
}
