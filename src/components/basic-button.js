import React from 'react'

const BasicButton = function (props) {
  const className = `f6 dim ph3 pv2 mb2 dib ${props.color || 'white'} bg-${props.backgroundColor || 'dark-blue'}`

  return (
    <div>
      <button
        className={className}
        onClick={props.onClick}>
        {props.children || 'Submit'}
      </button>
    </div>
  )
}

BasicButton.propTypes = {
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default BasicButton
