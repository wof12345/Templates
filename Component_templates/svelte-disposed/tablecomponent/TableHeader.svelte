<script>
	import CheckBox from '../../forms/CheckBox.svelte';

	export let context = '';

	let contextCopy = context;
	let columnTemplate = '';

	function columnDetermination(context = '') {
		if (context === 'Cars') columnTemplate = '3fr 1fr 1fr 1fr 1fr 1fr';
		else if (context === 'Users') columnTemplate = '3fr 1fr 2fr';
		else columnTemplate = '3fr 1fr 1fr 1fr';
	}
	columnDetermination(context);
</script>

<div
	class="spec grid grid-flow-col gap-10 justify-between bg-[#F9FAFB] pt-4 pb-2 border-b"
	style="grid-template-columns: {columnTemplate};"
>
	<item class="flex items-center gap-2 pl-4 ">
		<CheckBox />
		<p class="text-[11px] text-gray-600 font-semibold">
			{contextCopy.slice(0, contextCopy.length - 1)}
		</p>
		<img src="/dashboard/arrowdown.svg" class="w-4" alt="" />
	</item>

	{#if context === 'Cars'}
		<item class="flex items-center text-[11px] text-gray-600 font-semibold ">
			<div>Status</div>
			<img src="" class="w-4" alt="" />
		</item>

		<item class="flex items-center text-[11px] text-gray-600 font-semibold">
			<div>QR Code</div>
			<img src="" class="w-4" alt="" />
		</item>

		<item class="flex items-center text-[11px] text-gray-600 font-semibold">
			<div>PDF</div>
			<img src="" class="w-4" alt="" />
		</item>
	{:else if context === 'File names'}
		<item class="flex items-center text-[11px] text-gray-600 font-semibold">
			<div>File size</div>
			<img src="" class="w-4" alt="" />
		</item>
	{/if}

	<item class="flex items-center text-[11px] text-gray-600 font-semibold ">
		<div>Created at</div>
		<img src="" class="w-4" alt="" />
	</item>
</div>

<style>
	item {
		flex-grow: 1;
	}

	item:hover {
		cursor: pointer;
	}
</style>
