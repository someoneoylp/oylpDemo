 <template>
     <li>
         <span @click="toggle">
             <i v-if="isFolderA" class="icon" :class="[open ? 'folder-open': 'folder']">+</i>
             <i v-if="!isFolderA" class="icon file-text">0</i>
             {{ model.menuName }}
         </span>
         <ul v-show="open" v-if="isFolder">
            <tree-menu v-for="item in model.children" :model="item">
                
            </tree-menu>
         </ul>
     </li>
</template>
<script>
export default {
 name: 'treeMenu', // 组件它的模板内可以递归调用自己，但是一定要定义name才能使用
 props: ['model'],
 data() {
     return {
         open: false, // 判断子集是否展开
         isFolder: true //判断是否有子集
     }
 },
 computed: {
     isFolderA: function() {
        // 如果子集存在而且子集有内容
         return this.model.children && this.model.children.length
     }
 },
 methods: {
     toggle: function() {
         if (this.isFolder) {
            this.open = !this.open
         }
     }
 }
}
</script>
 <style>
ul {
 list-style: none;
}
i.icon {
 display: inline-block;
 width: 15px;
 height: 15px;
 background-repeat: no-repeat;
 vertical-align: middle;
}
</style>
