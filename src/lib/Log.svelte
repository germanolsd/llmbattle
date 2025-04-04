<svelte:options runes />

<script lang="ts">
  type Log = {
    id: string;
    winner: string;
    loser: string;
    reasoning: string;
  }
  import { onMount } from 'svelte';
  import {fetchUrl} from '../server/poller'
  import RenderBattle from './RenderBattle.svelte';

  // const mockData:Log[] = [{"winner":"player_2","loser":"player_1","reasoning":"Complete plan wins due to comprehensive enterprise needs. While basic plan offers cost savings, enterprise ICP leads require robust, scalable solutions that can adapt to complex organizational requirements without limitations."}, {"winner":"player_2","loser":"player_1","reasoning":"Complete plan wins due to comprehensive enterprise needs. While basic plan offers cost savings, enterprise ICP leads require robust, scalable solutions that can adapt to complex organizational requirements without limitations."}, {"winner":"player_2","loser":"player_1","reasoning":"Complete plan wins due to comprehensive enterprise needs. While basic plan offers cost savings, enterprise ICP leads require robust, scalable solutions that can adapt to complex organizational requirements without limitations."}]
  
  const {url = null, interval = 1000} = $props();

  let polledData:Log[] | null = $state(null);
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
  <div class="log">
    {#each polledData as log (log.id)}
      <RenderBattle {...log} />
    {/each}
  </div>
{/if}