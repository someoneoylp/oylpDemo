<template>
<div class="draggable-header-view"
    @mousedown="startDrag" @touchstart="startDrag"
    @mousemove="onDrag" @touchmove="onDrag"
    @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
    <svg class="bg" width="320" height="560">
      <path :d="headerPath" fill="#3F51B5"></path>
    </svg>
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content" :style="contentPosition">
      <slot name="content"></slot>
    </div>
    <div>{{headerPath}}</div>
</div>
</template>

<script>
import dynamics from 'dynamics.js'
export default{
	name:'draggableHeaderView',
	data: function () {
	    return {
	      dragging: false,
	      // quadratic bezier control point
	      c: { x: 160, y: 160 },
	      // record drag start point
	      start: { x: 0, y: 0 }
	    }
	},
	computed: {
		// 设置点
		headerPath: function () {
		  return 'M0,0 L320,0 320,160' +
		    'Q' + this.c.x + ',' + this.c.y +
		    ' 0,160'
		},
		// 设置3D效果
		contentPosition: function () {
		  var dy = this.c.y - 160
		  var dampen = dy > 0 ? 2 : 4
		  return {
		    transform: 'translate3d(0,' + dy / dampen + 'px,0)'
		  }
		}
	},
	methods: {
		// 开始摁下
		startDrag: function (e) {
		  e = e.changedTouches ? e.changedTouches[0] : e
		  // 当摁下的坐标点，相对于整个屏幕的
		  this.dragging = true
		  this.start.x = e.pageX
		  this.start.y = e.pageY
		},
		// 下拉中
		onDrag: function (e) {
		  e = e.changedTouches ? e.changedTouches[0] : e
		  if (this.dragging) {
		  	// 下拉过程中x点坐标变化，相对于页面的
		    this.c.x = 160 + (e.pageX - this.start.x)
		    // dampen vertical drag by a factor
		    //下拉过程中y轴的变化
		    var dy = e.pageY - this.start.y
		    var dampen = dy > 0 ? 1.5 : 4
		    this.c.y = 160 + dy / dampen
		  }
		},
		// 放开
		stopDrag: function () {
		  if (this.dragging) {
		    this.dragging = false
		    dynamics.animate(this.c, {
		      x: 160,
		      y: 160
		    }, {
		      type: dynamics.spring,
		      duration: 700,
		      friction: 280
		    })
		  }
		}
	}
}
</script>

<style>
h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}
a {
  color: #fff;
}
.draggable-header-view {
  background-color: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,.15);
  width: 320px;
  height: 560px;
  overflow: hidden;
  margin: 30px auto;
  position: relative;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.draggable-header-view .bg {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.draggable-header-view .header, .draggable-header-view .content {
  position: relative;
  z-index: 1;
  padding: 30px;
  box-sizing: border-box;
}
.draggable-header-view .header {
  height: 160px;
}
.draggable-header-view .content {
  color: #333;
  line-height: 1.5em;
}
</style>