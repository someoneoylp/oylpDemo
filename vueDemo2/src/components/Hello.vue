<template>
	<table>
		<thead>
			<tr>
				<th v-for="key in columns" @click="sortBy(key)">
					{{key}}<span></span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="dataItem in filterData">
				<td v-for="key in columns">{{dataItem[key]}}</td>
			</tr>
		</tbody>
	</table>

</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    filterKey: String // 查询输入
  },
  data: function () {
    var clickOrders = {}
    this.columns.forEach(function (key) {
      clickOrders[key] = 1
    })
    return {
      clickOrders: clickOrders,
      clickKey: ''
    }
  },
  filter: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  computed: {
    filterData: function () {
      var clickKey = this.clickKey
      var clickOrders = this.clickOrders[clickKey] || 1
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var data = this.data
      if (clickKey) {
        data = data.filter(function (da) {
          return Object.keys(da).some(function (key) {
            return String(da[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (clickKey) {
        // 排序事件
        data = data.sort(function (a, b) {
          a = a[clickKey]
          b = b[clickKey]
          return (a === b ? 0 : a > b ? 1 : -1) * clickOrders
        })
      }
      return data
    }

  },
  methods: {
    sortBy: function (key) {
      this.clickKey = key
      this.clickOrders[key] = this.clickOrders[key] * -1
    }
  }
}

</script>

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
/* 一定要注意，在代码结尾要换行 */
</style>
