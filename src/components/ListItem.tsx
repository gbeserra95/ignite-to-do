import { Task } from '../App';
import { Trash } from 'phosphor-react';

import styles from './ListItem.module.css';

interface ListItemProps {
	task: Task;
	onDelete: (id: string) => void;
	onCheck: (id: string) => void;
}

export function ListItem({ task, onDelete, onCheck }: ListItemProps) {
	function handleOnDeleteTask() {
		onDelete(task.id);
	}

	function handleOnCheck() {
		onCheck(task.id);
	}

	return (
		<li className={styles.item}>
			<input
				className={styles.checkbox}
				checked={task.completed}
				type='checkbox'
				onChange={handleOnCheck}
			/>
			<span className={task.completed ? styles.checked : undefined}>
				{task.content}
			</span>
			<div className={styles.trash} onClick={handleOnDeleteTask}>
				<Trash size={19} />
			</div>
		</li>
	);
}
