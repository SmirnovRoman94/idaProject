<template>
  <section>
      <div class="new_work">
        <newWork @addWork="addWork"/>
      </div>
        <div class="list_work">
        <workList @deteler="deleteWork" :works="workLoaded"/>
      </div>
  </section>
</template>

<script>
import newWork from '~/components/newWork'
import workList from '~/components/workList'

export default {
  components: {
    newWork,
    workList
  },
  computed: {
    workLoaded (){
      return this.$store.getters.getWorks
    },

  },
  methods: {
    addWork(work){
      this.listWork.push(work)
    },
    deleteWork(work){
      this.$store.dispatch('deleteWork', work)
    },
    
  }
  
}
</script>
<style lang="scss" scoped>
.new_work{
  width: 332px;
}
.list_work{
  min-width: calc(100% - 332px);
}
@media screen and (max-width: 600px) {
    section{
        display: flex;
        flex-wrap: wrap;
    }
    .new_work{
      width:100%;
      margin-bottom: 1em;
      padding-right: 10px;
    }
    .list_work{
      padding-right: 10px;
    }
}
@media screen and (max-width: 340px) {
    .new_work{
      width: 100%;
    }
}
</style>
