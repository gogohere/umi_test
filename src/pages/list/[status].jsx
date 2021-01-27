import React, { useEffect, useState } from 'react'

const List = (props)=>{

  const initSearchState = {
    search:''
  }


  /** searchState */
  const [searchState,setSearchState] = useState(initSearchState)
  /** reqState */
  const [reqState,setReqState] = useState(initSearchState)

  const handleChangeSearch = e => {
    setSearchState({ ...searchState, search: e.target.value })
  }

  const handleClickSearch = () => {
    setReqState({...searchState})
  }

  useEffect(()=>{
    // 这里放请求函数 请求的时候参数从reqState里拿
    getList()
  },[reqState])

  const getList = () =>{
    
  }

  return (
    <div>
      <input onChange={handleChangeSearch} />
      <button onClick={handleClickSearch}>查询</button>
    </div>
  )

}

export default List