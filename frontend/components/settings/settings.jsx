import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      reEnterPassword: '',
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

    if( this.checkNewPassword()){
      this.props.updateUser(user);
    } else {
      console.log('passwords dont match')
    }
  }

  checkNewPassword() {
    return this.state.password === this.state.reEnterPassword
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
              <br />
              <input type="submit" value="Change Username" className="" />
              <br />
              <label>New Password
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className=""
                  placeholder="New Password"
                />
              </label>
              <br />
              <label>
                <input type="password"
                  value={this.state.reEnterPassword}
                  onChange={this.update('reEnterPassword')}
                  className=""
                  placeholder="Re-Enter New Password"
                />
              </label>
              <br/>
              <br/>
          </form>
       </div>
   );
  }
}

export default Settings;
