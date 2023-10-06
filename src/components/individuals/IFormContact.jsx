import React from "react";

const IFormContact = () => {
  return (
    <div className="flex flex-col md:gap-10 gap-4 md:p-10 p-6 rounded-3xl shadow-black shadow-md mx-16 my-10  ">
      <p className="md:text-3xl text-xl font-bold">GET IN TOUCH TODAY!</p>
      <p className="md:text-2xl text-lg text-gray-400">
        Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="flex flex-col md:flex-row items-center  justify-center gap-4">
        <input
          type="text"
          placeholder="First name"
          className="input input-bordered input-primary w-full "
        />
        <input
          type="text"
          placeholder="Last name"
          className="input input-bordered input-primary w-full "
        />
      </div>
      <div className="flex flex-col md:flex-row items-center  justify-center gap-4 ">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-primary w-full "
        />
        <input
          type="text"
          placeholder="Phone"
          className="input input-bordered input-primary w-full "
        />
      </div>
      <textarea
        className="textarea textarea-primary w-auto"
        placeholder="Your questions"
      />
      <button className="btn  btn-primary">SUBMIT NOW</button>
    </div>
  );
};

export default IFormContact;
