import styles from '../../css/Wrapper.module.css';
import type { WrapperProps } from '../../props/Config';
import Container from '../Container/Container';
const Wrapper: React.FC<WrapperProps> = ({containers}) =>{

  return (
    <>
        <div className={styles.Wrapper}>
          {containers?.map((container) => (
            <div className={styles.Containers}>
              <div className={styles.Card}>
                <h1 className={styles.Title}>{container.Title} </h1>
                    <Container cards={container.cards}/>
            </div>
          </div>))}
        </div>
    </>
  );
}

export default Wrapper;
