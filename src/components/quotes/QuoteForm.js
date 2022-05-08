
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import Card from '../UI/Card';
import { useRef } from 'react';
import { useState } from 'react';
import { Fragment } from 'react';
import { Prompt } from 'react-router-dom';

const QuoteForm = (props) => {

  const [isEntering, setIsEntering] =useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const onFocusHandler = () => {
    setIsEntering(true)
  }

  const onFormSubmitHandler=()=>{
    setIsEntering(false);
  }

  return (
    <Fragment>
    <Prompt when={isEntering} message={(location) => 'DO you want to leave? All your entered values will be lost.'} />
    <Card>
      <form onFocus={onFocusHandler}  className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button  onClick={onFormSubmitHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </Fragment>
  );
};

export default QuoteForm;
