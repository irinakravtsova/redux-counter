export function CounterWidget({
  counter,
  isLoading,
  isError,

  isSaveSuccess,
  isSaveLoading,
  isSaveError,

  onIncrementBtnClick,
  onDecrementBtnClick,
  onResetCounter,
  onRetryBtnClick,
  onSaveBtnClick
}) {
  if (isLoading) {
    return (
      <div>
        <p>Загрузка....</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <p>Ошибка</p>
        <button onClick={onRetryBtnClick}>Повторить</button>
      </div>
    )
  }
  return (
    <div>
        <p>{counter}</p>
        <button onClick={onIncrementBtnClick}>+1</button>
        <button onClick={onDecrementBtnClick}>-1</button>
        <button onClick={onResetCounter}>Clear</button>
        <button disabled={isSaveLoading} onClick={onSaveBtnClick}>Save</button>
        { isSaveLoading && <p>Сохраняю счетчик...</p> }
        { isSaveError && <p>Ошибка сохраниня</p> }
        { isSaveSuccess && <p>Успешное сохранение</p> }

    </div>
  )
}