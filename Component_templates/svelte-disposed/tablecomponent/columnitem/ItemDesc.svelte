<script>
	import CheckBox from '../../../forms/CheckBox.svelte';
	export let context = '';
	export let name = '';
	export let desc = '';
</script>

<item class="spec flex items-center gap-2 pl-4">
	<CheckBox />

	{#if context === 'File names'}
		<div class="w-6 aspect-square bg-slate-500 rounded-full p-1">
			<img src="/dashboard/check.svg" alt="" />
		</div>
	{/if}

	<div>
		<p class="text-xs text-black font-medium">{name}</p>
		<p class="text-[10px] text-gray-600 ">{desc}</p>
	</div>
</item>
