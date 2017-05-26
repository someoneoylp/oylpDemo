<template>
  <div id="App">
    <!-- 一个圆组件部分 -->
   <svg width="200" height="200" style="background:#eeeeee">
    <polygraph :stats="stats"></polygraph>
  </svg> 
  <!-- 调节部分 -->
  <div v-for="stat in stats">
    <label>{{stat.label}}</label>
    <input type="range" v-model="stat.value" min="0" max="100">
    <span>{{stat.value}}</span>
    <button @click="remove(stat)" class="remove">X</button>
  </div>
  <!-- 添加点 -->
  <form id="add">
    <input name="newlabel" v-model="newLabel">
    <button @click="add">Add a Stat</button>
  </form>
  <pre id="raw">{{ stats }}</pre>
</div>
</template>
<script>
  var stats = [
  { label: 'A', value: 100 },
  { label: 'B', value: 100 },
  { label: 'C', value: 100 },
  { label: 'D', value: 100 },
  { label: 'E', value: 100 },
  { label: 'F', value: 100 }
]
import polygraph from './components/svg.vue'
  export default{
  data: function() {
    return {
       newLabel: '',
       stats: stats
    }
  },
  components : {
    'polygraph':polygraph
  },
  methods: {
    add: function (e) {
      e.preventDefault()
      if (!this.newLabel) return
      this.stats.push({
        label: this.newLabel,
        value: 100
      })
      this.newLabel = ''
    },
    remove: function (stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1)
      } else {
        alert('Can\'t delete more!')
      }
    }
  }
}
</script>
