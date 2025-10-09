<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { Mail, Lock, User, Eye, EyeOff } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let showPassword = $state(false);
	let showConfirmPassword = $state(false);
	let loading = $state(false);

	function togglePassword() {
		showPassword = !showPassword;
	}

	function toggleConfirmPassword() {
		showConfirmPassword = !showConfirmPassword;
	}

	// Handle form submission
	function handleSubmit() {
		loading = true;
	}
</script>

<div class="min-w-md rounded-xl border border-gray-200 p-8 shadow-lg">
	<div class="mb-5 flex items-center justify-center">
		<img src={logo} alt="" class="h-10 w-10" />
		<span class="text-primary text-2xl font-bold"
			>Scholar<span class="text-secondary">Link</span></span>
	</div>
	<div class="text-center">
		<h1 class="text-3xl font-bold">Mulai Perjalananmu</h1>
		<p class="mt-2 text-gray-500">Buat akun ScholarLink gratis</p>
	</div>

	<form method="POST" action="?/default" onsubmit={handleSubmit} class="mt-8 flex flex-col gap-2">
		<fieldset class="fieldset">
			<legend class="fieldset-legend">Nama Lengkap</legend>
			<label class="input w-full bg-gray-50">
				<User class="text-gray-500" size={20} />
				<input
					type="text"
					name="full_name"
					placeholder="Nama lengkap"
					class="grow"
					required
					disabled={loading} />
			</label>
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Email</legend>
			<label class="input w-full bg-gray-50">
				<Mail class="text-gray-500" size={20} />
				<input
					type="email"
					name="email"
					placeholder="Email"
					class="grow"
					required
					disabled={loading} />
			</label>
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Password</legend>
			<label class="input w-full bg-gray-50">
				<Lock class="text-gray-500" size={20} />
				<input
					type={showPassword ? 'text' : 'password'}
					name="password"
					placeholder="Password"
					class="grow"
					required
					disabled={loading} />
				<button
					type="button"
					class="btn btn-ghost btn-sm"
					onclick={togglePassword}
					disabled={loading}>
					{#if showPassword}
						<EyeOff size={16} />
					{:else}
						<Eye size={16} />
					{/if}
				</button>
			</label>
		</fieldset>

		<fieldset class="fieldset">
			<legend class="fieldset-legend">Konfirmasi Password</legend>
			<label class="input w-full bg-gray-50">
				<Lock class="text-gray-500" size={20} />
				<input
					type={showConfirmPassword ? 'text' : 'password'}
					name="confirm_password"
					placeholder="Konfirmasi Password"
					class="grow"
					required
					disabled={loading} />
				<button
					type="button"
					class="btn btn-ghost btn-sm"
					onclick={toggleConfirmPassword}
					disabled={loading}>
					{#if showConfirmPassword}
						<EyeOff size={16} />
					{:else}
						<Eye size={16} />
					{/if}
				</button>
			</label>
		</fieldset>

		<div class="mt-2">
			<button type="submit" class="btn btn-secondary w-full rounded-xl" disabled={loading}>
				{#if loading}
					<span class="loading loading-spinner loading-sm"></span>
					Memproses...
				{:else}
					Daftar
				{/if}
			</button>
		</div>

		<div class="mt-2 text-center">
			<p class="text-sm text-gray-500">
				Sudah punya akun? <a href="/login" class="text-primary font-semibold hover:underline"
					>Masuk Sekarang</a>
			</p>
		</div>
	</form>
</div>
