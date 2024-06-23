import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "./selectors";
import { increment,
         decrement,
         reset
 } from "./actions";
 import { CounterWidget } from "../../components/CounterWidget/CounterWidget";


function CounterPage() {
  const counter = useSelector(getCounter)
  const dispatch = useDispatch();// отправляем action

  const hendleIncrementBtnClick = () => {
    dispatch(increment());
  }

  const hendleDecrementBtnClick = () => {
    dispatch(decrement())
  }

  const hendleResetBtnClick = () => {
    dispatch(reset())
  }
 
  return (
    <div>
      <CounterWidget 
          counter={counter}
          onIncrementBtnClick={hendleIncrementBtnClick}
          onDecrementBtnClick={hendleDecrementBtnClick}
          onResetCounter={hendleResetBtnClick}
          
          />
     
    </div>
   
  )
}

export default CounterPage
