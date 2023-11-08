export default function Product() {
  return (
    <section
      className="hero min-h-screen flex py-80 md:py-40 pl-0"
      style={{
        backgroundImage: "url(/wlb131.jpeg)",
      }}
    >
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-6xl font-bold gold-wlb font-dm">WLB</h1>
          <p className="mb-10 text-4xl text-gray-100">Women luxury beauty</p>
          {/* <form action="/create-checkout-session" method="POST"> */}
          <form action="/api/checkout" method="POST">
            <button
              type="submit"
              className="btn btn-outline btn-warning py-4 px-8 font-satisfy"
            >
              Acompte
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
