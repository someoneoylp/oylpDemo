<template>
	<transition name="modal" transition="modal-scale">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<slot name='header'>备用：头部</slot>
					</div>
					<div class="modal-body">
						<slot name='body'>备用：中部</slot>
					</div>
					<div class="modal-footer">
						<slot name='footer'>
							备用：尾部
							<button class="modal-default-button" @click="$emit('close')">ok</button>
						</slot>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
    name:'modal',
    data:function(){
      return {
        isHide:true
      }
    }
  }
</script>

<style>
	.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .4s ease;
  opacity: 1;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .4s ease; 
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
/* vue有自己的过度动画，使用transition标签，然后设置name属性，再写下面这个就行啦。啊哈哈哈哈 */
.modal-enter-active, .modal-leave-active {
  transition: opacity .5s
}
.modal-enter, .modal-leave-active {
  opacity: 0
}
</style>