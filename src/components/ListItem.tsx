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
			<span>
				Integer urna interdum massa libero auctor neque turpis turpis
				semper. Duis vel sed fames integer.
			</span>
			<div className={styles.trash}>
				<Trash size={19} />
			</div>
		</li>
	);
}
