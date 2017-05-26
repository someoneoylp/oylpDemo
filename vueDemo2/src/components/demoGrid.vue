<template>
  <div id="grid-template">
    <table>
      <thead>
        <tr>
          <th v-for="(key,index) in columns" @click="sortBy(key,index)">{{key | capitalize}} <span class="arrow" :class="{'asc':isTop&&key==status}"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="grids in filteredData">
          <td v-for="key in columns">{{grids[key]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  // 子组建从夫组件那里继承数据
  props: {
    data: Array,
    columns: Array,
    filterKey: String // 查询输入
  },
  data: function () {
    // data里面创建一个对象，用来放sortOrders[key] = 1，当点击的时候变成-1，用来判断是否点击
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      // 点击内容
      sortKey: '',
      sortOrders: sortOrders,
      isTop: false,
      status: ''
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey // 获取点击内容
      var filterKey = this.filterKey && this.filterKey.toLowerCase() // 把查询输入的变成小写
      var order = this.sortOrders[sortKey]  || 1 // 用于反复点击有效
      var data = this.data
      // 搜索方法
      if (filterKey) {
        // 如果搜索框有内容
        data = data.filter(function (da) {
          // filter 过滤器方法，删除不要的内容
          return Object.keys(da).some(function (key) {
            // Object.keys返回一个数组 key:要返回其枚举自身属性的对象
            // some检查数组中元素是否满足指定条件
            return String(da[key]).toLowerCase().indexOf(filterKey) > -1   // 返回输入查询的文字在da[key]里面首次出现的位置，如果是-1，那么就是不存在，返回false就是删除这个
          })
        })
      }
      // 交换位置方法
      if (sortKey) {
        // 如果获取了点击内容
        data = data.sort(function (a, b) {
          // sort: 指定参数对数组排序
          a = a[sortKey] //使用name还是power
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order // 如果不加上order的话，就只有第一次点击的时候生效
        }) // 重新排序
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key // 点击的时候传入点击内容key
      this.sortOrders[key] = this.sortOrders[key] * -1 // 被点击的这个表格头部sortOrder[key]变成-1
      this.isTop = !this.isTop
      this.status = key
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 8px solid #fff;
  transition: all .5s;
}
.asc {
  transform:rotate(180deg);
}
</style>
