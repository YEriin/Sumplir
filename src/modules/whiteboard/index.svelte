<script lang="ts">
  import OperationBar from "./OperationBar.svelte";
  import ColumnBoard from "./ColumnBoard.svelte";
  const workspaces = Array.from({ length: 30 }, (_, idx) => ({ name: "W" }));
</script>

<div class="container">
  <OperationBar />
  <div class="board-wraper">
    {#each workspaces as { name }, idx}
      <ColumnBoard>{name + idx}</ColumnBoard>
    {/each}
  </div>
</div>

<style>
  .container {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 12px;
    width: calc(100vw - 64px);
    box-sizing: border-box;
  }

  .board-wraper {
    flex: 1;
    overflow-x: auto;
    display: flex;
    gap: 20px;
    box-sizing: border-box;
  }
</style>
