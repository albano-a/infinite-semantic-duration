<script>
  let { children } = $props();
</script>

<div class="mdx-content">
  {@render children?.()}
</div>

<style>
  /* General text */
  .mdx-content {
    color: #e5e7eb; /* light gray text */
    line-height: 1.6;
    font-size: 1rem;
  }

  /* Headings */
  .mdx-content h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
  }
  .mdx-content h2 {
    font-size: 1.875rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
  }
  .mdx-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.25rem 0 0.75rem;
  }
  .mdx-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
  }
  .mdx-content h5 {
    font-size: 1.125rem;
    font-weight: 500;
    margin: 1rem 0 0.5rem;
  }
  .mdx-content h6 {
    font-size: 1rem;
    font-weight: 500;
    margin: 0.75rem 0 0.25rem;
  }

  /* Paragraphs */
  .mdx-content p {
    margin: 1rem 0;
  }

  /* Links */
  .mdx-content a {
    color: #3b82f6; /* blue */
    text-decoration: underline;
  }
  .mdx-content a:hover {
    color: #60a5fa;
  }

  /* Lists */
  .mdx-content ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin: 1rem 0;
  }
  .mdx-content ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
    margin: 1rem 0;
  }
  .mdx-content li {
    margin: 0.5rem 0;
  }

  /* Blockquotes */
  .mdx-content blockquote {
    border-left: 4px solid #3b82f6;
    padding-left: 1rem;
    color: #9ca3af;
    font-style: italic;
    margin: 1rem 0;
  }

  /* Horizontal rule */
  .mdx-content hr {
    border: none;
    border-top: 1px solid #374151;
    margin: 2rem 0;
  }

  /* Images */
  .mdx-content img {
    max-width: 100%;
    border-radius: 0.375rem;
    margin: 1rem 0;
  }

  /* Code blocks */
  .mdx-content pre {
    background-color: #1e1e1e;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;

    font-size: 0.875rem;
    line-height: 1.5;
    margin: 1rem 0;
  }

  .mdx-content code {
    font-size: 0.875rem;
    line-height: 1.25;
    background-color: #2e2e2e;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
  }

  /* Tables */
  .mdx-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  .mdx-content th,
  .mdx-content td {
    border: 1px solid #374151;
    padding: 0.5rem 1rem;
    text-align: left;
  }
  .mdx-content th {
    background-color: #1f2937;
  }
</style>
