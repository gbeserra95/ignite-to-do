import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';

export function App() {
	return (
		<div>
			<Header />
			<main className={styles.wrapper}>
				<h1>Hello world</h1>
			</main>
		</div>
	);
}
