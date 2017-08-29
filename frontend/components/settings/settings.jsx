import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUser(user);
  }

  render() {
    return (
      <div className="">
          <form onSubmit={this.handleSubmit} className="">
              <br/>
              <label>Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className=""
                  placeholder="Enter new username"
                />
              </label>
              <br/>
              <br/>
              <input type="submit" value="Change Username" className="" />
          </form>
       </div>
   );
  }
}

export default Settings;
