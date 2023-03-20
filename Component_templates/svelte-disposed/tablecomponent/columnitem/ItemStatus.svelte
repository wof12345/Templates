<script>
	export let demoFlag = 'approved';

	let statusColor = 'green';

	function itemDeterminer(flag = 'approved') {
		if (flag === 'approved') statusColor = 'rgb(2, 120, 71)';
		else if (flag === 'rejected') statusColor = 'rgb(176, 34, 24)';
		else if (flag === 'amended') statusColor = 'rgb(52, 55, 202)';
		else statusColor = 'rgb(103, 64, 195)';
	}

	function accentColorDetermination(flag = 'approved') {
		if (flag === 'approved') return 'rgba(2, 120, 71, 0.08)';
		else if (flag === 'rejected') return 'rgba(176, 34, 24, 0.08)';
		else if (flag === 'amended') return 'rgba(52, 55, 202, 0.08)';
		return 'rgba(103, 64, 195, 0.08)';
	}

	itemDeterminer(demoFlag);
</script>

<item class="flex items-center text-xs font-normal">
	<div
		class="flex items-center gap-1 rounded-full px-2 pb-[2px]"
		style="background-color: {accentColorDetermination(demoFlag)};"
	>
		<!-- <img src="" class="w-3" alt="" /> -->
		<div class="drop-shadow-xl" style="color:{statusColor}">
			{demoFlag}
		</div>
	</div>
</item>
