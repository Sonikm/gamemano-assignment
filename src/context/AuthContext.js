import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if we're in the browser environment before accessing localStorage
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setIsLoggedIn(storedUser?.isLoggedIn || false);
    }
  }, []);

  const signIn = (email, password) => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser) {
        if (storedUser?.email === email && storedUser?.password === password) {
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
    }
  };

  const signUp = (username, email, password) => {
    if (typeof window !== "undefined") {
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
    }
  };

  const logOut = () => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser) {
        storedUser.isLoggedIn = false;
        localStorage.setItem("user", JSON.stringify(storedUser)); // Update localStorage

        setIsLoggedIn(false);
        router.push("/login");
        toast.info("User logged out");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, signUp, logOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
