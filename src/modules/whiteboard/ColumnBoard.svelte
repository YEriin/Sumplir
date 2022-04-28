<script lang="ts">
</script>

<div class="board">
  <div class="head">
    <span class="title"><slot /></span>
    <div class="operations"><button>+</button><button>...</button></div>
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
</style>
