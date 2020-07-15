import React from "react";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="register-logo">
            <img src="/svgs/proud.svg" />
          </div>
          <div className="form">
            <div className="form-group">
              <input type="text" name="Name" placeholder="Name" />
            </div>
            <div className="form-group">
              <select>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="Specify your School name or School's UniqueID"
                placeholder="School Name / School's Unique ID"
              />
            </div>
            <div className="form-group">
              <input type="text" name="Email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" name="Password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="Confirm Password"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
