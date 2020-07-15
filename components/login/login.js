import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src="/svgs/playpress.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" name="Password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}
