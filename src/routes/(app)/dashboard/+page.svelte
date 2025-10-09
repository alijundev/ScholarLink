<script lang="ts">
	import { LogOut, User, Bell, BookOpen, Search } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data, form }: { data: PageData; form: any } = $props();
	let { session, user } = $derived(data);
</script>

<svelte:head>
	<title>Dashboard - ScholarLink</title>
</svelte:head>

<div class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="border-b bg-white shadow-sm">
		<div class="px-6 py-4">
			<div class="flex items-center justify-between">
				<div>
					<h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
					<p class="text-gray-600">
						Selamat datang, {user?.user_metadata?.full_name || user?.email}!
					</p>
				</div>
				<div class="flex items-center gap-4">
					<button class="btn btn-ghost btn-sm">
						<Bell size={20} />
					</button>
					<div class="dropdown dropdown-end">
						<div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
							<div
								class="bg-primary text-primary-content flex w-10 items-center justify-center rounded-full">
								<User size={20} />
							</div>
						</div>
						<ul
							tabindex="0"
							class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
							<li><button type="button" role="button">Profil</button></li>
							<li><button type="button" role="button">Pengaturan</button></li>
							<li>
								<form method="POST" action="?/logout">
									<button type="submit" class="w-full text-left">Logout</button>
								</form>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- Main Content -->
	<main class="p-6">
		<!-- Stats Cards -->
		<div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
			<div class="rounded-lg bg-white p-6 shadow">
				<div class="flex items-center">
					<div class="bg-primary/10 text-primary rounded-full p-3">
						<BookOpen size={24} />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-600">Beasiswa Diikuti</p>
						<p class="text-2xl font-bold text-gray-900">0</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-white p-6 shadow">
				<div class="flex items-center">
					<div class="bg-secondary/10 text-secondary rounded-full p-3">
						<Bell size={24} />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-600">Notifikasi</p>
						<p class="text-2xl font-bold text-gray-900">0</p>
					</div>
				</div>
			</div>

			<div class="rounded-lg bg-white p-6 shadow">
				<div class="flex items-center">
					<div class="bg-accent/10 text-accent rounded-full p-3">
						<Search size={24} />
					</div>
					<div class="ml-4">
						<p class="text-sm font-medium text-gray-600">Pencarian</p>
						<p class="text-2xl font-bold text-gray-900">0</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Quick Actions -->
		<div class="mb-8 rounded-lg bg-white p-6 shadow">
			<h2 class="mb-4 text-xl font-semibold">Aksi Cepat</h2>
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				<a href="/beasiswa" class="btn btn-outline btn-primary">
					<Search size={20} />
					Cari Beasiswa
				</a>
				<button class="btn btn-outline btn-secondary">
					<Bell size={20} />
					Atur Notifikasi
				</button>
				<button class="btn btn-outline btn-accent">
					<BookOpen size={20} />
					Riwayat Aplikasi
				</button>
				<button class="btn btn-outline">
					<User size={20} />
					Edit Profil
				</button>
			</div>
		</div>

		<!-- Recent Activity -->
		<div class="rounded-lg bg-white p-6 shadow">
			<h2 class="mb-4 text-xl font-semibold">Aktivitas Terbaru</h2>
			<div class="py-8 text-center text-gray-500">
				<BookOpen size={48} class="mx-auto mb-4 opacity-50" />
				<p>Belum ada aktivitas</p>
				<p class="text-sm">Mulai jelajahi beasiswa untuk melihat aktivitas di sini</p>
				<a href="/beasiswa" class="btn btn-primary mt-4">Jelajahi Beasiswa</a>
			</div>
		</div>
	</main>
</div>
