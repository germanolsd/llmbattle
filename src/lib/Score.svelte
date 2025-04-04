<svelte:options runes />

<script lang="ts">
  type Score = {
    player_id: string;
    player_name: string;
    score: number;
  }

  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import {fetchUrl} from '../server/poller'

  const {url = null, interval = 1000} = $props();

  let polledData:Score[] | null = $state(null);
  let intervalId = $state(null);

  const fetchData = async () => {
    try {
      const response = await fetchUrl(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      polledData = await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  onMount(() => {
    if (!url) {
      console.error('URL is not defined');
      return;
    }
    intervalId = setInterval(fetchData, interval);

    return () => clearInterval(intervalId);
  });
</script>

{#if polledData}
  <table>
    <thead>
      <tr>
        <th>Player ID</th>
        <th>Player Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {#each polledData as player (player.player_id)}
        <tr
          animate:flip={{ duration: 300 }}
          in:fade={{ duration: 200 }}
          out:fade={{ duration: 200 }}
        >
          <td>{player.player_id}</td>
          <td>{player.player_name}</td>
          <td>{player.score}</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}