<svelte:options runes />

<script>
  const {winner, loser, reasoning} = $props();
</script>

<div class="log-entry">
  <div class="winner" >
    {winner}
  </div>
  <div class="loser">
    {loser}
  </div>
  <div class="reasoning">{reasoning}</div>
</div>

<style>
  .log-entry {
    width: 400px;
    display: grid;
    grid-template-areas:
      "winner loser"
      "reasoning reasoning";
  }

  .winner {
    grid-area: winner;
    background-color: grey; 
    color: white;
    padding: 10px;
    text-align: center;
    animation: winnerBattle 4s ease-in-out forwards;
  }
  .loser {
    grid-area: loser;
    background-color: grey;
    color: white;
    padding: 10px;
    text-align: center;
    animation: loserBattle 4s ease-in-out forwards;
  }
  .reasoning {
    grid-area: reasoning;
    background-color: #2196F3; /* Blue */
    color: white;
    padding: 10px;
    text-align: center;
    animation: reasoningBattle 4.3s ease-out forwards;
    transform-origin: 50% 0%;
  }

  @keyframes winnerBattle {
    0% {
      transform: translateX(0);
      background-color: grey;
      color: white;
      font-size: 1em;
    }
    15% {
      transform: translateX(-50px);
      font-size: 1.1em;
    }
    30% {
      transform: translateX(-50px);
      font-size: 1.1em;
    }
    35% {
      transform: translateX(-45px);
      font-size: 1.1em;
    }
    40% {
      transform: translateX(-50px);
      font-size: 1.1em;
    }
    45% {
      transform: translateX(-45px);
      font-size: 1.1em;
    }
    50% {
      transform: translateX(-50px);
      font-size: 1.1em;
    }
    55% {
      transform: translateX(-50px);
      font-size: 1.1em;
    }
    60% {
      transform: translateX(10px) rotateZ(20deg);
      font-size: 1.1em;
    }
    65% {
      font-size: 1.1em;
    }
    70% {
      transform: translateX(10px);
      font-size: 1.1em;
    }
    75% {
      transform: translateX(0px);
      font-size: 1.1em;
    }
    80% {
      transform: translateX(0px) rotateZ(0deg);
      transform: translateX(0px);
      font-size: 1.1em;
    }
    90% {
      transform: scale(1.2);
      background-color: grey;
    }
    100% {
      transform: scale(1);
      background-color: green;
      color: white;
    }
  }
  @keyframes loserBattle {
    0% {
      transform: translateX(0);
      background-color: grey;
      color: white;
      font-size: 1em;
    }
    15% {
      transform: translateX(50px);
      font-size: 1.1em;
    }
    30% {
      transform: translateX(50px);
      font-size: 1.1em;
    }
    35% {
      transform: translateX(45px);
      font-size: 1.1em;
    }
    40% {
      transform: translateX(50px);
      font-size: 1.1em;
    }
    45% {
      transform: translateX(55px);
      font-size: 1.1em;
    }
    50% {
      transform: translateX(50px);
      font-size: 1.1em;
    }
    55% {
      transform: translateX(50px);
      font-size: 1.1em;
    }
    60% {
      transform: translateX(-10px) rotateZ(-20deg);
      font-size: 1.1em;
    }
    65% {
      font-size: 1.1em;
    }
    70% {
      transform: translateX(-10px);
      font-size: 1.1em;
    }
    75% {
      transform: translateX(0px);
      font-size: 1.1em;
    }
    80% {
      transform: translateX(0px) rotateZ(0deg);
      transform: translateX(0px);
      font-size: 1.1em;
    }
    90% {
      transform: scale(0.8);
      background-color: grey;
    }
    100% {
      transform: scale(1);
      background-color: red;
      color: white;
    }
  }

  @keyframes reasoningBattle {
     0%, 90% {
      clip-path: circle(0% at 50% 0%);
      opacity: 0;
    }
    100% {
      clip-path: circle(141.4% at 50% 0%);
      opacity: 1;
    }
  }
</style>

