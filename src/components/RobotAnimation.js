import React from "react";

const Robot = () => {
  const robotLanding = () => {
    const robot = document.querySelector("#robot");
    const armRight = document.querySelector("#arm-right");
    const legRight = document.querySelector("#leg-right");
    const armLeft = document.querySelector("#arm-left");
    const handLeft = document.querySelector("#hand-left");
    const legLeft = document.querySelector("#leg-left");

    const tl = new TimelineMax({ repeatDelay: 1 });

    tl.add("robot-landing");
    tl.to(robot, 2, { transform: "translate(-50%, -50%)" }, "robot-landing");
    tl.fromTo(
      [armRight, armLeft],
      0.5,
      { skewX: 0 },
      { skewX: 180 },
      "robot-landing"
    );
    tl.to([armRight, armLeft], 0.1, { skewX: 0, delay: 0.3 }, 2);
    tl.fromTo(
      [legRight, legLeft],
      2,
      { x: 50, y: -80, rotation: 50 },
      { x: 0, y: 0, rotation: 0, delay: 0.3 },
      "robot-landing"
    );
    tl.to(armLeft, 0.1, { skewX: 180 }, 3);
    tl.set(handLeft, { rotation: -15, transformOrigin: "50% 50%" });
    tl.to(handLeft, 0.1, { rotation: 15, yoyo: true, repeat: 25 }, 3.1);
    tl.add("stop-shaking-left-hand");
    tl.to(armLeft, 0.1, { skewX: 0 }, "stop-shaking-left-hand");
    tl.to(handLeft, 0.1, { rotation: 0 }, "stop-shaking-left-hand");
  };

  const barsMoving = () => {
    const voiceBars = document.querySelectorAll("#voice-bars > *");

    const tl = new TimelineMax();

    const colors = () => {
      let colors = [
        "red",
        "green",
        "yellow",
        "darkviolet",
        "pink",
        "orange",
        "purple",
        "brown",
        "burlywood",
        "cadetblue",
      ];

      return colors[Math.floor(Math.random() * 3)];
    };

    const scale = () => {
      return Math.random() * 2;
    };

    tl.set(voiceBars, { transformOrigin: "50% 50%", y: -30 });
    tl.to(
      voiceBars,
      0.3,
      {
        scaleY: scale,
        fill: colors,
        stagger: {
          each: 0.1,
          ease: Bounce.easeIn,
          repeat: -1,
          yoyo: true,
        },
      },
      6.5
    );
  };

  const blink = () => {
    const eyeRight = document.querySelector("#eye-right");
    const eyeLeft = document.querySelector("#eye-left");

    const tl = new TimelineMax({
      delay: 3,
      repeat: -1,
      repeatDelay: Math.floor(3 + Math.random() * 10),
    });

    tl.set([eyeLeft, eyeRight], { transformOrigin: "50% 50%", scaleY: 0 });
    tl.to([eyeLeft, eyeRight], 0.1, {
      scaleY: 1,
      stagger: { each: 0.1, yoyo: true },
    });
  };

  const moveLeft = () => {
    const robot = document.querySelector("#robot");

    const tl = new TimelineMax();

    tl.to(robot, { left: "25%" }, 6.3);
  };

  const textSlide = () => {
    const allMessages = document.querySelectorAll(".messageBox > *");
    const texts = [
      "Hello!",
      "Nice to see you on my page.",
      "Would you like to join in?",
    ];
    let index = 0;

    allMessages.forEach((message) => {
      message.textContent = texts[index];
      message.style.color = "white";
      index++;
    });

    const mess1 = document.querySelector(".message-1");
    const mess2 = document.querySelector(".message-2");
    const mess3 = document.querySelector(".message-3");

    const tl = new TimelineMax();

    tl.set([mess1, mess2, mess3], { opacity: 0, color: "white" });
    tl.to(
      [mess1, mess2, mess3],
      2.5,
      {
        opacity: 1,
        x: -1200,
        color: "yellowgreen",
        stagger: { each: 3, delay: 5 },
      },
      6.6
    );
  };

  const buttonSlide = () => {
    const button = document.querySelector(".join-in");

    const tl = new TimelineMax();

    tl.to(button, 2, { left: "59%", ease: Power0.easeIn }, 15.3);
  };

  const robotAnimation = () => {
    const master = new TimelineMax();
    master.add(robotLanding());
    master.add(blink());
    master.add(barsMoving());
    master.add(moveLeft());
    master.add(textSlide());
    master.add(buttonSlide());
  };

  setTimeout(robotAnimation, 2000);

  const showThePage = () => {
    const wrap = document.querySelector(".wrap");
    const shadowBox = document.querySelector(".shadowbox");
    const box = document.querySelector(".box");
    const robot = document.querySelector("#robot");
    const messageBox = document.querySelector(".messageBox");
    const yesButton = document.querySelector(".join-in");
    const skipButton = document.querySelector(".skip");

    wrap.style.animationPlayState = "running";
    box.style.animationPlayState = "running";
    shadowBox.style.animationPlayState = "running";
    robot.style.display = "none";
    messageBox.style.display = "none";
    yesButton.style.display = "none";
    skipButton.style.display = "none";
  };

  return (
    <>
      <svg id="robot" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800">
        <title>robot-responsive</title>
        <g>
          <g id="leg-right">
            <path
              id="right-solid"
              d="M191.22,596.77V782.09"
              fill="none"
              stroke="#cccccb"
              strokeMiterlimit={10}
              strokeWidth={50}
            />
            <g id="right-dashed">
              <g>
                <path
                  d="M191.22,596.77v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                />
                <path
                  d="M191.22,628V744.79"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                  strokeDasharray={"21.23 21.23"}
                />
                <path
                  d="M191.22,755.41v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                />
              </g>
            </g>
            <path
              id="foot-right"
              d="M188.85,743.65c-42.57,0-77.09,25.22-77.09,56.32H265.93C265.93,768.9,231.42,743.65,188.85,743.65Z"
              fill="#d6d6d6"
            />
          </g>
          <g id="leg-left">
            <path
              id="left-solid"
              d="M413.63,596.77V782.09"
              fill="none"
              stroke="#cccccb"
              strokeMiterlimit={10}
              strokeWidth={50}
            />
            <g id="left-dashed">
              <g>
                <path
                  d="M413.63,596.77v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                />
                <path
                  d="M413.63,628V744.79"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                  strokeDasharray={"21.23 21.23"}
                />
                <path
                  d="M413.63,755.41v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={50}
                />
              </g>
            </g>
            <path
              id="foot-left"
              d="M413.63,743.65c-42.57,0-77.08,25.22-77.08,56.32H490.71C490.71,768.9,456.2,743.65,413.63,743.65Z"
              fill="#d6d6d6"
            />
          </g>
          <g id="arm-right">
            <path
              id="right-solid-2"
              d="M135.76,341s-85.29-.64-85.29,90.84v110.4"
              fill="none"
              stroke="#cccccb"
              strokeMiterlimit={10}
              strokeWidth={40}
            />
            <g id="right-dashed-2">
              <g>
                <path
                  d="M135.28,341a76,76,0,0,0-10,.81"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
                <path
                  d="M105,346.65c-24.52,8.66-55,30.42-55,85.12v89.94"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                  strokeDasharray={"20.93 20.93"}
                />
                <path
                  d="M50,532.2v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
              </g>
            </g>
            <path
              id="hand-right"
              d="M50.28,499.8C23.61,499.8,2,526.3,2,559c0,23.62,11.28,44,27.59,53.49V559H71v53.49C87.3,603,98.58,582.61,98.58,559,98.55,526.3,76.94,499.8,50.28,499.8Z"
              fill="#d6d6d6"
            />
          </g>
          <g id="arm-left">
            <path
              id="left-solid-2"
              d="M464.44,340s85.28-.65,85.28,90.84v110.4"
              fill="none"
              stroke="#cccccb"
              strokeMiterlimit={10}
              strokeWidth={40}
            />
            <g id="left-dashed-2">
              <g>
                <path
                  d="M464.44,340a76,76,0,0,1,10,.81"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
                <path
                  d="M494.71,345.72c24.52,8.66,55,30.42,55,85.13v89.94"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                  strokeDasharray={"20.93 20.93"}
                />
                <path
                  d="M549.72,531.25v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
              </g>
            </g>
            <path
              id="hand-left"
              d="M549.72,500c-26.66,0-48.27,26.5-48.27,59.19,0,23.62,11.28,44,27.58,53.5v-53.5h41.38v53.48c16.31-9.51,27.59-29.88,27.59-53.5C598,526.48,576.39,500,549.72,500Z"
              fill="#d6d6d6"
            />
          </g>
          <g id="body">
            <path
              id="body-white"
              d="M137.85,288.8h324.3a23.63,23.63,0,0,1,23.63,23.63h0V573.15a23.63,23.63,0,0,1-23.62,23.63H137.85a23.63,23.63,0,0,1-23.62-23.62V312.42A23.63,23.63,0,0,1,137.85,288.8Z"
              fill="#fff"
            />
            <rect
              id="screen"
              x="132.47"
              y="340.95"
              width="335.06"
              height="203.66"
              rx="14.06"
              fill="#231f20"
            />
            <g id="voice-bars">
              <rect
                id="bar12"
                x="193.1"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar11"
                x="211.49"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar10"
                x="230.46"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar9"
                x="248.85"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar8"
                x="267.82"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar7"
                x="286.21"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar6"
                x="305.17"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar5"
                x="323.56"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar4"
                x="342.53"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar3"
                x="360.92"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar2"
                x="379.89"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
              <rect
                id="bar1"
                x="398.28"
                y="438.51"
                width="8.62"
                height="58.62"
                fill="#48b3e6"
              />
            </g>
          </g>
          <g id="neck">
            <path
              id="neck-grey"
              d="M300,225.29V288.8"
              fill="none"
              stroke="#cccccb"
              strokeMiterlimit={10}
              strokeWidth={40}
            />
            <g id="neck-white">
              <g>
                <path
                  d="M300,211.65v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
                <path
                  d="M300,245.25v35.4"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                  strokeDasharray={"23.6 23.6"}
                />
                <path
                  d="M300,292.44v10"
                  fill="none"
                  stroke="#fff"
                  strokeMiterlimit={10}
                  strokeWidth={40}
                />
              </g>
            </g>
          </g>
          <g id="head">
            <rect
              id="head-white"
              x="101.16"
              width="397.7"
              height="225.29"
              rx="46.44"
              fill="#fff"
            />
            <rect
              id="face"
              x="126.44"
              y="34.49"
              width="347.13"
              height="156.32"
              rx="34"
              fill="#231f20"
            />
            <ellipse
              id="eye-left"
              cx="394.98"
              cy="112.65"
              rx="29.58"
              ry="39.98"
              fill="#48b3e6"
            />
            <ellipse
              id="eye-right"
              cx="202.02"
              cy="112.65"
              rx="29.58"
              ry="39.98"
              fill="#48b3e6"
            />
            <path
              id="ear-left"
              d="M101.16,69.63,81,75.38a13.42,13.42,0,0,0-9.73,12.9v40.47A13.39,13.39,0,0,0,81,141.65l20.16,5.73Z"
              fill="#f2f2f3"
            />
            <path
              id="ear-right"
              d="M519,75.38l-20.15-5.75v77.74L519,141.65a13.39,13.39,0,0,0,9.72-12.9V88.28A13.42,13.42,0,0,0,519,75.38Z"
              fill="#f2f2f3"
            />
          </g>
        </g>
      </svg>

      <div className="messageBox">
        <p className="message-1"></p>
        <p className="message-2"></p>
        <p className="message-3"></p>
      </div>
      <button onClick={showThePage} className="join-in">
        YES
      </button>
      <button onClick={showThePage} className="skip">
        SKIP
      </button>
    </>
  );
};

export default Robot;
