import React, { useState, useEffect } from "react";
import Product from "./Product";

const Message = ({ message }) => (
  <section
    className="hero flex min-h-screen bg-right bg-no-repeat py-80 pl-4 max-sm:bg-[length:300%_100%] md:py-40"
    style={{ backgroundImage: "url(/header011.jpg)" }}
  >
    <div className="hero-content text-left text-neutral-content">
      <div className="max-w-md">
        <h1 className="mb-5 text-6xl">Eyelashes beauty</h1>
        <p className="font-satisfy mb-10 text-4xl">{message}</p>
        <li className="list-none text-xl font-light uppercase text-[#c99d36] hover:text-white">
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
      setMessage("Nous vous remercions! Votre acompte est confirmé");
    }

    if (query.get("canceled")) {
      setMessage(
        "Votre acompte est annulée - revenez lorsque vous serez prêt.",
      );
    }
  }, []);

  return message ? <Message message={message} /> : <Product />;
}
