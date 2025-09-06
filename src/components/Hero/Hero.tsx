import styles from '../../css/Hero.module.css';
import type { HeroProps } from '../../props/Config';

const Hero: React.FC<HeroProps> = ({ Tagline = "Tagline" , Desctiption = "Description",Logo = " ../../src/assets/images/logo.png" }) =>{
  return (
    <>
        <div className={styles.Hero}>
            <div className={styles.Tagline}>
                {Tagline}
                <div className={styles.Description}>{Desctiption}</div> 
                <div className={styles.GetStarted}>Get Started</div>
            </div>
            <div className={styles.Logo}>
              <img src={Logo} alt="Logo" />
            </div>
            
        </div>
    </>
  );
}

export default Hero;
