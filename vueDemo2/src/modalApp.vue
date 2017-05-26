<template>
	<div id="app">
		<button id="show-modal" @click="showModal=true">显示组件{{showModal}}</button>
		<modal v-if="showModal" @close="showModal=false" transition="modal-scale">
			<h3 slot="header">备用内容：custom header</h3>
		</modal>
	</div>
</template>

<script>
import modal from './components/modal.vue'
	export default{
		data:function(){
			return {
				showModal:false
			}
		},
		components:{
			modal
		}
	}
</script>

<style type="text/css">
.modal-scale-transition{
  transition: transform,opacity .3s ease;
}

.modal-scale-enter,
.modal-scale-leave {
    opacity: 0;
}

.modal-scale-enter {
  transform: scale(1.1);
}
.modal-scale-leave {
  transform: scale(0.8);
}
</style>