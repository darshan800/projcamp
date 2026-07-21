import axiosInstance from "@/api/axios";

const login=async (data)=> {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response;
   
    
  } catch (error) {
    throw error
  }
}

axios.post("/auth/register");
axios.post("/auth/login");
axios.post("/auth/logout");
axios.post("/auth/refresh-token");
axios.post("/auth/change-password");
axios.post("/auth/forgot-password");
axios.post("/auth/reset-password/id");
axios.post("/auth/resend-email-verification");

axios.get("/auth/current-user");
axios.get("/auth/verify-email/id");
