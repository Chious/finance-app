"use client";
import React, { useState } from "react";
import Link from "next/link";

const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-1 bg-white p-8 rounded-md w-96 items-start max-w-[600px]"
    >
      <h1>Login</h1>

      <label>Email </label>
      <input
        className="border border-gray-300 rounded-md p-2 outline-none w-full"
        type="email"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Password </label>
      <input
        className="border border-gray-300 rounded-md p-2 outline-none w-full"
        type="password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <Link
        href="/overview"
        className="bg-black text-white w-full p-2 rounded-md text-center"
      >
        Login
      </Link>
      <p className=" text-center w-full text-gray-500">
        Need to create an account?{" "}
        <span className="underline text-black">Sign Up</span>
      </p>
    </form>
  );
};

export default Form;
