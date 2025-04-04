<svelte:options runes />
<script>
  import { onMount } from 'svelte';
  import {fetchUrl} from '../server/poller'
  
  const {url = null, interval = 1000} = $props();

  let polledData = $state(null);
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

<pre>
  {JSON.stringify(polledData, null, 2)}
</pre>