<script>
 import Players from './lib/Players.svelte';
 import Log from './lib/Log.svelte';
 import Score from './lib/Score.svelte';
</script>

<style>
  .container {
    display: flex;
    width: 100%;
    height: 100vh;
  }
  
  .players-section {
    flex: 1;
    width: 50%;
    overflow-y: auto;
    border-right: 1px solid #ccc;
    padding: 1rem;
  }
  
  .log-container {
    flex: 1;
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  
  .log-section {
    height: 50%;
    overflow-y: auto;
    padding: 1rem;
  }
  
  .log-section:first-child {
    border-bottom: 1px solid #ccc;
  }
</style>

<div class="container">
  <div class="players-section">
    <h2>Players</h2>
    <Players url="http://localhost:5173/players" />
  </div>
  <div class="log-container">
    <div class="log-section">
      <h2>Scores Log</h2>
      <Score url="http://localhost:5173/scores" />
    </div>
    <div class="log-section">
      <h2>Battle Log</h2>
      <Log url="http://localhost:5173/battles" />
    </div>
  </div>
</div>
