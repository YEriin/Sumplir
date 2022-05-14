import { writable } from "svelte/store";

const workspaces = Array.from({ length: 30 }, (_, idx) => `W${idx}`);
const boards = Array.from({ length: 30 }, (_, idx) => `B${idx}`);

interface Board {
  name: string;
}

interface Workspace {
  name: string;
  boards: Board[];
}

interface Store {
  createdAt: string;
  currentWorkspaceKey: string;
  workspaces: Workspace[];
}

export const workspaceStore = writable<Store>({
  createdAt: new Date().toISOString(),
  currentWorkspaceKey: null,
  workspaces: workspaces.map((name) => ({
    name: name.repeat(20),
    boards: boards.map((name) => ({ name })),
  })),
});
