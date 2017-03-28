import React from 'react'

const InputField = function (props) {
  return (
    <div>
      <label>{props.label}</label>
      <input value={props.value}
        onChange={props.onChange} />
    </div>
  )
}

InputField.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.string.isRequired
}

export default InputField
