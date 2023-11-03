import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Welcome from "./feature/auth/Welcome";
import RequireAuth from "./feature/auth/RequireAuth";
import Login from "./feature/auth/Login";
import UsersList from "./feature/users/UserList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="userslist" element={<UsersList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
