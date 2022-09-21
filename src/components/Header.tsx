import logo from '../assets/logo.svg';
import styles from './Header.module.css';

export function Header() {
	return (
		<div className={styles.header}>
			<img src={logo} alt='todo' />
		</div>
	);
}
