export default function Product() {
  return (
    <section
      className="hero min-h-screen flex py-80 md:py-44 pl-4"
      style={{
        backgroundImage: "url(/header.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl  text-gray-100">Women luxury beauty</h1>
          <p className="mb-10 text-xl text-gray-100">
            Studio d’extension de cils et de rehaussement de cils situé au cœur
            de Rémire Montjoly.
          </p>
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn btn-lg gold-wlb text-black uppercase"
            >
              Acompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
