import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_RESET    
} from './constant';

export const increment = () => {
  return {
    type: COUNTER_INCREMENT
  }
}

export const decrement = () => {
  return {
    type: COUNTER_DECREMENT
  }
}

export const reset = () => {
  return {
    type: COUNTER_RESET
  }
}