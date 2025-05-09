import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  }

  return (
    <div className='flex justify-center min-h-[calc(100vh-145px)] items-center'>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Login to your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">

            {/* Email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            {/* Password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>

            {error && <p className='text-xl text-red-500'>{error}</p>}

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p className='text-center font-semibold pt-5'>Don't have a account? <Link to='/auth/register' className='text-secondary hover:underline'>Register</Link></p>
          </fieldset>
        </form>
      </div>

    </div>
  );
};

export default Login;