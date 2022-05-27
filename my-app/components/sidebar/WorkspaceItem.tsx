import styles from "../../styles/Sidebar.module.css";

interface WorkspaceItemProps {
  name: string;
  isCurrentItemSelected: boolean;
}

const WorkspaceItem = (props: WorkspaceItemProps) => {
  const { name, isCurrentItemSelected } = props;

  return (
    <div
      className={`${styles.workspaceItem} ${
        isCurrentItemSelected ? styles.selectedItem : ""
      }`}
      title={name}
    >
      <span className={styles.ellipsisText}>{name}</span>
    </div>
  );
};

export default WorkspaceItem;
