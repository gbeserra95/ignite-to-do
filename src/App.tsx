import { Header } from './components/Header';

import { PlusCircle } from 'phosphor-react';

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
					<button type='submit'>
						Criar
						<PlusCircle size={20} />
					</button>
				</form>
				<div className={styles.infoWrapper}>
					<div className={styles.createdTasks}>
						<strong>Tarefas criadas</strong>
						<span>5</span>
					</div>
					<div className={styles.completedTasks}>
						<strong>Concluídas</strong>
						<span>2 de 5</span>
					</div>
				</div>
			</main>
		</div>
	);
}
