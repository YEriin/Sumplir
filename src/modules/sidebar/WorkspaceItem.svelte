<script lang="ts">
  export let key: string;
  export let name: string;

  // const handleWorkspaceItemClicked = (key: string) => {};
</script>

<div class="workspaceItem">{name}</div>

<style>
  .workspaceItem {
    width: 48px;
    height: 48px;
    border: 2px solid rgb(153 187 240);
    background-color: #deefff;
    border-radius: 5px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #797a7c;
  }

  .workspaceItem:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
</style>
