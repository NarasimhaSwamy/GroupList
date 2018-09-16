import React from "react";

export default class GroupList extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: "15px" }}>
        <div className="group-items-container">
          <span className="icon">{this.props.icon}</span>
          <div className="group-items">
            <span className="header">{this.props.header}</span>
            {this.props.items.map(item => (
              <span className={this.props.itemStyle}> {item} </span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
