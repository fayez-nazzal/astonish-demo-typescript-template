import Curve from "../components/Curve";

const ExtraSlide = () => (
  <>
    <Curve />

    <img
      src="/logo_transparent.png"
      alt="logo"
      className="logo"
      width={600}
      style={{
        zIndex: 100,
      }}
    />

    <p className="content" style={{ marginTop: -32 }}>
      Astonish is a library designed for creative developers to create
      astonishing presentations using ReactJS.
      <br />
      <br />
      <br />
      We just give you the basic tools, you will be making everything else using
      your developer mind,{" "}
      <span className="text-primary">
        Give it a try and Unleash Your Creativity!
      </span>
    </p>
  </>
);

export default ExtraSlide;
