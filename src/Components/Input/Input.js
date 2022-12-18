import React from 'react'
import PropTypes from 'prop-types'

export default function Input(props) {
  return (
    <>
        {props.label &&<label>{props.label}</label>}
        <input  className ={props.className}
                value={props.value}
                name = {props.name}
                id = {props.id}
                placeholder = {props.placeholder} 
                onChange ={props.onChange}
                
                />
    </>
  )
}
  Input.defaultProps= {
    className :"input",
    value : "",
    name : "",
    id : "",
    placeholder : "texte",
    onChange : () => {return null},
    
  }
  Input.propTypes = {
    label: PropTypes.string ,
    value : PropTypes.string ,
    name : PropTypes.string ,
    id : PropTypes.string ,
    placeholder : PropTypes.string ,
    className : PropTypes.string ,
  }

