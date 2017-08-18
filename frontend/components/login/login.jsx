import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
     super(props);
     this.state = {
       username: '',
       password: ''
     }
     this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
   if (nextProps.loggedIn) {
     this.props.history.push('/');
   }
 }

 update(field) {
   return e => this.setState({
     [field]: e.currentTarget.value
   });
 }

 handleSubmit(e) {
   e.preventDefault();
   const user = this.state;
   this.props.login({user});
 }

 renderErrors() {
   return (
     <ul>
       {this.props.errors.map((error, i) => (
         <li key={`error=${i}`}>
           {error}
         </li>
       ))}
     </ul>
   );
 }

 render() {
   return (
     <div className="">
        <form onSubmit={this.handleSubmit} className="">

          <br/>

          {this.renderErrors()}
          <div className="">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className=""
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className=""
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
  );
 }

}

export default withRouter(Login)
