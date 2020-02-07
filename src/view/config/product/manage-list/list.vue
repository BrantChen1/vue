<template>
   <div class="">
     123
   </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      age: 0
    };
  },
  components: {},
  mounted () {
    // this的指向
    // this.person();
  },
  methods: {
    person () {
      setInterval(() => {
        this.age++;
        console.log(this.age);
      }, 1000);
    },
    fn () {
      var a;
      console.log(a);
    }
  }
};
</script>

<style scoped lang="css">
</style>
