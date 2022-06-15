import styles from "./styles.css";

export const links = () => [
    {rel: "stylesheet", href: styles},
];

const Nav = () => {
    return (
        <div>
            <span>Logo</span>
            <span>Sumplir</span>
            <input/>
        </div>
    );
};

export default Nav;
