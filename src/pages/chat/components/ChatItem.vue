<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ChatItem',
        components: {},
        methods: {}
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    padding: 0.2rem 0.1rem;
    word-break: break-all;
    line-height: .35rem;
</style>
