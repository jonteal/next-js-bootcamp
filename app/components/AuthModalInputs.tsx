const AuthModalInputs = () => {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="First Name"
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
        />
        <input
          placeholder="Last Name"
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="Email"
          type="text"
          className="border rounded p-2 py-3 w-full"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="Phone"
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
        />
        <input
          placeholder="City"
          type="text"
          className="border rounded p-2 py-3 w-[49%]"
        />
      </div>
      <div className="my-3 flex justify-between text-sm">
        <input
          placeholder="Password"
          type="text"
          className="border rounded p-2 py-3 w-full"
        />
      </div>
    </div>
  );
};

export default AuthModalInputs;
