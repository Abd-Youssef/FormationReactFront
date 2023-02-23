import React from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  let className = ["input-border width-100  "];
  if (props.className) {
    className.push(props.className);
  }
  return (
    <div className="py-0 width-100 px-16 py-16">
      {props.label && <label className="m-2 form-label ">{props.label}</label>}
      <div className={"flex mx-16 "}>
        <textarea
          className={className.join(" ")}
          type={props.type}
          value={props.value}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onChange}
          required="required"
          rows={props.rows}
          cols={props.cols}
        />
      </div>
    </div>
  );
}
Textarea.defaultProps = {
  type: "String",
  className: "",
  value: "",
  name: "",
  id: "",
  rows: "4",
  cols: "50",
  placeholder: "texte",
  onChange: () => {
    return null;
  },
};
Textarea.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
