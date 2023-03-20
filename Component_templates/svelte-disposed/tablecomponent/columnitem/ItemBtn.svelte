<script>
	import Delete from '$components/dashboard/Delete.svelte';
	import NoStyleBtn from '../../NoStyleBtn.svelte';

	export let context = '';
	export let id = 0;

	let mode = '';
</script>

{#if mode === 'delete'}
	<Delete bind:mode {context} />
{/if}

{#if context === 'Cars'}
	<item class="control pr-6 flex justify-center items-center gap-4">
		<button class="w-5 rounded-full"><img src="/delete.svg" alt="" /></button>
		<button class="w-5 rounded-full"><img src="/edit.svg" alt="" /></button>
	</item>
{:else if context === 'Users'}
	<item class="flex items-center justify-end text-xs text-gray-400 pr-7 font-semibold gap-5">
		<NoStyleBtn color={'text-[#6B43C7]'} bind:mode title={'Update Password'} />
		<NoStyleBtn color={'text-gray-600'} bind:mode title={'Edit'} />
		<NoStyleBtn color={'text-red-700'} bind:mode title={'Delete'} />
	</item>
{:else}
	<item class="flex items-center justify-center text-xs text-gray-400 font-semibold pr-2 gap-5">
		<NoStyleBtn color={'text-gray-600'} bind:mode title={'Delete'} />
		<NoStyleBtn color={'text-purple-600'} bind:mode title={'Edit'} />
	</item>
{/if}

<style>
	button {
		transition: 0.5s;
	}

	.control button:hover {
		width: 30px;
		padding: 5px;
		background-color: rgba(132, 133, 133, 0.272);
		transition: 0.5s;
	}
</style>
