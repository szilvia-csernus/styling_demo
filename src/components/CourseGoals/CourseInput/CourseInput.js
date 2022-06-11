import React, { useState } from 'react';

import styled from 'styled-components';

import Button from '../../UI/Button/Button';

const FormControl = styled.div`

  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => !props.isValid && 'red'}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  border-color: ${props => !props.isValid && 'red'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}
`

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true)

    const goalInputChangeHandler = event => {
        setEnteredValue(event.target.value);
        setIsValid(true)
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            setEnteredValue('');
            return
        }
        props.onAddGoal(enteredValue);
        setEnteredValue('');
        setIsValid(true)
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl isValid={isValid}>
                <label>Course Goal</label>
                <input type="text" placeholder="enter goal here" onChange={goalInputChangeHandler} value={enteredValue}/>
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;