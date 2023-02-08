import React, { useContext } from 'react'
import { LangContext } from '../../Contexte/langContexte'

function Dashboard() {
    const lang = useContext(LangContext)
    
  return (
    <div>{lang.home}</div>
  )
}

export default Dashboard