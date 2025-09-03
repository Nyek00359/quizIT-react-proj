import styles from './TopBar.module.css';

type TopBarProps = {
    Logo?: string; // URL or path to the logo image
    Nav?: string[];
};

function TopBar({ Logo = "QuizIT" , Nav = ["Home", "About", "Contact"] }: TopBarProps) {
  return (
    <header className={styles.MyTopBar}>
      <div className={styles.Logo}>
        {Logo}
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
