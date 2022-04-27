<script lang="ts">
  const workspaces = Array.from({ length: 30 }, (_, idx) => ({ name: "W" }));
</script>

<div class="container">
  {#each workspaces as { name }, idx}
    <div class="board">{name + idx}</div>
  {/each}
  <div class="board">+</div>
</div>

<style>
  .container {
    flex: 1;
    overflow: auto;

    display: flex;
    gap: 20px;
    padding: 12px;
    box-sizing: border-box;
  }

  .board {
    width: 320px;
    border: 1px solid goldenrod;
    flex-shrink: 0;
    box-sizing: border-box;
  }
</style>
