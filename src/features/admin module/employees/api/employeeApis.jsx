import { axiosInstance } from "../../../../config/axios.Instance";

export let getAllEmployees =async ()=>{
    try {
        let res = await axiosInstance.get('employee');
        // console.log(res);
        return res.data.data
    } catch (error) {
        console.log("error in all employee api",error);
        
    }
    
}

export let createEmployee = async (data) => {
  try {
    let res = await axiosInstance.post("/employee/create", data);
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log("error in create emp api", error);
  }
};