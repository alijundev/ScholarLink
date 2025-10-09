<script>
	import { Search, Building2, MapPin, Calendar, ExternalLink } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Beasiswa - ScholarLink</title>
</svelte:head>

<section class="bg-primary/95 flex flex-col items-center gap-5 py-20 text-white">
	<h1 class="text-5xl font-bold">Daftar Beasiswa</h1>
	<p class="text-xl text-gray-200">
		Jelajahi berbagai peluang beasiswa untuk mewujudkan impian pendidikanmu
	</p>
</section>

<section>
	<div class="grid place-items-center border-b border-gray-200 py-10">
		<label class="input input-primary min-w-3xl">
			<Search />
			<input type="text" placeholder="Cari beasiswa" />
		</label>
	</div>
	<div class="px-20 py-10">
		<div>
			<h2>Menampilkan 6 beasiswa</h2>
		</div>
		<div class="mt-5 grid grid-cols-3 gap-8">
			<div
				class="rounded-xl border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
				<!-- Header -->
				<div class="flex items-start justify-between gap-2">
					<h3 class="text-xl font-semibold">Beasiswa Unggulan Kemendikbud</h3>
					<span class="bg-secondary rounded-full px-2.5 py-0.5 text-xs shrink-0">S1, S2, S3</span>
				</div>

				<!-- Info List -->
				<ul class="space-y-2 border-b border-gray-300 py-4 text-sm text-gray-500">
					<li class="flex items-center gap-2">
						<Building2 size={18} /> Kementerian Pendidikan dan Kebudayaan
					</li>
					<li class="flex items-center gap-2"><MapPin size={18} /> Indonesia</li>
					<li class="flex items-center gap-2"><Calendar size={18} /> Deadline: 31 Desember 2025</li>
				</ul>

				<!-- Deskripsi -->
				<div class="border-b border-gray-300 pb-5">
					<h4 class="text-primary mb-2 pt-3 text-sm font-semibold">Full Funding</h4>
					<p class="text-sm text-gray-500">
						Beasiswa penuh untuk program sarjana, magister, dan doktor di universitas terbaik
						Indonesia.
					</p>
				</div>

				<!-- Tombol -->
				<div class="pt-4">
					<a href="#" class="btn btn-primary flex w-full gap-4 rounded-xl">
						<span>Apply Sekarang</span>
						<ExternalLink size={18} />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
