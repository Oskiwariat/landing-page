import React from "react";

import userImage from "../public/images/jpg.jpg";

const RightContent = () => {
  const show = () => {
    const divItem = document.querySelector(".right-content");
    const burgerItem = document.querySelector(".burger");
    const auctionDiv = document.querySelector(".auction");
    const auctionBoxInfo = document.querySelector(".auction__box-info");
    const auctionBoxInfoTitle = document.querySelector(
      ".auction__box-info-title"
    );
    const deadlineButton = document.querySelector(".deadline__button");
    const deadlineTimeDiv = document.querySelector(".deadline__time");
    const deadlineTitle = document.querySelector(".deadline__title");
    const bidInfoDiv = document.querySelector(".bid__info");
    const searcherBox = document.querySelector(".searcher__box");
    const weeklySummary = document.querySelector(".weekly-summary");
    const artworks = document.querySelector(".artworks");

    divItem.classList.toggle("show");

    if (document.querySelector(".right-content.show") !== null) {
      burgerItem.classList.add("rotate");
    } else {
      burgerItem.classList.remove("rotate");
    }

    if (document.querySelector("i.burger.rotate") !== null) {
      auctionDiv.classList.add("smaller");
    } else {
      auctionDiv.classList.remove("smaller");
    }

    if (document.querySelector(".auction.smaller") !== null) {
      deadlineButton.style.top = "-70%";
      deadlineButton.style.right = "15%";
      deadlineTitle.style.left = "22%";
      deadlineTimeDiv.style.transform = "translate(-50%, -10%)";
      bidInfoDiv.style.flexBasis = "37%";
      auctionBoxInfo.style.padding = "0px 0px 0px 0px";
      auctionBoxInfoTitle.style.fontSize = "25px";
      searcherBox.style.transform = "translateX(-50px)";
      weeklySummary.style.transform = "translateX(-150px)";
      weeklySummary.style.width = "70%";
      auctionDiv.style.transform = "translateX(-145px)";
      auctionDiv.style.width = "70%";
      artworks.style.transform = "translateX(-10px)";
      artworks.style.width = "100%";
    } else {
      deadlineButton.style.top = "30%";
      deadlineButton.style.right = "5%";
      deadlineTimeDiv.style.transform = "translate(-102%, -10%)";
      deadlineTitle.style.left = "5%";
      bidInfoDiv.style.flexBasis = "33%";
      auctionBoxInfo.style.padding = "";
      auctionBoxInfoTitle.style.fontSize = "";
      searcherBox.style.transform = "translateX(0)";
      weeklySummary.style.transform = "translateX(0)";
      weeklySummary.style.width = "90%";
      auctionDiv.style.transform = "translateX(0)";
      auctionDiv.style.width = "90%";
      artworks.style.transform = "translateX(0)";
      artworks.style.width = "90%";
    }
  };

  return (
    <>
      <div className="right-content">
        <svg
          className="guy"
          width="1323.6px"
          height="1549px"
          enableBackground="new 0 0 1323.632 1549"
          version="1.1"
          viewBox="0 0 1323.632 1549"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m606.81 488.39s-70.574 276.43-127.65 371.95c-57.132 95.438-98.712 247.58 52.338 232.98 151.09-14.62 298.27-41.224 247.04-223.11-51.218-181.9-114.12-309.57-113.9-380.25l-57.837-1.574z"
            fill="#8D97AC"
          />
          <path
            d="m507.42 1103.9c-38.126-1.036-64.618-14.6-78.751-40.339-29.084-52.909 4.563-145.18 42.202-208.16 55.718-93.197 125.86-366.64 126.57-369.36l1.889-7.465 75 2.033-0.033 9.391c-0.154 39.57 21.382 100.68 48.651 178.07 20.343 57.859 43.451 123.44 64.872 199.54 17.524 62.151 13.835 110.27-11.292 146.97-43.793 64.05-144.61 78.729-244.09 88.395-8.779 0.788-17.208 1.138-25.018 0.912zm106.78-605.59c-11.914 45.707-74.212 279.06-126.77 366.99-37.784 63.188-65.387 146.18-41.86 189 13.004 23.681 41.881 33.594 85.012 29.487 94.949-9.188 190.93-22.917 230.03-80.081 21.649-31.707 24.515-74.51 8.625-130.83-21.251-75.507-44.235-140.79-64.521-198.44-26.895-76.315-46.837-132.98-49.437-175.02l-41.083-1.099z"
            fill="#1D1D1B"
          />
          <path
            d="m570.9 614.72s-146.74-58.117-206.99-23.701c-60.435 34.527-75.73 71.691-68.088 124.1 7.653 52.427 73.168 105.33 108.01 118.75 34.8 13.439 77.31 23.079 77.31 23.079l2.46-4.623s-138.13-64.495-154.69-143.1c-16.603-78.574 85.522-108.04 95.789-110.35 10.304-2.238 61.311-8.729 144.54 23.623"
            fill="#1D1D1B"
          />
          <path
            d="m884.13 349.9c-2.199 80.629-109.94 143.07-240.65 139.48-130.68-3.589-234.85-71.797-232.65-152.42 2.199-80.61 109.95-143.03 240.63-139.44 130.71 3.545 234.88 71.813 232.67 152.38z"
            fill="#fff"
          />
          <path
            d="m643.23 499.03c-135.8-3.691-244.39-76.522-242.06-162.32 2.367-85.773 114.78-152.59 250.55-148.84 135.81 3.689 244.41 76.522 242.06 162.29-2.352 85.795-114.74 152.57-250.55 148.86zm7.975-291.89c-125.16-3.421-228.66 54.915-230.72 130.09-2.064 75.176 98.114 139.09 223.27 142.51 125.17 3.4 228.66-54.936 230.73-130.09 2.053-75.156-98.112-139.09-223.28-142.51z"
            fill="#1D1D1B"
          />
          <path
            d="m572.88 1081.3s-94.797 160.74-50.417 281.19c0 0-52.593-70.883-81.679-45.563-29.063 25.299-47.51 39.048-33.232 77.498 0 0 89.477-35.506 143.42 25.569 0 0-19.709-217.79 36.936-338.3l-15.028-0.392z"
            fill="#1D1D1B"
          />
          <path
            d="m625.35 1082.7s74.885 218.31 24.016 336.1c0 0 51.999-33.18 79.623-6.326 27.659 26.859 42.975 47.701 26.615 85.277 0 0-80.626-81.088-137.84-23.061 0 0 42.544-268.97-7.425-392.42l15.016 0.436z"
            fill="#1D1D1B"
          />
          <polygon
            points="432.87 409.03 423.17 282.77 373.5 292.17 377.11 326.3 353.43 325.68 354.52 379.31 383.14 382.94 386.01 409.98"
            fill="#1D1D1B"
          />
          <polygon
            points="954.03 320.81 945.66 284.81 919.95 290.59 912.69 264.36 853.04 270.62 880.67 383.58 943.18 375 929.21 324.25"
            fill="#1D1D1B"
          />
          <path
            d="m353.9 348.68s-12.142-162.11 69.43-218.64c81.575-56.48 342.67-108.95 420.44-58.304 77.801 50.652 123.94 215.81 105.56 228.88 0 0-75.255-215.27-147.33-226.62-72.046-11.278-311.91 21.3-361.82 67.597-49.905 46.31-63.014 85.92-86.28 207.09z"
            fill="#1D1D1B"
          />
          <path
            d="m659.27 322.8c-8.967 6.421-14.769 15.743-17.319 26.192-22.549-21.256-55.257-25.74-78.67-9.098-27.03 19.323-31.353 59.771-9.645 90.253 21.771 30.544 61.285 39.544 88.347 20.254 13.803-9.806 21.643-25.029 23.29-41.608 17.511 12.646 40.185 14.29 56.93 2.388 21.738-15.484 25.255-47.771 7.9-72.153-17.42-24.419-49.158-31.677-70.833-16.228z"
            fill="#fff"
          />
          <path
            d="m726.32 416.96c-15.833 11.322-37.22 12.385-55.797 3.289-3.808 14.774-12.163 27.256-24.321 35.933-30.26 21.577-74.417 11.804-98.409-21.935-23.935-33.64-18.874-78.509 11.415-100.12 22.868-16.257 54.805-14.741 79.35 2.872 3.804-8.031 9.415-14.869 16.544-19.968 24.966-17.739 61.092-9.708 80.706 17.872 19.641 27.542 15.416 64.35-9.488 82.056zm-66.991-21.225l10.127 7.29c15.422 11.161 34.933 12.095 48.643 2.324 18.415-13.127 21.128-41.063 6.158-62.221-15.158-21.095-42.414-27.643-60.796-14.483-7.328 5.162-12.326 12.838-14.613 21.997l-2.872 11.967-8.904-8.385c-20.317-19.192-49.574-22.772-69.64-8.483-23.834 16.965-27.444 53.028-8.031 80.282 19.451 27.256 54.612 35.548 78.512 18.579 11.548-8.289 18.803-21.192 20.224-36.514l1.192-12.353z"
            fill="#1D1D1B"
          />
          <path
            d="m639.91 372.58c5.166 7.256 4.066 16.737-2.32 21.289-6.324 4.579-15.643 2.45-20.834-4.742-5.131-7.192-4.162-16.772 2.259-21.321 6.417-4.582 15.771-2.388 20.895 4.774z"
            fill="#1D1D1B"
          />
          <path
            d="m718.1 347.87c3.904 5.515 3.163 12.74-1.714 16.192-4.9 3.484-11.995 1.87-15.833-3.614-3.937-5.483-3.163-12.741 1.644-16.192 4.903-3.448 11.999-1.839 15.903 3.614z"
            fill="#1D1D1B"
          />
          <path
            d="m527.74 988.68c-3.667 29.545-21.214 51.64-39.244 49.413-17.932-2.29-29.448-28.06-25.737-57.604 3.775-29.581 21.349-51.676 39.221-49.416 17.999 2.256 29.529 28.029 25.76 57.607z"
            fill="#fff"
          />
          <path
            className="hand"
            d="m698.03 639.46s194.35-53.054 413.81-218.11c0 0 84.68-13.481 21.443 51.843-63.248 65.326-401.46 177.1-433.52 181.59l-1.735-15.32z"
            fill="#1D1D1B"
          />
        </svg>

        <p>
          <img className="user-image" src={userImage} alt="zdjecie" />
          <i
            className="btn fa fa-angle-down burger"
            type="button"
            onClick={show}
            data-bs-toggle="collapse"
            data-bs-target="#collapseWidthExample"
            aria-expanded="false"
            aria-controls="collapseWidthExample"
          ></i>
        </p>
        <div style={{ minHeight: 120 + "px" }}>
          <div
            className="collapse collapse-horizontal"
            id="collapseWidthExample"
          >
            <div
              className="card card-body statistic"
              style={{ minWidth: 270 + "px" }}
            >
              <h4 className="statistic__title">Statistic</h4>
              <div className="circle">
                <h2 className="circle__number">5.909</h2>
                <p className="circle__type text-muted">Etherum</p>
              </div>
              <div className="procents">
                <p className="procents__artwork">
                  Artwork Sold{" "}
                  <a className="procents__artwork-percentage text-muted">75%</a>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="procents__cancellation">
                  Cancellation{" "}
                  <a className="procents__cancellation-percentage text-muted">
                    25%
                  </a>
                </p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div
              className="card card-body activity"
              style={{ minWidth: 270 + "px" }}
            >
              <h4 className="activity__title">
                Recent activity
                <a className="activity__subtitle text-muted">See All</a>
              </h4>
              <div className="activity__info">
                <div className="activity__info-box">
                  <div className="activity__info-box-circle">
                    <i className="btn fa fa-angle-down burger activity__icon"></i>
                  </div>
                  <h4 className="activity__info-box-title">
                    Crystal Algoritm
                    <a className="activity__info-box-minutes"> 2 min</a>
                  </h4>
                  <p className="activity__info-box-subtitle text-muted">
                    Artwork Sold
                  </p>
                </div>
              </div>
              <div className="activity__info">
                <div className="activity__info-box">
                  <div className="activity__info-box-circle">
                    <i className="btn fa fa-angle-down burger activity__icon"></i>
                  </div>
                  <h4 className="activity__info-box-title">
                    Crystal Algoritm
                    <a className="activity__info-box-minutes"> 2 min</a>
                  </h4>
                  <p className="activity__info-box-subtitle text-muted">
                    Artwork Sold
                  </p>
                </div>
              </div>
              <div className="activity__info">
                <div className="activity__info-box">
                  <div className="activity__info-box-circle">
                    <i className="btn fa fa-angle-down burger activity__icon"></i>
                  </div>
                  <h4 className="activity__info-box-title">
                    Crystal Algoritm
                    <a className="activity__info-box-minutes"> 2 min</a>
                  </h4>
                  <p className="activity__info-box-subtitle text-muted">
                    Artwork Sold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightContent;
