import Card from "../Card/Card.jsx";
import styles from "./Cardlist.module.css";
function Cardlist({ recent }) {
	return (
		<>
			{recent && <h2 className={styles.cardlist_title}>Recent</h2>}
			<Card recent={recent} />
			<Card recent={recent} />
		</>
	);
}

export default Cardlist;
