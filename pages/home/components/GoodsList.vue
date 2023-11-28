<template>
	<uni-grid :column="2">
		<uni-grid-item v-for="item in list" :key="item.iid" :square="false">
			1
		</uni-grid-item>
	</uni-grid>
</template>

<script setup>
defineProps({
	list: {
		type: Array,
		default: () => []
	}
})
</script>

<style lang="scss"></style>
