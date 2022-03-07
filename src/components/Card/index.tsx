import classes from './index.module.scss';

const Card = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Regular Text</span>
      <span className={classes.subTitle}>Bold Text</span>
    </div>
  );
};

export default Card;
