export default function Product() {
  return (
    <section
      className="hero flex min-h-screen bg-right bg-no-repeat pl-4 max-sm:bg-[length:300%_100%]"
      style={{ backgroundImage: "url(/header011.jpg)" }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl">Eyelashes beauty</h1>
          <p className="mb-10 text-xl ">
            Studio d’extension de cils et de rehaussement de cils situé au cœur
            de Rémire Montjoly.
          </p>
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn btn-lg bg-[#c99d36] uppercase  text-black hover:bg-white hover:text-[#c99d36]"
            >
              <svg width="50" height="4" viewBox="0 0 50 4" fill="none">
                <rect
                  className="line"
                  width="50"
                  height="4"
                  rx="5"
                  fill="white"
                />
              </svg>
              Acompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
