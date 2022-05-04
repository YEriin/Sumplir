<script lang="ts">
  import BoardItem from "./BoardItem.svelte";
  const data = Array.from({ length: 30 }, (v, idx) => ({ v: idx }));
</script>

<div class="board">
  <div class="head">
    <span class="title"><slot /></span>
    <div class="operations"><button>+</button><button>...</button></div>
  </div>
  <div class="itemList">
    {#each data as { v }, i}
      <BoardItem content={`${v}`} />
    {/each}
  </div>
</div>

<style>
  .board {
    width: 320px;
    height: 100%;
    border: 1px solid goldenrod;
    flex-shrink: 0;
    padding: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    margin-bottom: 12px;
  }

  .itemList {
    overflow-y: auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
</style>
