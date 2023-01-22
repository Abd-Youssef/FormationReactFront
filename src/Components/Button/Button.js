import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    let className = ["default-button"]
    if (props.className) {
        className.push(props.className)
        
    }
  return (
    <>
    <button className={className.join(' ')} onClick={props.onClick}  >{props.name}</button>
    </>
  )
}
Button.defaultProps={
    className : "btn",
    name :"" ,
    onClick: () =>{return null}
}
Button.propTypes={
    className: PropTypes.string ,
    name:PropTypes.string,

}
