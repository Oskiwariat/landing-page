import React from "react";

import MiddleSearcher from "./sub-components/MiddleSearcher";
import MiddleAuction from "./sub-components/MiddleAuction";
import MiddleSummary from "./sub-components/MiddleSummary";
import MiddleArtworks from "./sub-components/MiddleArtworks";

import CreditCard from "./sub-components/CreditCard";

class MiddleContent extends React.Component {
  render() {
    return (
      <>
        <div className="col-10 row middle-content">
          <MiddleSearcher />
          <MiddleAuction />
          <MiddleSummary />
          <MiddleArtworks />
        </div>
      </>
    );
  }
}

export default MiddleContent;
