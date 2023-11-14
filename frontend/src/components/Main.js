import React, { useState, useEffect } from "react";
import Product from "./Product";

const Message = ({ message }) => (
  <section
    className="hero flex min-h-screen py-80 pl-4 md:py-40"
    style={{
      backgroundImage: "url(/wlb121.jpeg)",
    }}
  >
    <div className="hero-content text-left text-neutral-content">
      <div className="max-w-md">
        <h1 className="gold-wlb font-raleway mb-5 text-6xl font-bold">WLB</h1>
        <p className="font-satisfy mb-10 text-4xl text-gray-100">{message}</p>
        <li className="gold-wlb list-none">
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
      setMessage("Accompte annulée - revenez lorsque vous serez prêt.");
    }
  }, []);

  return message ? <Message message={message} /> : <Product />;
}
