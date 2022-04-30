<script lang="ts">
  const data = Array.from({ length: 30 }, (v, idx) => ({ v: idx }));
</script>

<div class="board">
  <div class="head">
    <span class="title"><slot /></span>
    <div class="operations"><button>+</button><button>...</button></div>
  </div>
  <div class="itemList">
    {#each data as { v }, i}
      <div>
        <a target="_blank">
          {i + 1}: {v}
        </a>
      </div>
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
  }

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

  .itemList {
    overflow-y: auto;
  }
</style>
