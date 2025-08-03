import { useEffect, useState } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: true,
    userRoles: [],
    isLoading: true,
  });

  useEffect(() => {
    const loadAuth = async () => {
      try {
        // Replace with actual API call
        const roles = ["admin"]; // Should be an array
        setAuth({
          isAuthenticated: true,
          userRoles: roles,
          isLoading: false,
        });
      } catch (error) {
        setAuth({
          isAuthenticated: false,
          userRoles: [],
          isLoading: false,
        });
        console.log(error);
      }
    };

    loadAuth();
  }, []);

  return auth;
};
