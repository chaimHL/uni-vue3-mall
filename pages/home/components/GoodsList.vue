<template>
	<uni-grid :column="2" :showBorder="false" :square="false">
		<uni-grid-item v-for="item in list" :key="item.iid">
			<GoodItem :good="item" />
		</uni-grid-item>
	</uni-grid>
</template>

<script setup>
import GoodItem from './GoodItem.vue'
defineProps({
	list: {
		type: Array,
		default: () => []
	}
})
</script>

<style lang="scss"></style>
