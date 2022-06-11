import { LOGIN, SETLOGIN } from "./Type"

const loginAction = (data,userId)=> {  
  return {
    type: SETLOGIN,
    payload:data
  
  }

}

export default loginAction