<script>
	export let context = '';
	export let page = 1;
	export let totalPage = 10;

	let contextCopy = context;
</script>

<div class="flex justify-between pt-2 pb-2 px-7 border rounded-b-xl">
	<item class="flex items-center text-xs font-medium text-gray-600 pl-4 ">
		<button class="px-3 py-2 border rounded-md border-gray-300">Previous</button>
	</item>

	<item class="flex items-center text-xs font-medium text-gray-600">
		<div><p>Page {page} of {totalPage}</p></div>
	</item>

	<item class="flex items-center text-gray-600 text-xs">
		<button class="px-3 py-2 border rounded-md font-medium border-gray-300">Next</button>
	</item>
</div>

<style>
</style>
