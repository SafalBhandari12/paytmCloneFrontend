import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";

import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;
console.log(API_URL);

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  console.log(firstName);
  const [lastName, setlastName] = useState("");
  console.log(lastName);
  const [email, setEmail] = useState("");
  console.log(email);
  const [password, setPassword] = useState("");
  console.log(password);

  const navigate = useNavigate();

  return (
    <div className='bg-slate-300 h-screen flex justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder='John'
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setlastName(e.target.value);
            }}
            placeholder='Doe'
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder='harkirat@gmail.com'
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder='123456'
            label={"Password"}
          />
          <div className='pt-4'>
            <Button
              onClick={async () => {
                try {
                  const res = await axios.post(`${API_URL}/user/signUp`, {
                    firstName,
                    lastName,
                    userName: email,
                    password,
                  });
                  console.log(res.data);
                  navigate("/signIn");
                } catch (error) {
                  console.log(error.response.data.msg);
                }
              }}
              label={"Sign up"}
            />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};
