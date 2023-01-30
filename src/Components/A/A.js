import React from 'react'
import PropTypes from 'prop-types'

export default function A(props) {
    let className = ["default-A"]
    if (props.className) {
        className.push(props.className)
        
    }
  return (
    <>
    <a className={className.join(' ')} onClick={props.onClick}  >{props.name}</a>
    </>
  )
}
A.defaultProps={
    className : "",
    name :"" ,
    onClick: () =>{return null}
}
A.propTypes={
    className: PropTypes.string ,
    name:PropTypes.string,

}
