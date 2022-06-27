<template>
  <div>
    <h1>test</h1> 
    {{count}}
    {{tenfold}} 
  </div>
</template>
<script>
import { useStore } from './store/housework'

export default({
  
  
  setup() {
    const store = useStore()
    const { count, tenfold } = store
    return {
      count,
      tenfold
    }
  },
})
</script>
<style lang="sass" scoped>
h1 {
  color: red;
}
</style>
