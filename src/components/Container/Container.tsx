import styles from '../../css/Container.module.css';
import type { ContainerProps } from '../../props/Config';
import Card from '../Card/Card';
const Container: React.FC<ContainerProps> = ({cards}) =>{
  return (
    <>
        <div className={styles.Container}>
            {cards?.map((card) => (
              <div className={styles.Card}>
                <Card key={card.id} id={card.id} title={card.title} description={card.description} />
            </div>))}
            
        </div>
    </>
  );
}

export default Container;
