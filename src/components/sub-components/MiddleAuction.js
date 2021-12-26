import React from "react";

import backgroundImage from "../../public/images/bgi1.jpg";

class MiddleAuction extends React.Component {
  state = {
    hours: "",
    minutes: "",
    seconds: "",
  };

  render() {
    const date = new Date();

    const time = () => {
      setTimeout(() => {
        this.setState({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
        });
      }, 1000);
    };

    time();
    return (
      <>
        <div className="auction">
          <p className="auction__title">Trending Artwork</p>
          <img
            src={backgroundImage}
            alt="background image"
            className="auction__background-image"
          />
          <div className="auction__box">
            <div className="auction__box-info">
              <h2 className="auction__box-info-title">Iridescent World</h2>
              <p className="auction__box-info-author">
                by<strong>@leonardodavinci</strong>
              </p>
            </div>
            <div className="bid">
              <div className="bid__info">
                <p className="bid__info-now">Current Bid</p>
                <h2 className="bid__info-eth">3.00 ETH</h2>
                <p className="bid__info-money">$3000.00</p>
              </div>
              <div className="deadline">
                <p className="deadline__title">Auction is running:</p>
                <div className="deadline__time">
                  <h4 className="deadline__time-hours">
                    {this.state.hours}
                    <p className="deadline__time-hours-title">Hours</p>
                  </h4>
                  <h4 className="deadline__time-minutes">
                    {this.state.minutes}
                    <p className="deadline__time-minutes-title">Minutes</p>
                  </h4>
                  <h4 className="deadline__time-seconds">
                    {this.state.seconds}
                    <p className="deadline__time-seconds-title">Seconds</p>
                  </h4>
                </div>
                <button className="deadline__button">View Artwork</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MiddleAuction;
