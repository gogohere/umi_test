import React, { useEffect, useState } from 'react'
import { history } from "umi";
import "./index.css"

export default (props) => {
  const { children } = props

  const jumpRoute =(status)=>{
    history.push(`/list/${status}`)
  }

  const goPrePage = () => {
    history.push('/preRendPage')
  }

  return(
    <div style={{display:"flex",height:"100vh"}}>
      <div className="menuContainer">
        <div onClick={()=>jumpRoute(1)}>goPending</div>
        <div onClick={()=>jumpRoute(2)}>goHandle</div>
        <div onClick={()=>jumpRoute(3)}>goCompleted</div>
        <div onClick={goPrePage}>goPrePage</div>
      </div>

      <div>
        { children }
      </div>
    </div>
  )
  
}
