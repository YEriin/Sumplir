import Nav, { links as NavLinks } from "../components/nav";
import Sidebar from "../components/sidebar";
import WhiteBoard from "../components/whiteboard";

export function links() {
  return [...NavLinks()];
}

export default function Index() {
  return (
    <main>
      <Nav />
      <div className="content">
        <Sidebar />
        <WhiteBoard />
      </div>
    </main>
  );
}
