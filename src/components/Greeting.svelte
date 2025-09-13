<script lang="ts">
  import messages from "../pages/_messages.json";

  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  console.log(randomMessage());

  let greeting = $state(randomMessage());
</script>

<div class="max-w-4xl mx-auto p-5 text-center space-y-6">
  <div class="space-y-2">
    <p
      class="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium"
    >
      Quotes from my favorite artists
    </p>
    <blockquote
      class="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 italic leading-relaxed min-h-[3rem] flex items-center justify-center"
    >
      {greeting}
    </blockquote>
  </div>
  <button
    class="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-medium rounded-full px-8 py-3 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-800"
    onclick={() => (greeting = randomMessage())}
  >
    Quotify
  </button>
</div>
