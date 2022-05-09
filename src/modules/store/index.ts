import { writable } from "svelte/store";

const workspaces = Array.from({ length: 30 }, (_, idx) => `W${idx}`);
const boards = Array.from({ length: 30 }, (_, idx) => `B${idx}`);

export const workspaceStore = writable({
  createdAt: new Date().toISOString(),
  currentWorkspaceKey: null,
  workspaces: workspaces.map((name) => ({
    name,
    boards: boards.map((name) => ({ name })),
  })),
});
