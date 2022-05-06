import { writable } from "svelte/store";

const workspaces = Array.from({ length: 30 }, (_, idx) => `W${idx}`);

export const workspaceStore = writable({
  createdAt: new Date().toISOString(),
  workspaces: workspaces.map((name) => ({ name })),
});
