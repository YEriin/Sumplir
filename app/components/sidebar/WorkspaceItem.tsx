interface WorkspaceItemProps {
    name: string;
    isCurrentItemSelected: boolean;
}

const WorkspaceItem = (props: WorkspaceItemProps) => {
    const {name, isCurrentItemSelected} = props;

    return (
        <div
            className={`workspaceItem ${
                isCurrentItemSelected ? "selectedItem" : ""
            }`}
            title={name}
        >
            <span className="ellipsisText">{name}</span>
        </div>
    );
};

export default WorkspaceItem;
