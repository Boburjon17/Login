import axios from "./api";

// const BASE_URL = "http://localhost:3000/api";

const authService = {
  async UserRegister(user) {
    const response = await axios.post("/users", {user});
    return response.data;
  },
  async  UserLogin(user){
    const {data}= await axios.post("/users/login", {user})
    return data

  },
    async  GetUser()  {
     const {data}=await axios.get("/user")
     return data
  }
};
export default authService;
