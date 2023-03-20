<script>
	import Action from './Action.svelte';
	import Upload from './Upload.svelte';

	export let items = [{}, {}, {}, {}, {}, {}];
	export let context = '';
</script>

<main class="border border-gray-200 rounded-xl overflow-auto shadow-md">
	{#if context === 'File names'}
		<section class="flex w-full items-center justify-between p-4">
			<div>
				<h1 class="text-lg font-semibold">Attached files</h1>
				<p class="text-gray-500 text-sm">
					Files and assests that have been attached to this project
				</p>
			</div>
		</section>

		<Upload />

		<section class="flex justify-between h-16 px-4 py-2 border-t border-y">
			<Action />
		</section>
	{/if}
</main>

<style>
	/* ::-webkit-scrollbar {
		width: 5px;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		background: #888;
	}

	::-webkit-scrollbar-thumb:hover {
		background: #555;
	} */
</style>
