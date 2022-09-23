import styles from './Header.module.css';
import logo from '../assets/images/logo-header.svg';

export function Header() {
  return (
    <header>
      <h1 className={styles.header}><img src={logo} /></h1>
    </header>
  )
}
