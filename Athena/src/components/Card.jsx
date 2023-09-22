import React from 'react'
import Dropdown from './Dropdown'
import Input from './Input'
import Footer from './Footer'
import Checkbox from './Checkbox'
const Card = (props) => {
  return (
    <div>
         <h4>{props.selected}</h4>
        <h2>Inputs</h2>
        <div>
        {props.dropdown&&(
          <div>
            {props.option && <Dropdown label={props.label} option={props.option}/>}
            {props.option2 && <Dropdown label={props.label2} option={props.option2}/>}
            {props.option3 && <Dropdown label={props.label3} option={props.option3}/>}
            {props.option4 && <Dropdown label={props.label4} option={props.option4}/>}
            {props.option5 && <Dropdown label={props.label5} option={props.option5}/>}
          </div>
        )}
        {props.input&&(
          <div>
            {props.title && <Input title={props.title} />}
            {props.title2 && <Input title={props.title2} />}
            {props.title3 && <Input title={props.title3} />}
            {props.title4 && <Input title={props.title4} />}
            {props.title5 && <Input title={props.title5} />}
          </div>
        )}
        {props.checkbox&&(
          <div>
            {props.checkVal && <Checkbox checkVal={props.checkVal} />}
            {props.checkVal2 && <Checkbox checkVal={props.checkVal2} />}
            {props.checkVal3 && <Checkbox checkVal={props.checkVal3} />}
            {props.checkVal4 && <Checkbox checkVal={props.checkVal4} />}
            {props.checkVal5 && <Checkbox checkVal={props.checkVal5} />}
          </div>
        )}
        </div>
        <Footer closeInnerModal={props.closeInnerModal} timeframe={props.timeframe}/>
    </div>
  )
}


export default Card