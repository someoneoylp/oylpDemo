<template>
	<li id="item">
		<div @click="toggle" @dblclick='changeType'>
		   {{model.name}}
			<!-- 判断是否有子元素，如果有，则图标是+,没有就空
			当点击的时候显示 -->
			<span v-if="isFolderA">[{{open? '-':'+'}}]</span>
		</div>
		<!-- 输入文件目录名字 -->
		<!-- 再判断是否有子元素，如果有则隐藏，当点击的时候显示 -->
		<ul v-show="open" v-if="isFolderA">
			<item class="item" v-for="model in model.children" :model="model">
	      </item>
		</ul>
	</li>
</template>
<script>
	import vue from 'vue'
	export default {
		name: 'item',
		props : {
			model: Object
		},
		data: function () {
			return {
				open : false,
				isFloder: ''
			}
		},
		computed: {
			isFolderA: function () {
				console.log(this.model.children)
				return this.model.children && this.model.children.length
			}
		},
		methods: {
			toggle: function(){
				if(this.isFolderA){
					this.open=!this.open
					console.log('点击')
				}
			},
			changeType: function () {
				if(!this.isFolderA){
					//如果没有子组件，那么创建一个子组件
					vue.set(this.model,'children',[])
					//往子组件里面添加内容
					this.addChildren()
					//展开
					this.open = true
				}
			},
			addChildren: function(){
				this.model.children.push({
					name: '添加内容'
				})
			}
		}
	}
</script>

<style>
body {
font-family: Menlo, Consolas, monospace;
color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>