import React from "react";
import ReactDOM from "react-dom";
import GroupList from "./GroupList.js";

import "./styles.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="App">
      Company Details.
      <br />
      <br />
      <GroupList
        icon={<i class="fa fa-plus-circle" aria-hidden="true" />}
        header={"Major Brands/Products"}
        items={["Tim Hortons", "Burger King", "Popeye's"]}
        itemStyle={"item"}
      />
      <GroupList
        icon={<i class="fa fa-plus-circle" aria-hidden="true" />}
        header={"Key Perfomance Indicators"}
        items={[
          "Same Store Sales",
          "New Unit Growth",
          "Restaurant Margin",
          "Earnings per share"
        ]}
        itemStyle={"item"}
      />
      <GroupList
        icon={<i class="fa fa-plus-circle" aria-hidden="true" />}
        header={"Competitors"}
        items={[
          "YUM",
          "MCD",
          "Subway",
          "Wendy'sCMG",
          "Dunkin Brands",
          "Starbucks"
        ]}
        itemStyle={"item"}
      />
      <GroupList
        header="Next Earning Date"
        items={["August 1, 2018"]}
        icon={<i class="fa fa-plus-circle" aria-hidden="true" />}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
