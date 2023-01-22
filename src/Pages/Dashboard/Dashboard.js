import React, { useContext, useState } from 'react'
import { LangContext } from '../../Contexte/langContexte'

function Dashboard() {
    const lang = useContext(LangContext)
    const [count,setcount]=useState(0)
    
  return (
    <div>{lang.home}</div>
  )
}

export default Dashboard