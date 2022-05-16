<script lang="ts">
  import { workspaceStore } from "../../store/index";
  import WorkspaceItem from "./WorkspaceItem.svelte";

  let workspaces;

  const unsubscribe = workspaceStore.subscribe((store) => {
    workspaces = store.workspaces;
  });
</script>

<div class="container">
  {#each workspaces as { name }, idx}
    <WorkspaceItem {name} key={name} />
  {/each}
  <WorkspaceItem name="+" key="+" />
</div>

<style>
  .container {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    width: 64px;
    height: calc(100vh - 48px);
    overflow-y: auto;

    border-right: 1px solid rgb(99, 154, 17);

    padding: 10px 4px;

    box-sizing: border-box;
  }

  .container:hover {
    width: 300px;
  }
</style>
