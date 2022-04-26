<script lang="ts">
</script>

<div id="container">
  <div>app1</div>
  <div>app2</div>
  <div>app3</div>
  <div>+</div>
</div>

<style>
  #container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    width: 48px;
    height: calc(100vh - 48px);
    overflow-y: auto;
  }
</style>
