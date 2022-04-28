<script lang="ts">
  import OperationBar from "./OperationBar.svelte";
  const workspaces = Array.from({ length: 30 }, (_, idx) => ({ name: "W" }));
</script>

<div class="container">
  <OperationBar />
  <div class="board-wraper">
    {#each workspaces as { name }, idx}
      <div class="board">{name + idx}</div>
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

  .board {
    width: 320px;
    height: 100%;
    border: 1px solid goldenrod;
    flex-shrink: 0;
    box-sizing: border-box;
  }
</style>
