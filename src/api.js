import axios from "axios"



const request = axios.create({
  baseURL:"https://youtube.googleapis.com/youtube/v3/",
  params :{
    key :"AIzaSyA7_NJw97b3K5-iz_2GsMI7HrZghpGjEqw",
  },


})

export default request;
