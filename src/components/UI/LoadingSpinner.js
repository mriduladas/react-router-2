import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
  // <div className={classes['sk-pulse']}></div>
  <div className={classes["lds-spinner"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadingSpinner;
