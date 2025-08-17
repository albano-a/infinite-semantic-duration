<script>
  let { platform, username } = $props();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
</script>

<button class="button is-focused">
  <a href={`https://www.${platform}.com/${username}`}>
    {capitalizeFirstLetter(platform)}
  </a>
</button>
