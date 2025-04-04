<svelte:options runes />

<script lang="ts">
  type Player = {
    id: string;
    content: string;
    score: number;
    elo: number;
    ffa_win_count: number;
    ffa_lose_count: number;
    ffa_draw_count: number;
    eliminated: boolean;
  }

  import { onMount } from 'svelte';
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import {fetchUrl} from '../server/poller'

  const {url = null, interval = 1000} = $props();

  let polledData:Player[] | null = $state(null);
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
    {#each polledData as player (player.id)}
      <tr
        animate:flip={{ duration: 300 }}
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
      >
        <td>{player.content}</td>
        <td>{player.elo}</td>
        <td>{player.score}</td>
        <td>{player.ffa_win_count}</td>
        <td>{player.ffa_lose_count}</td>
        <td>{player.ffa_draw_count}</td>
        <td>{player.eliminated}</td>
      </tr>
    {/each}
  </table>
{/if}