<script lang="ts">
  export let content: string = "";
</script>

<div class="item">
  <div class="contentWrapper"><span>{content}</span></div>
  <div class="operationWrapper"><span>...</span></div>
</div>

<style>
  .item {
    flex-shrink: 0;
    height: 54px;
    border: 1px solid lightblue;
  }

  .contentWrapper {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .operationWrapper {
    display: flex;
    justify-content: end;
    align-items: center;
  }
</style>
