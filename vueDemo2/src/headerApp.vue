<template>
<div id="app" @touchmove.prevent>
  <draggableHeaderView>
    <div slot="header">
      <h1>Elastic Draggable SVG Header</h1>
      <p>with <a href="http://vuejs.org">Vue.js</a> + <a href="http://dynamicsjs.com">dynamics.js</a></p>
    </div>
    <div slot="content">
      <p>外层的div的slot为content，所以这个div里面的内容会到draggable-header-view这个组件的slot的name为content里面去。Note this is just an effect demo - there are of course many additional details if you want to use this in production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js component and expose a simple Web-Component-like interface.</p>
    </div>
  </draggableHeaderView>
</div>
</template>

<script>
	import draggableHeaderView from './components/header.vue'
	export default{
		components:{
			'draggableHeaderView':draggableHeaderView
		}
	}
</script>

<style></style>