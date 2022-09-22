import clipboard from '../assets/clipboard.svg';

import styles from './EmptyList.module.css';

export function EmptyList() {
	return (
		<div className={styles.wrapper}>
			<img src={clipboard} alt='' />
			<div className={styles.text}>
				<strong>Você ainda não tem tarefas cadastradas</strong>
				<span>Crie tarefas e organize seus itens a fazer</span>
			</div>
		</div>
	);
}
