import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    if (name.length < 4) {
      setNameError('Name should be more then 4 characters');
      return;
    } else {
      setNameError('');
    }
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        setUser(user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      })
  }

  return (

    <div className='flex justify-center min-h-[calc(100vh-145px)] items-center'>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">

            {/* Name */}
            <label className="label">Name</label>
            <input name='name' type="text" className="input" placeholder="Name" required />

            {nameError && <p className='text-xs text-red-500'> {nameError}</p>}

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input name='photo' type="text" className="input" placeholder="Photo URL" required />

            {/* Email */}
            <label className="label">Email</label>
            <input name='email' type="email" className="input" placeholder="Email" required />

            {/* Password */}
            <label className="label">Password</label>
            <input name='password' type="password" className="input" placeholder="Password" required />

            <button type='submit' className="btn btn-neutral mt-4">Login</button>
            <p className='text-center font-semibold pt-5'>Already have a account? <Link to='/auth/login' className='text-secondary hover:underline'>Login</Link></p>
          </fieldset>
        </form>
      </div>

    </div>

  );
};

export default Register;