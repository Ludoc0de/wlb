export default function Product() {
  return (
    <section
      className="hero min-h-screen flex py-80 md:py-40 pl-4"
      style={{
        backgroundImage: "url(/wlbHero1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold text-gray-100">
            Women luxury beauty
          </h1>
          <p className="mb-10 text-xl text-gray-100">
            Studio d’extension de cils et de rehaussement de cils situé au cœur
            de Rémire Montjoly.
          </p>
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn bg-yellow-500 text-gray-800 py-4 px-8"
            >
              Acompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
