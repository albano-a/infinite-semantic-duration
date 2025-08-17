<script>
  let isActive = $state(false);

  const toggleIsActive = () => {
    isActive = !isActive;
    console.log("Burger menu clicked!");
  };
</script>

<nav class="bg-gray-950 border-b border-gray-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo/Brand -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center">
          <h1 class="text-white text-xl font-bold" style="font-family: 'Neco';">
            Infinite Semantic Duration
          </h1>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-4">
          <a
            href="/"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline transition-colors"
          >
            Home
          </a>
          <a
            href="/about/"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="/blog/"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline transition-colors"
          >
            Blog
          </a>
          <a
            href="/tags/"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-bold hover:underline transition-colors"
          >
            Tags
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          onclick={toggleIsActive}
          class="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isActive}
    <div class="md:hidden bg-gray-800 border-t border-gray-700">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="/"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          Home
        </a>
        <a
          href="/about/"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          About
        </a>
        <a
          href="/blog/"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          Blog
        </a>
        <a
          href="/tags/"
          class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          Tags
        </a>
      </div>
    </div>
  {/if}
</nav>
