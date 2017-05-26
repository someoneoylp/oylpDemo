<template>
	  <li id="item">
	    <div
	      :class="{bold: isFolderA}"
	      @click="toggle"
	      @dblclick="changeType">
	      {{model.name}}
	      <span v-if="isFolderA">[{{open ? '-' : '+'}}]</span>
	    </div>
	    <ul v-show="open" v-if="isFolderA">
	      <item
	        class="item"
	        v-for="model in model.children"
	        :model="model">
	      </item>
	      <li class="add" @click="addChild">结尾添加</li>
	    </ul>
    </li>
</template>

<script>
// define the item component
import vue from 'vue'
export default {
  name:'item',
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false,
      isFolder: ''
    }
  },
  computed: {
    isFolderA: function () {
      return this.model.children &&
        this.model.children.length //判断是否有子元素
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolderA) {
        this.open = !this.open
      }
    },
    changeType: function () {
      if (!this.isFolderA) {
        // 双击的时候，如果是没有子元素
        // 给model添加一个子元素，内容为空
        vue.set(this.model, 'children', [])
        // 调用addChild函数
        this.addChild()
        this.open = true
      }
    },
    addChild: function () {
      this.model.children.push({
        name: '我本来没有，但是被点击之后就有了'
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

