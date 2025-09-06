import styles from '../../css/Card.module.css';
import type { CardProps } from '../../props/Config';

const Card: React.FC<CardProps> = ({description,id,title}) =>{
  return (
    <>
        <div className={styles.Card}>
            <div className={styles.CardTitle}>{title}</div>
            <div className={styles.CardDescription}>{description}</div>
        </div>
    </>
  );
}

export default Card;
