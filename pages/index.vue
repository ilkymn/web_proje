<template>
    
  
  <div >
    <pre>theFooter</pre>
    <pre>theHeader</pre>
    <pre>theBanner1</pre>
    <pre>theBanner2</pre>
    <pre>theBanner3</pre>
    <pre>theBanner4</pre>
    <pre>theBanner5</pre>
    <pre>theBanner6</pre>
    
   
  </div>
  



</template>

<script setup>
const pages =ref();
onMounted(async()=>{
  const {result}=await $fetch("api/query?col=pages");
  console.log(result);
  pages.value=result;

  
});
</script>

<style scoped>
</style>
