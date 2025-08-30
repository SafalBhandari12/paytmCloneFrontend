import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/SignUp";
import { Signin } from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signUp' element={<Signup />}></Route>
            <Route path='/signIn' element={<Signin />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/sendMoney' element={<SendMoney />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
