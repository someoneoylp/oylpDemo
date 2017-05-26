 <template>
   <div class="tree-menu">
     <ul v-for="menuItem in theModel">
       <my-tree :model="menuItem"></my-tree>
     
     </ul>
   </div>
</template>
<script>
var data = [{
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}]

import myTree from './components/trees.vue'
export default {
 components: {
    'myTree':myTree
 },
 data() {
   return {
    theModel: data
   }
 }
}
</script>
