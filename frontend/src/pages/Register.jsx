const RegisterForm = () => {
  return (
    <div className="container mx-auto max-w-md mt-20 px-4">
      <div className="card shadow-lg bg-base-100 p-6 rounded-lg">
        <h1 className="text-center text-2xl font-bold mb-6">Register</h1>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Email"
            name="email"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Username"
            name="username"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input input-bordered w-full"
            placeholder="Password"
            name="password"
            required
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button className="btn btn-primary" type="button">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
