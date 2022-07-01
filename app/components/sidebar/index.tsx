import styles from "./styles.css";
import AddButton from "./AddButton";
import WorkspaceItem from "./WorkspaceItem";

interface Board {
    name: string;
}

interface Workspace {
    name: string;
    boards: Board[];
}

export const links = () => [
    {rel: "stylesheet", href: styles},
];

const Sidebar = () => {
    const workspaces: Workspace[] = [{name: "a", boards: []}];

    return (
        <div className="container">
            {workspaces.map(({name}, idx) => (
                <WorkspaceItem key={idx} name={name} isCurrentItemSelected={false}/>
            ))}
            <AddButton/>
        </div>
    );
};

export default Sidebar;
