import React from "react";
import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

function Dashboard() {
  return (
    <div className='flex-col m-8 mr-48'>
      <Appbar />
      <Balance />
      <Users />
    </div>
  );
}

export default Dashboard;
