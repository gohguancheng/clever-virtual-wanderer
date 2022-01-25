import React, { useState, useRef, useEffect } from "react";

const UsernameInput = ({ setUsername }) => {
  const [user, setUser] = useState("Mystery Traveller");
  const input = useRef();

  const updateName = () => {
    const inputValue = input.current.value;
    setUser(inputValue);
  };

  useEffect(() => {
    if (user !== "") {
      setUsername(user);
    } else {
      setUsername("Mystery Traveller");
    }
  }, [user]);

  return (
    <div>
      <form>
        <label htmlFor="usernameInput">
          <p className="m-5 text-xl font-semibold">What's your name, traveller? 👋</p>
        </label>
        <input 
          className="shadow appearance-none border rounded w-100 py-1 px-8 text-gray-700 leading-tight text-center focus:outline-none focus:shadow-outline"
          onChange={updateName}
          ref={input}
          type="text"
          placeholder="Enter Your Name Here"
        ></input>
      </form>
      <br />
      <div className="text-base">Your Name: <span className="font-semibold underline">{user}</span></div>
    </div>
  );
};

export default UsernameInput;
