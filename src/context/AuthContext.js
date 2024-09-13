import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser?.isLoggedIn || false;
  });

  const router = useRouter(); 

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.isLoggedIn !== isLoggedIn) {
      setIsLoggedIn(storedUser?.isLoggedIn || false);
    }
  }, [isLoggedIn]); 
  const signIn = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      if (storedUser.email === email && storedUser.password === password) {
        storedUser.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(storedUser)); 
        setIsLoggedIn(true);
        router.push("/"); 
        console.log("User signed in successfully");
      } else {
        console.log("Invalid credentials");
      }
    } else {
      console.log("No account found. Please sign up.");
    }
  };

  const signUp = (username, email, password) => {
    const newUser = {
      username,
      email,
      password,
      isLoggedIn: true, 
    };

    localStorage.setItem("user", JSON.stringify(newUser)); 
    setIsLoggedIn(true);
    console.log("User signed up and logged in");
    router.push("/"); 
  };

  const logOut = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      storedUser.isLoggedIn = false;
      localStorage.setItem("user", JSON.stringify(storedUser)); 
    }

    setIsLoggedIn(false);
    router.push("/login");
    console.log("User logged out");
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
