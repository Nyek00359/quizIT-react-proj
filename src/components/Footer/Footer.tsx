import styles from './Footer.module.css';
import type { FooterProps } from '../../props/Config';

const Footer: React.FC<FooterProps> = ({ Contacts = "+639105530865" , Copyright = "QuizIT"}) =>{
  return (
    <>
        <div className={styles.Footer}>
            <div className={styles.Contacts}>
                <span role="img" aria-label="phone">📞</span>
                {Contacts}
            </div>
            <div className={styles.Copyright}>© 2025 {Copyright}. All rights reserved.</div>
        </div>
    </>
  );
}

export default Footer;
