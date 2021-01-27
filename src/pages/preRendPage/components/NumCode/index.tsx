import React, { useEffect, useState, FC, useMemo } from "react";
import { useDispatch, useSelector, testState } from "umi";

const NumCode = () => {
  const dispatch = useDispatch()
  const dvaState:testState = useSelector((state: any) => state.test_model)

  const [num, setNum] = useState(1)
  const { listState } = dvaState

  useEffect(() => {
    updateToDva()
  }, [num])

  const handleAddNum = () => {
    setNum(num +1)
  }

  const updateToDva = () => {
    const newState = [...listState, num]
    dispatch({
      type:"test_model/saveState",
      payload:{
        listState: newState
      }
    })
  }

  const renderNum = useMemo(() => (
    <>
      { 
        listState.map(_item => (
          <div key={_item}>{_item}</div>
        )) 
      }
    </>
  ), [listState])

  console.log("child_render");

  return (
    <div>
      { 
        renderNum
      }
      <button onClick={handleAddNum}>点我加数字</button>
    </div>
  )

}

export default NumCode;