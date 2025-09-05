import styles from './TopBar.module.css';
import type { TopBarProps } from '../../props/Config';

const TopBar: React.FC<TopBarProps> = ({ Logo = "QuizIT" , Nav = ["Join", "Host", "About"] }) =>{
  return (
    <header className={styles.MyTopBar}>
      <div className={styles.Logo}>
        {typeof Logo === "string" && /\.(png|jpg)$/i.test(Logo)
          ? <img src={Logo} alt="Logo" />
          : Logo}
      </div>
      {Nav.map((name) => (
        <a key={name} href={`/${name.toLowerCase()}`}>
          {name}
        </a>
      ))}
    </header>
  );
}

export default TopBar;
