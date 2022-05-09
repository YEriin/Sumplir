<script lang="ts">
  import { workspaceStore } from "../store/index";

  let workspaces;
  let currentWorkspace;

  const unsubscribe = workspaceStore.subscribe((store) => {
    workspaces = store.workspaces;
    currentWorkspace = store.currentWorkspaceKey;
  });
</script>

<div class="container">
  {#each workspaces as { name }, idx}
    <div class="workspaceItem">{name}</div>
  {/each}
  <div class="workspaceItem">+</div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    width: 64px;
    height: calc(100vh - 48px);
    overflow-y: auto;

    border-right: 1px solid rgb(99, 154, 17);

    padding: 10px 0;

    box-sizing: border-box;
  }

  .workspaceItem {
    width: 48px;
    height: 48px;
    border: 1px solid rgb(121, 25, 25);
    flex-shrink: 0;
  }
</style>
