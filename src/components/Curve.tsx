import { useEffect } from "react";
import anime from "animejs";

const Curve = () => {
  useEffect(() => {
    const startPath = document.querySelector(".wave-1")!.getAttribute("d");
    const endPath =
      "M0,198L20,203.5C40,209,80,220,120,209C160,198,200,165,240,176C280,187,320,242,360,253C400,264,440,231,480,192.5C520,154,560,110,600,110C640,110,680,154,720,170.5C760,187,800,176,840,165C880,154,920,143,960,115.5C1000,88,1040,44,1080,38.5C1120,33,1160,66,1200,88C1240,110,1280,121,1320,115.5C1360,110,1400,88,1440,110C1480,132,1520,198,1560,203.5C1600,209,1640,154,1680,132C1720,110,1760,121,1800,121C1840,121,1880,110,1920,93.5C1960,77,2000,55,2040,44C2080,33,2120,33,2160,55C2200,77,2240,121,2280,154C2320,187,2360,209,2400,181.5C2440,154,2480,77,2520,77C2560,77,2600,154,2640,187C2680,220,2720,209,2760,170.5C2800,132,2840,66,2860,33L2880,0L2880,330L2860,330C2840,330,2800,330,2760,330C2720,330,2680,330,2640,330C2600,330,2560,330,2520,330C2480,330,2440,330,2400,330C2360,330,2320,330,2280,330C2240,330,2200,330,2160,330C2120,330,2080,330,2040,330C2000,330,1960,330,1920,330C1880,330,1840,330,1800,330C1760,330,1720,330,1680,330C1640,330,1600,330,1560,330C1520,330,1480,330,1440,330C1400,330,1360,330,1320,330C1280,330,1240,330,1200,330C1160,330,1120,330,1080,330C1040,330,1000,330,960,330C920,330,880,330,840,330C800,330,760,330,720,330C680,330,640,330,600,330C560,330,520,330,480,330C440,330,400,330,360,330C320,330,280,330,240,330C200,330,160,330,120,330C80,330,40,330,20,330L0,330Z";

    anime({
      targets: ".wave-1",
      d: [{ value: [startPath, endPath] }],
      easing: "linear",
      duration: 3000,
      loop: true,
      delay: 0,
      direction: "alternate",
    });
  }, []);

  return (
    <svg
      id="wave"
      style={{
        transform: "rotate(180deg)",
        transition: "0.3s",
        position: "absolute",
        top: -200,
        left: 0,
      }}
      viewBox="0 0 1440 490"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="rgba(12, 35, 179, 1)" offset="0%" />
          <stop stopColor="rgba(55, 94, 255, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path
        className="wave-1"
        style={{
          transform: "translate(0, 0px)",
          opacity: 1,
        }}
        fill="url(#sw-gradient-0)"
        d="M0,294L30,302.2C60,310,120,327,180,310.3C240,294,300,245,360,261.3C420,278,480,359,540,375.7C600,392,660,343,720,285.8C780,229,840,163,900,163.3C960,163,1020,229,1080,253.2C1140,278,1200,261,1260,245C1320,229,1380,212,1440,171.5C1500,131,1560,65,1620,57.2C1680,49,1740,98,1800,130.7C1860,163,1920,180,1980,171.5C2040,163,2100,131,2160,163.3C2220,196,2280,294,2340,302.2C2400,310,2460,229,2520,196C2580,163,2640,180,2700,179.7C2760,180,2820,163,2880,138.8C2940,114,3000,82,3060,65.3C3120,49,3180,49,3240,81.7C3300,114,3360,180,3420,228.7C3480,278,3540,310,3600,269.5C3660,229,3720,114,3780,114.3C3840,114,3900,229,3960,277.7C4020,327,4080,310,4140,253.2C4200,196,4260,98,4290,49L4320,0L4320,490L4290,490C4260,490,4200,490,4140,490C4080,490,4020,490,3960,490C3900,490,3840,490,3780,490C3720,490,3660,490,3600,490C3540,490,3480,490,3420,490C3360,490,3300,490,3240,490C3180,490,3120,490,3060,490C3000,490,2940,490,2880,490C2820,490,2760,490,2700,490C2640,490,2580,490,2520,490C2460,490,2400,490,2340,490C2280,490,2220,490,2160,490C2100,490,2040,490,1980,490C1920,490,1860,490,1800,490C1740,490,1680,490,1620,490C1560,490,1500,490,1440,490C1380,490,1320,490,1260,490C1200,490,1140,490,1080,490C1020,490,960,490,900,490C840,490,780,490,720,490C660,490,600,490,540,490C480,490,420,490,360,490C300,490,240,490,180,490C120,490,60,490,30,490L0,490Z"
      />
    </svg>
  );
};

export default Curve;
