import { Routes, Route } from "react-router-dom";
import { AuthHandlerProvider } from "./context/AuthHandlerContext";
import { UserProvider } from "./context/UserContext";
import About from "./pages/About";
import Navbar from "./components/Shared/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Signup from "./pages/Signup";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const App = () => {
  return (
    <AuthHandlerProvider>
      <Navbar />
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Route>
        </Routes>
      </UserProvider>
    </AuthHandlerProvider>
  );
};

export default App;
