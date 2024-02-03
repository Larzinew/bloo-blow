import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main className="container mt-5">
      <h1>AuthPage</h1>
      <button
        className="btn btn-primary"
        onClick={() => setShowSignUp(!showSignUp)}
      >
        {showSignUp ? 'Log In' : 'Sign Up'}
      </button>

      {showSignUp ? (
        <SignUpForm setUser={setUser} />
      ) : (
        <LoginForm setUser={setUser} />
      )}
    </main>
  );
}