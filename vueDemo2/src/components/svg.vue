<template>
		<g>
		<!-- polygon标签用来创建含有不少于三个边的图形 -->
		通过points绑定值，设置每个点的xy坐标
	    <polygon :points="points"></polygon>
		<!-- 画一个圆 -->
	    <!-- <circle cx="100" cy="100" r="80"></circle> -->
	    <axis-label
	      v-for="(stat, index) in stats"
	      :stat="stat"
	      :index="index"
	      :total="stats.length">
	    </axis-label>
	  </g>
	  <!--  <text :x="point.x" :y="point.y">{{stat.label}}</text> -->
</template>

<script>

export default{
	name:'polygraph',
	props: {
		stats:Array
	},
   	computed: {
	    points: function () {
	    	//获取一共有多少个点
	      var total = this.stats.length
	      //state当前处理元素，i是索引，第三个是处理的数组
	      return this.stats.map(function (stat, i) {
	      	//经过valueTopPoint处理，返回每个点的坐标
	        var point = valueToPoint(stat.value, i, total)
	        return point.x + ',' + point.y
	      }).join(' ')
	    }
	  },
    components: {
    'axis-label': {
      props: {
        stat: Object,
        index: Number,
        total: Number
      },
      computed: {
        point: function () {
          return valueToPoint(
            +this.stat.value + 10,
            this.index,
            this.total
          )
        }
      }
    }
  }
}
function valueToPoint (value, index, total) {
  var x     = 0
  var y     = -value * 0.8
  var angle = Math.PI * 2 / total * index
  var cos   = Math.cos(angle)
  var sin   = Math.sin(angle)
  var tx    = x * cos - y * sin + 100
  var ty    = x * sin + y * cos + 100
  return {
    x: tx,
    y: ty
  }
}
</script>

<style type="text/css">
	body {
    font-family: Helvetica Neue, Arial, sans-serif;
}

polygon {
    fill: #42b983;
    opacity: .75;
}

circle {
    fill: transparent;
    stroke: #999;
}

text {
    font-family: Helvetica Neue, Arial, sans-serif;
    font-size: 10px;
    fill: #666;
}

label {
    display: inline-block;
    margin-left: 10px;
    width: 20px;
}

#raw {
    position: absolute;
    top: 0;
    left: 300px;
}
</style>
