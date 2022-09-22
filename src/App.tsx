import { Header } from './components/Header';
import { EmptyList } from './components/EmptyList';
import { ListItem } from './components/ListItem';

import { PlusCircle } from 'phosphor-react';

import './global.css';
import styles from './App.module.css';

const tasks = [
	{ completed: true, content: 'HTML' },
	{ completed: true, content: 'CSS' },
	{ completed: true, content: 'JavaScript' },
	{ completed: true, content: 'React' },
	{ completed: false, content: 'React Native' },
	{ completed: false, content: 'Node' },
];

const isTasksEmpty = tasks.length === 0;

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
				{isTasksEmpty ? (
					<EmptyList />
				) : (
					<ul className={styles.list}>
						{tasks.map(task => (
							<ListItem key={task.content} />
						))}
					</ul>
				)}
			</main>
		</div>
	);
}
