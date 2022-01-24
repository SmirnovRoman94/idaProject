<template>
    <div class="controls">
        <label><slot/></label>
        <textarea 
        v-bind="$attrs"
        :value="value"
        :type="type"
        @input="$emit('input', $event.target.value)"/>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>