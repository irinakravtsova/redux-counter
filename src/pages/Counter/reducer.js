import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_RESET,

    COUNTER_LOADING,
    COUNTER_LOADING_SUCCES,
    COUNTER_LOADING_ERROR,

    COUNTER_SAVE_LOADING,
    COUNTER_SAVE_LOADING_SUCCES,
    COUNTER_SAVE_LOADING_ERROR
       
} from './constant'

const initialState = { //объект state
  value: null,

  isLoading: false,
  isError: false,

  isSaveSucces: false,
  isSaveLoading: false,
  isSaveError: false
  
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case COUNTER_LOADING:
      return {
        ...state,//cоздаем state заново
        isLoading: true,
        isError: false
      }

    case COUNTER_LOADING_SUCCES:
        return {
          ...state,//cоздаем state заново
          isLoading: false,
          value: action.payload
        }

    case COUNTER_LOADING_ERROR:
        return {
          ...state,//cоздаем state заново
          isLoading: false,
          isError: true
        } 
        
    case COUNTER_SAVE_LOADING:
      return {
        ...state,//cоздаем state заново
        isSaveLoading: true,
        isSaveError: false,
        isSaveSucces: false
      }

    case COUNTER_SAVE_LOADING_SUCCES:
        return {
          ...state,//cоздаем state заново
          isSaveLoading: false,
          isSaveSucces: false
        }

    case COUNTER_SAVE_LOADING_ERROR:
        return {
          ...state,//cоздаем state заново
          isSaveLoading: false,
          isSaveError: true
        }     
    
    case COUNTER_INCREMENT:
      return {
        ...state,//cоздаем state заново
        value: state.value + 1
      }

      case COUNTER_DECREMENT:
        return {
          ...state,
          value: state.value - 1
        }

      case COUNTER_RESET:
        return {
         
           ...state,
           value: 0
          }
            
           
    default:
      return {
        ...state//возвращаем новый стейт, кот. является полной копией предыдущего
      }
  }
}