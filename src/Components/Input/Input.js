import React from 'react'
import PropTypes from 'prop-types'

export default function Input(props) {
    let className = ["input-border width-100 height-20px mx-16 "]
    if (props.className) {
        className.push(props.className)
        
    }
  return (
    <div className='py-0 width-100 px-16 py-16'>
        {props.label &&<label className ="m-2 form-label "  >{props.label}</label>}
        <div className ={"flex  "}>

        <input  className ={className.join(' ')} 
                type = {props.type}
                value={props.value}
                name = {props.name}
                id = {props.id}
                placeholder = {props.placeholder} 
                onChange ={props.onChange}
                required="required"
                
                />
        </div>
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

