<template>
<div id='app'>
	<ul class="HotPerformance-header">
		<li class="HotPerformance-title">热门演出</li>
		<li class="HotPerformance-glt"> > </li>
	</ul>
	<ul class="HotPerformance-list" v-for="(item,index) in HotPerformance" :key="index">
		<li class="HotPerformance-item">
			<span class="HotPerformance-img">{{HotPerformance.img}}</span>
			<span class="HotPerformance-name">{{HotPerformance.name}}</span>
		</li>
	</ul>
</div>
</template>
<script>
export default {
	props:['HotPerformance']
}
</script>
<style lang='stylus'>
#app
	width 100%
	height 100%
	.HotPerformance-header
		width 90%
		height 30px
		margin 0 auto 
		.HotPerformance-title
			width 50%
			height 100%
			float left 
		.HotPerformance-glt
			width 50%
			height 100%
			float right
	// .HotPerformance-list

	// 	.HotPerformance-item
	// 		.HotPerformance-img
	// 		.HotPerformance-name
</style>