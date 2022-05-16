<script lang="ts">
  import { workspaceStore } from "../../store/index";

  export let key: string;
  export let name: string;

  let currentWorkspace;

  $: isCurrentItemSelected = currentWorkspace === key;

  const unsubscribe = workspaceStore.subscribe((store) => {
    currentWorkspace = store.currentWorkspaceKey;
  });

  const handleWorkspaceItemClicked = () => {
    workspaceStore.update((store) => {
      store.currentWorkspaceKey = key;
      return store;
    });
  };
</script>

<div
  class={`workspaceItem ${isCurrentItemSelected ? "selectedItem" : ""}`}
  title={name}
  on:click={handleWorkspaceItemClicked}
>
  <span class="ellipsisText">{name}</span>
</div>

<style>
  .workspaceItem {
    width: 100%;
    height: 54px;
    border: 2px solid rgb(153 187 240);
    background-color: #deefff;
    border-radius: 5px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #797a7c;

    padding: 0 10px;
    box-sizing: border-box;
  }

  .workspaceItem:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .selectedItem {
    color: #1b4caf;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }

  .ellipsisText {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>
