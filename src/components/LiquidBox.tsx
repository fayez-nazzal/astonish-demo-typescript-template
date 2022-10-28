import { ReactNode, useEffect, useState } from "react";

const LiquidBox = ({ children }: {
  children: ReactNode
}) => {
  const [animateClass, setAnimateClass] = useState("liquid-on");

  useEffect(() => {
    setTimeout(() => {
      setAnimateClass("faded-on");
    }, 100);
  }, []);

  return (
    <>
      <div className="liquid-box-container">
        <div className={`liquid-box ${animateClass}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {children}
        </div>
      </div>
    </>
  );
};

export default LiquidBox;
