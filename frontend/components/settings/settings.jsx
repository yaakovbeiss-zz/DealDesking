import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      reEnterPassword: '',
      message: '',
    }
    this.changeUsername = this.changeUsername.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.message = this.message.bind(this);
  }

  componentWillMount(nextProps) {
    this.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  changeUsername() {
    let user = this.props.currentUser;
    user.username = this.state.username;
    this.props.updateUser(user);
  }

  changePassword() {
    let user = this.props.currentUser;

    if( this.checkNewPassword()){
      user.password = this.state.password;
      this.props.updateUser(user);
      this.setState({ message: 'Password succesfully changed.'})
    } else {
      this.setState({ message: "Passwords don't match."})
    }
  }

  checkNewPassword() {
    return this.state.password === this.state.reEnterPassword
  }

  clearErrors() {
    this.setState({ message: '' })
  }

  message() {
    return <span>{this.state.message}</span>
  }

  render() {
    return (
      <div className="settings-container">
            <section>
              Change Username
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className=""
                  placeholder="Enter new username"
                />
              <button type="submit" className="" onClick={this.changeUsername}>Change Username</button>
              </section>

              <section>
              Change Password
                {this.message()}
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className=""
                  placeholder="New Password"
                />
                <input type="password"
                  value={this.state.reEnterPassword}
                  onChange={this.update('reEnterPassword')}
                  className=""
                  placeholder="Re-Enter New Password"
                />
              <button type="submit" className="" onClick={this.changePassword}>Change Password</button>
            </section>
       </div>
   );
  }
}

export default Settings;
