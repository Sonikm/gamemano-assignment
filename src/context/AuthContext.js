import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check if the user is logged in from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    return storedUser?.isLoggedIn;
  });

  const router = useRouter();

  useEffect(() => {
    // Sync logged-in state with localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.isLoggedIn !== isLoggedIn) {
      setIsLoggedIn(storedUser?.isLoggedIn);
    }
  }, [isLoggedIn]);

  const signIn = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      // Check if the provided credentials match the stored user
      if (storedUser.email === email && storedUser.password === password) {
        storedUser.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(storedUser)); // Update localStorage
        setIsLoggedIn(true);
        toast.success("User signed in successfully");
        router.push("/");
      } else {
        toast.error("Invalid credentials");
      }
    } else {
      toast.info("No account found. Please sign up.");
    }
  };

  const signUp = (username, email, password) => {
    // Create a new user and save to localStorage
    const newUser = {
      username,
      email,
      password,
      isLoggedIn: true,
    };

    localStorage.setItem("user", JSON.stringify(newUser));
    setIsLoggedIn(true);
    toast.success("User signed up.");
    router.push("/");
  };

  const logOut = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      storedUser.isLoggedIn = false;
      localStorage.setItem("user", JSON.stringify(storedUser)); // Update localStorage

      setIsLoggedIn(false);
      router.push("/login");
      toast.info("User logged out");
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
