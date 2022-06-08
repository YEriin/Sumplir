import styles from "../../styles/Whiteboard.module.css";
import BoardItem from "./BoardItem";

const ColumnBoard = () => {
  return (
    <div className={styles.columnBoardContainer}>
      <div className={styles.columnBoardHead}>
        <span className={styles.item}>
          <slot />
        </span>
        <div className={styles.item}>
          <button>+</button>
          <button>...</button>
        </div>
      </div>
      <div className={styles.columnBoardItemList}>
        {/* {#each data as { v }, i}
      <BoardItem content={`${v}`} />
    {/each} */}
      </div>
    </div>
  );
};

export default ColumnBoard;
