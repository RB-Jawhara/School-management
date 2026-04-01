import { createContext} from "react";
import { useState } from "react";
import StudentApi from "../Service/Api/Student/StudentApi";
import { STUDENT_DASHBOARD_ROUTE } from "../assets/router/Index.jsx";

export const UserStateContext = createContext({
 //wehd store kaytkhbo les info 
  user: null,
  setUser: () => {},
  login: (email, password) => {}, 
  setAuthenticated: () => {},
  logout: () => {},
  authenticated: false,
});


const UserContext = ({ children }) => {
  const [user, setUser] = useState({ name: "jawhara" });
  const studentApi = StudentApi(); // ✅ hna bddlna smiya
  const [authenticated, setAuthenticated] = useState(false);// ✅ state jdida WA7na 3mlna setAuthenticated bach n9dro nbadlo l value dyalha f login w logout

  const login = async (email,password) => {
    await studentApi.getCsrfToken();//nast3mlo crsf dyl securite 
    return studentApi.login(email,password)//nasifo login nichan f studentApi w n9dro nst3mlo f ay component b7al StudentsLogin.jsx
  };

  const logout = () => {
    setUser(null);
    
    localStorage.removeItem("token");
  };

  return (
    //value={{...}}: Ay haja hatitiha hna, y-qder ay component (bhal Login page aw Dashboard) y-jbedha o y-khdem biha.
    <UserStateContext.Provider value={{ user, login, setAuthenticated, logout, authenticated, setUser }}>
      {children}
    </UserStateContext.Provider>
  );
};

export default UserContext;