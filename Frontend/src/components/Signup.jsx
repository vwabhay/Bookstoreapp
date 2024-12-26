import React from 'react';

function Signup() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input type="text" id="name" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input type="password" id="password" className="input input-bordered w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
          <input type="password" id="confirm-password" className="input input-bordered w-full" />
        </div>
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
