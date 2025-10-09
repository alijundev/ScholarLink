<script lang="ts">
	import type { LayoutProps } from "./$types";
  import "$lib/styles/app.css";

  let { children }: LayoutProps = $props();
</script>

<div class="h-screen min-h-screen grid place-items-center">
  {@render children?.()}
</div>