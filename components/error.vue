<template>
  <div class="alert alert-danger">
    <strong>{{ error }}</strong>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>