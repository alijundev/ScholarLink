<script lang="ts">
	import type { LayoutProps } from './$types';

	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	let { data, children }: LayoutProps = $props();
	let { session, supabase } = $derived(data);
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => data.subscription.unsubscribe();
	});
</script>
