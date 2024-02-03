import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm</label>
              <input type="password" className="form-control" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message mt-2">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
