import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { EmptyList } from './components/EmptyList';
import { ListItem } from './components/ListItem';

import { PlusCircle } from 'phosphor-react';

import './global.css';
import styles from './App.module.css';
export interface Task {
	id: string;
	completed: boolean;
	content: string;
}

export function App() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [newTask, setNewTask] = useState('');

	const isTasksEmpty = tasks.length === 0;
	const isNewTaskEmpty = newTask.trim() === '';

	function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
		setNewTask(event.target.value);
	}

	function handleSubmitForm(event: FormEvent) {
		event.preventDefault();

		setTasks([
			...tasks,
			{
				id: uuidv4(),
				completed: false,
				content: newTask,
			},
		]);

		setNewTask('');
	}

	function handleDeleteTask(id: string) {
		const updatedTasks = tasks.filter(task => task.id !== id);
		setTasks(updatedTasks);
	}

	return (
		<div>
			<Header />
			<main className={styles.wrapper}>
				<form className={styles.form} onSubmit={handleSubmitForm}>
					<input
						className={styles.input}
						type='text'
						placeholder='Adicione uma nova tarefa'
						onChange={handleInputChange}
						value={newTask}
					/>
					<button type='submit' disabled={isNewTaskEmpty}>
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
							<ListItem
								key={task.id}
								task={task}
								onDelete={handleDeleteTask}
							/>
						))}
					</ul>
				)}
			</main>
		</div>
	);
}
