import React from 'react'
import BasicButton from '../components/basic-button'
import InputField from '../components/input-field'
import Card from '../components/card'
import {connector} from '../store/index'

const FortunePage = function (props) {
  return (
    <div>
      <header>
        <h1>Fortune Teller</h1>
      </header>
      <main>
        <form onSubmit={e => {
          e.preventDefault()
          props.predict(
            props.tempAge,
            props.tempLetter,
            props.tempColor
          )
        }}>
          <InputField label="Age" value={props.tempAge} onChange={e => props.update('tempAge', e.target.value)} />
          <InputField label="First Letter of Name" value={props.tempLetter} onChange={e => props.update('tempLetter', e.target.value)} />
          <InputField label="Eye Color" value={props.tempColor} onChange={e => props.update('tempColor', e.target.value)} />
          <BasicButton>Click Here to Know All Things</BasicButton>
        </form>
        <div>
          {props.fortune
            ? <Card title="Fortune" image="http://lorempixel.com/400/200/animals/">
            {props.fortune}
          </Card> : null
        }
        </div>
      </main>
    </div>
  )
}

export default connector(FortunePage)
