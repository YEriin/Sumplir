import styles from "../../styles/Whiteboard.module.css";

interface BoardItemProps {
  content: string;
}

const BoardItem = (props: BoardItemProps) => {
  const { content } = props;

  return (
    <div className={styles.item}>
      <div className={styles.contentWrapper}>
        <span>{content}</span>
      </div>
      <div className={styles.operationWrapper}>
        <span>...</span>
      </div>
    </div>
  );
};

export default BoardItem;
