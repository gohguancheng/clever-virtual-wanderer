import React, { useState, useRef, useEffect } from "react";

const UsernameInput = ({ setUsername }) => {
  const [user, setUser] = useState("Mystery Traveller");
  const input = useRef();

  const updateName = () => {
    const inputValue = input.current.value;
    setUser(inputValue);
  };

  useEffect(() => {
    setUsername(user);
  }, [user]);

  return (
    <div>
      <form>
        <label htmlFor="usernameInput">
          <p>What's your name, traveller? 👋</p>
        </label>
        <input
          onChange={updateName}
          ref={input}
          type="text"
          placeholder="Enter Your Name Here"
        ></input>
      </form>
      <br />
      <div>Name Recorded: "{user}"</div>
    </div>
  );
};

export default UsernameInput;
