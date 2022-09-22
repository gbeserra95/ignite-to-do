import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './ListItem.module.css';

export function ListItem() {
	const [circleWeight, setCircleWeight] = useState<'duotone' | undefined>(
		undefined
	);

	return (
		<li className={styles.item}>
			<input className={styles.checkbox} type='checkbox' />
			<span>Hello world</span>
			<Trash size={24} />
		</li>
	);
}
