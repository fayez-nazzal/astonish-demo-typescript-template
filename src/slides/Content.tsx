import LiquidBox from "../components/LiquidBox";

const ContentSlide = () => (
  <>
    <h1 className="title">
      <span className="text">What are they?</span>
    </h1>

    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "2.5rem",
        width: "500px",
        justifyContent: "center",
      }}
    >
      <LiquidBox>
        <p>Pay attention to details</p>
      </LiquidBox>

      <LiquidBox>
        <p>Problem solving</p>
      </LiquidBox>

      <LiquidBox>
        <p>Ability to plan</p>
      </LiquidBox>

      <LiquidBox>
        <p>Well organized</p>
      </LiquidBox>

      <LiquidBox>
        <p>Creativity</p>
      </LiquidBox>
    </div>
  </>
);

export default ContentSlide;
