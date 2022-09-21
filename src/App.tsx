import { Header } from './components/Header';

import './global.css';
import styles from './App.module.css';

export function App() {
	return (
		<div>
			<Header />
			<main className={styles.wrapper}>
				<form className={styles.form}>
					<input
						className={styles.input}
						type='text'
						placeholder='Adicione uma nova tarefa'
					/>
					<button type='submit'>Criar</button>
				</form>
				<div>
					<div>
						<strong>Tarefas criadas</strong>
						<span>5</span>
					</div>
					<div>
						<strong>Concluídas</strong>
						<span>2 de 5</span>
					</div>
				</div>
			</main>
		</div>
	);
}
