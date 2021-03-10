<template>
  <div class="bg-gray-500 text-gray-800 flex flex-col min-h-screen">

    <div class="text-center text-5xl">ADMIN HERE</div>

    <div class="view flex-grow w-screen max-w-4xl mx-auto px-4 xl:px-0">
        <slot />
    </div>

  </div>
</template>
<script>

export default {
  components: {
    
  }
}
</script>