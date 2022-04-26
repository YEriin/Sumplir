<script lang="ts">
  import Nav from "./modules/nav/index.svelte";
  import Sidebar from "./modules/sidebar/index.svelte";
  import WhiteBoard from "./modules/whiteboard/index.svelte";
</script>

<main>
  <Nav />
  <div class="content"><Sidebar /><WhiteBoard /></div>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global body {
    margin: 0;
  }

  .content {
    display: flex;
    height: calc(100vh - 48px);
    overflow-y: hidden;
  }
</style>
