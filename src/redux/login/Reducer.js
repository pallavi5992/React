import { SETLOGIN } from "./Type"

const initialState = {   
  login:'',
}

const Reducer=(state = initialState, action)=>{ 
    console.log(action,'action---') 
  switch (action.type) {      
    case SETLOGIN:
      return {       
        login: action.payload,
      }
    default:
      return state
  }
}

export default Reducer  