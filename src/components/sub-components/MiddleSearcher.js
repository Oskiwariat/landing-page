import React from "react";

class MiddleSearcher extends React.Component {
  state = {
    searcherValue: "",
  };

  handleInput = (e) => {
    this.setState({
      searcherValue: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="searcher">
          <div className="searcher__box">
            <i className="searcher__icon fa fa-search"></i>
            <input
              className="searcher__input"
              type="text"
              value={this.state.searcherValue}
              onChange={this.handleInput}
              placeholder="Search..."
            />
          </div>
        </div>
      </>
    );
  }
}

export default MiddleSearcher;
