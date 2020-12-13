<template>
  <v-chip class="ma-2" color="indigo darken-3" outlined>
    {{ tag }}
  </v-chip>
</template>

<script lang="ts">
export default {
  props: ["tag"],
};
</script>