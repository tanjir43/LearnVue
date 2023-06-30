<template>
      <div>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="text-3xl font-bold tracking-tight text-gray-900">{{user.data.name}}</div>
        </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        Content goes here
      </div>
    </main>
  </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    export default {
        name: "MyProfile",

        setup() {
            const store = useStore();

            return {
                user : computed(() => store.state.user)
            } 
        },
    }
</script>

<style scoped>

</style>