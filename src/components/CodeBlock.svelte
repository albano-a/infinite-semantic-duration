<script>
  let { text } = $props();

  let copied = $state(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  };
</script>

<div class="absolute top-2 right-2">
  <button
    class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
    onclick={copyToClipboard}
  >
    {copied ? "Copied!" : "Copy"}
  </button>
</div>
