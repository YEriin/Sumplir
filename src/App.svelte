<script lang="ts">
  import Nav from "./modules/nav/index.svelte";
  import Sidebar from "./modules/sidebar/index.svelte";
  import WhiteBoard from "./modules/whiteboard/index.svelte";
</script>

<main>
  <Nav />
  <Sidebar />
  <WhiteBoard />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  :global body {
    margin: 0;
  }
</style>
