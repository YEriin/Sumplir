import Nav, { links as NavLinks } from "../components/nav";
import Sidebar, { links as SidebarLinks } from "../components/sidebar";
import WhiteBoard, { links as WhiteboardLinks } from "../components/whiteboard";

export function links() {
  return [...NavLinks(), ...SidebarLinks(), ...WhiteboardLinks()];
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
