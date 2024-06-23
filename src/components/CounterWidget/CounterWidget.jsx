export function CounterWidget({
  counter,
  onIncrementBtnClick,
  onDecrementBtnClick,
  onResetCounter
}) {
  return (
    <div>
    <p>{counter}</p>
    <button onClick={onIncrementBtnClick}>+1</button>
    <button onClick={onDecrementBtnClick}>-1</button>
    <button onClick={onResetCounter}>Сбросить</button>
  </div>
  )
}