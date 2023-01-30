import React from 'react'
import PropTypes from 'prop-types'

export default function Input(props) {
    let className = ["default-input "]
    if (props.className) {
        className.push(props.className)
        
    }
  return (
    <div className='space-between py-0 width-100'>
        {props.label &&<label className ="form-label "  >{props.label}</label>}
        <input  className ={className.join(' ')}
                type = {props.type}
                value={props.value}
                name = {props.name}
                id = {props.id}
                placeholder = {props.placeholder} 
                onChange ={props.onChange}
                
                />
    </div>
  )
}
  Input.defaultProps= {
    type:"String",
    className :"",
    value : "",
    name : "",
    id : "",
    placeholder : "texte",
    onChange : () => {return null},
    
  }
  Input.propTypes = {
    type:PropTypes.string ,
    label: PropTypes.string ,
    value : PropTypes.string ,
    name : PropTypes.string ,
    id : PropTypes.string ,
    placeholder : PropTypes.string ,
    className : PropTypes.string ,
  }

