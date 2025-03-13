import Login from "../components/LoginForm/Login";
import Signup from "../components/LoginForm/Signup";
import ForgotPassword from "../components/LoginForm/ForgotPassword";

const loginForm = [
  {
    path: "/login-form",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];

export default loginForm;
