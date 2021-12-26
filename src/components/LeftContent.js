import React from "react";

const LeftContent = () => {
  const handleClick = (e) => {
    const divItem = document.querySelector(".active");

    if (divItem !== null) {
      divItem.classList.remove("active");
    }

    e.target.className += " active";
  };

  return (
    <>
      <div className="col-2 left-content">
        <div className="logged-person">
          <h5 className="logged-person__name">
            <i className="fa fa-circle logged-person__icon"></i>
            Oskar.
          </h5>
        </div>
        <nav className="navbar navbar-light">
          <div
            name="squares"
            onClick={handleClick}
            className="container-fluid squares"
          >
            <a className="navbar-brand" href="#homepage">
              <i className="fa fa-th-large move"></i>
            </a>
          </div>
          <div
            name="cart"
            onClick={handleClick}
            className="container-fluid cart"
          >
            <a className="navbar-brand" href="#shop">
              <i className="fa fa-shopping-cart move"></i>
            </a>
          </div>
          <div
            name="card"
            onClick={handleClick}
            className="container-fluid credit-card"
          >
            <a className="navbar-brand" href="#card">
              <i className="fa fa-credit-card move"></i>
            </a>
          </div>
          <div
            name="envelope"
            onClick={handleClick}
            className="container-fluid envelope"
          >
            <a className="navbar-brand" href="#messages">
              <i className="fa fa-envelope move"></i>
            </a>
          </div>
          <div
            name="bell"
            onClick={handleClick}
            className="container-fluid bell"
          >
            <a className="navbar-brand" href="#notification">
              <i className="fa fa-bell move"></i>
            </a>
          </div>
          <div name="cog" onClick={handleClick} className="container-fluid cog">
            <a className="navbar-brand" href="#settings">
              <i className="fa fa-cog move"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default LeftContent;
