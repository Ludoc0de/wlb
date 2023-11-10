export default function Product() {
  return (
    <section
      className="hero min-h-screen flex py-80 md:py-40 pl-0 rounded-l-lg"
      style={{
        backgroundImage: "url(/wlbHero1.jpeg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "50% 50%",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-gray-100 font-playfair">
            Women luxury beauty
          </h1>
          <p className="mb-10 text-xl text-gray-100 font-roboto">
            Studio d’extension de cils et de rehaussement de cils situé au cœur
            de Rémire Montjoly.
          </p>
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn bg-yellow-500 text-gray-100 py-4 px-8 font-bold font-satisfy"
            >
              Acompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
