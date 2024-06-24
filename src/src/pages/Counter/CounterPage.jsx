
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCounter,
          getIsLoading,
          getIsError,

          getIsSaveSucces,         
          getIsSaveError,
          getIsSaveLoading

 } from "./selectors";
import { increment,
         decrement,
         reset,
         load,
         save
 } from "./actions";
 import { CounterWidget } from "../../components/CounterWidget/CounterWidget";


function CounterPage() {
  const counter = useSelector(getCounter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  const isSaveSuccess = useSelector(getIsSaveSucces);
  const isSaveLoading = useSelector(getIsSaveLoading);
  const isSaveError = useSelector(getIsSaveError);

  const dispatch = useDispatch();// отправляем action

  useEffect(() => {
    dispatch(load());
  }, []);

  const hendleIncrementBtnClick = () => {
    dispatch(increment());
  }

  const hendleDecrementBtnClick = () => {
    dispatch(decrement())
  }

  const hendleResetBtnClick = () => {
    dispatch(reset())
  }

  const hendleRetryBtnClick = () => {
    dispatch(load())
  }

  const hendleSaveBtnClick = () => {
    dispatch(save(counter))
  }
 
  return (
    <div>
      <CounterWidget 
          counter={counter}
          isLoading={isLoading}
          isError ={isError}

          isSaveLoading={isSaveLoading}
          isSaveSuccess={isSaveSuccess}
          isSaveError={isSaveError}

          onIncrementBtnClick={hendleIncrementBtnClick}
          onDecrementBtnClick={hendleDecrementBtnClick}
          onResetCounter={hendleResetBtnClick}
          onRetryBtnClick={hendleRetryBtnClick}
          onSaveBtnClick={hendleSaveBtnClick}
       
          
          />
     
    </div>
   
  )
}

export default CounterPage
