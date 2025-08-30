import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  // Replace with backend call

  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const data = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${API_URL}/user/batch?firstName=${firstName}&lastName=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(res.data);
    };
    data();
  }, [firstName]);

  const [users, setUsers] = useState([]);

  return (
    <>
      <div className='font-bold mt-6 text-lg'>Users</div>
      <div className='my-2'>
        <input
          type='text'
          placeholder='Search users...'
          className='w-full px-2 py-1 border rounded border-slate-200'
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
          <div className='flex flex-col justify-center h-full text-xl'>
            {user.firstName[0]}
          </div>
        </div>
        <div className='flex flex-col justify-center h-ful'>
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center h-ful'>
        <Button
          onClick={() =>
            navigate(`/sendMoney?id=${user.id}&firstName=${user.firstName}`, {
              id: user.id,
            })
          }
          label={"Send Money"}
        />
      </div>
    </div>
  );
}
