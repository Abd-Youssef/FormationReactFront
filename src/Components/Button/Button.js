import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <>
    <button className={props.className} onClick={props.onClick}  >{props.name}</button>
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
