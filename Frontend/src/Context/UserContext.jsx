import { createContext, useState, useEffect } from "react";
import StudentApi from "../Service/Api/Student/StudentApi";

export const UserStateContext = createContext({
  user: null,
  setUser: () => {},
  login: (email, password) => {}, 
  setAuthenticated: () => {},
  logout: () => {},
  authenticated: false,
});

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  // 1. Fetch user data mlli kiy-t-loada l-app
  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await StudentApi.getUser();
        setUser(response.data);
        setAuthenticated(true);
      } catch (err) {
        setAuthenticated(false);
      }
    };
    checkUser();
  }, []);

  // 2. Login function (Fix: StudentApi b S kbira)
  const login = async (email, password) => {
    await StudentApi.getCsrfToken(); 
    return StudentApi.login(email, password); 
  };

  // 3. Logout function (Fix: setAuthenticated smiya shika)
  const logout = () => {
    setUser(null);
    setAuthenticated(false); // ✅ Match smiya d useState
    localStorage.removeItem("token");
  };

  return (
    <UserStateContext.Provider value={{ user, login, setAuthenticated, logout, authenticated, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserContext;