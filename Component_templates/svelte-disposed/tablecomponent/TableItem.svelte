<script>
	import ItemDesc from './columnitem/ItemDesc.svelte';
	import ItemBtn from './columnitem/ItemBtn.svelte';
	import ItemStatus from './columnitem/ItemStatus.svelte';
	import NoStyleBtn from '../NoStyleBtn.svelte';

	export let context = 'Cars';
	export let item = {};
	export let demoFlag = 'approved';

	let demoDate = new Date().toLocaleString('en-us', {
		weekday: 'long',
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	let columnTemplate = '';

	function columnDetermination(context = '') {
		if (context === 'Cars') columnTemplate = '3fr 1fr 1fr 1fr 1fr 1fr';
		else if (context === 'Users') columnTemplate = '3fr 1fr 2fr';
		else columnTemplate = '3fr 1fr 1fr 1fr';
	}

	columnDetermination(context);
</script>

<div
	class="grid grid-flow-col gap-10 justify-between py-4 border-b"
	style="grid-template-columns: {columnTemplate};"
>
	<ItemDesc {context} name={'Name'} desc={'01843028712'} />

	{#if context === 'Cars'}
		<ItemStatus {demoFlag} />

		<item class="flex items-center text-xs text-gray-400 font-semibold gap-5">
			<NoStyleBtn color={'text-gray-600'} mode={'view'} title={'View'} />
			<NoStyleBtn color={'text-[#6B43C7]'} mode={'download'} title={'Download'} />
		</item>

		<item class="flex items-center text-xs text-gray-400 font-semibold gap-5">
			<NoStyleBtn color={'text-gray-600'} mode={'view'} title={'View'} />
			<NoStyleBtn color={'text-[#6B43C7]'} mode={'download'} title={'Download'} />
		</item>
	{:else if context === 'File names'}
		<item class="flex items-center text-xs text-gray-400 font-semibold ">
			<div>2412 kb</div>
		</item>
	{/if}

	<item class="flex items-center text-xs text-gray-400 font-semibold">
		<div>{demoDate}</div>
	</item>

	<ItemBtn {context} />
</div>
