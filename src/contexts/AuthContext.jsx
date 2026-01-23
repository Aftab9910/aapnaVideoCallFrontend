import axios from "axios";
import httpStatus from "http-status";
import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";
import server from "../environment";

export const AuthContext = createContext(null);

const client = axios.create({
  baseURL: `${server}/api/v1/users`,
});

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  // const router = useNavigate();

  const handleRegister = async (name, username, password) => {
    try {
      const request = await client.post("/register", {
        name,
        username,
        password,
      });

      if (request.status === httpStatus.CREATED) {
        return request.data.message;
      }

      return "Registration failed";
    } catch (err) {
      return (
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const request = await client.post("/login", {
        username,
        password,
      });

      const token = request?.data?.token;

      if (request.status === httpStatus.OK && token) {
        localStorage.setItem("token", token);
        return "Login successful";
      }

      return request.data?.message || "Login failed";
    } catch (err) {
      return (
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
    }
  };

  const getHistoryOfUser = async () => {
    try {
      const request = await client.get("/get_all_activity", {
        params: { token: localStorage.getItem("token") },
      });
      return request?.data || [];
    } catch (err) {
      console.error("History error:", err);
      return [];
    }
  };

  const addToUserHistory = async (meetingCode) => {
    try {
      const request = await client.post("/add_to_activity", {
        token: localStorage.getItem("token"),
        meeting_code: meetingCode,
      });
      return request?.data || { message: "Failed to add" };
    } catch (err) {
      console.error("Add history error:", err);
      return { message: "Failed to add history" };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        handleRegister,
        handleLogin,
        getHistoryOfUser,
        addToUserHistory,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
