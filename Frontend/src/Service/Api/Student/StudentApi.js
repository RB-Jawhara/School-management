import AxiosClient from "../../../api/axios";
export default function StudentApi () {
  return {
  
  getCsrfToken:async() => {
    return await AxiosClient.get('/sanctum/csrf-cookie',
      {
  baseURL: 'http://127.0.0.1:8000'
})
},
login:async(email,password) => {
  return await AxiosClient.post('/login',{email,password})
},
  getUser:async() => {
  return await AxiosClient.get("/user");
  
  
  //then(
    //(value) => {
     // if(value.status === 204){
       // window.localStorage.setItem('ACCESS_TOKEN','test')

       //navigate(STUDENT_DASHBOARD_ROUTE)
      //}

  //}//)
  }
};
};





