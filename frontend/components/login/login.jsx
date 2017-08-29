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
     <div className="login-container">
       <h1>Deal Desking</h1>
         <form onSubmit={this.handleSubmit} className="login-form">
             <br/>
             <span>{this.renderErrors()}</span>
             <label>
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="login-input"
                 placeholder="Username"
               />
             </label>
             <br/>
             <label>
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
                 placeholder="Password"
               />
             </label>
             <br/>
             <button onClick={this.handleSubmit}>Log In</button>
         </form>
      </div>
  );
 }

}

export default withRouter(Login)
