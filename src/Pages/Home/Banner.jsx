const Banner = () => {
  return (
    <div
      className="hero min-h-screen rounded"
      style={{
        backgroundImage: `url("https://storage.googleapis.com/loveable.appspot.com/blog/uploads/2023/04/16022951/Solar-System-Planetarium.jpg")`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
