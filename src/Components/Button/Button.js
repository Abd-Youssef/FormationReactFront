import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
    let className = ["default-button pointer"]
    if (props.className) {
        className.push(props.className)
        
    }
  return (
    <>
    <button className={className.join(' ')} onClick={props.onClick} disabled={props.disabled} >{props.name}</button>
    </>
  )
}
Button.defaultProps={
    className : "btn",
    name :"" ,
    onClick: () =>{return null},
    disabled:false,
}
Button.propTypes={
    className: PropTypes.string ,
    name:PropTypes.string,

}
