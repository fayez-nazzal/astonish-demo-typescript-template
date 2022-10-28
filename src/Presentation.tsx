import {
  ArrowControls,
  Astonish,
  FullScreen,
  Preview,
  Slide,
  SlideToLeftTransition,
} from "astonish";
import BG from "./images/bg.jpg";
import IntroSlide from "./slides/Intro";
import ContentSlide from "./slides/Content";
import Trait1Slide from "./slides/Trait1";
import Trait2Slide from "./slides/Trait2";
import Trait3Slide from "./slides/Trait3";
import Trait5Slide from "./slides/Trait5";
import ExtraSlide from "./slides/Extra";
import BGNoCurves from "./images/bg-no-curves.jpg";
import { presenterTheme } from "./theme";

function App() {
  return (
    <>
      <Astonish
        // you can customize your presenter theme (theme-ui theme object)
        theme={presenterTheme}
        // slideSx is applied to each slide individually
        slideSx={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        defaultSlideTransition={SlideToLeftTransition}
      >
        <Slide>
          <IntroSlide />
        </Slide>

        <Slide
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ContentSlide />
        </Slide>

        <Slide>
          <Trait1Slide />
        </Slide>

        <Slide>
          <Trait2Slide />
        </Slide>

        <Slide>
          <Trait3Slide />
        </Slide>

        <Slide>
          <Trait5Slide />
        </Slide>

        <Slide
          sx={{
            backgroundImage: `url(${BGNoCurves})`,
            alignItems: "center",
          }}
        >
          <ExtraSlide />
        </Slide>

        <Preview />
        <FullScreen />
        <ArrowControls />
      </Astonish>

      {/* This svg component is just for defining a CSS filter */}
      <svg style={{ position: "fixed" }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur stdDeviation="9" />
            <feColorMatrix
              values="
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 100 -20"
            />
            <feBlend in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </>
  );
}

export default App;
