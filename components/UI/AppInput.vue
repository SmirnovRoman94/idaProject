<template>
    <div class="controls">
        <label><slot/><span><img src="~/assets/img/Rectangle 32.png"/></span></label>
        <input 
        :class="{'error': errorer}"
        :error="error"
        v-bind="$attrs"
        :value="value"
        :type="type"
        :required="required"
        @input="$emit('input', $event.target.value)"/>
        <p v-if="errorer" class="error_text">Поле является обязательным</p>
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
        },
        required: {
            type: Boolean,
            default: true
        },
        error: {
            type: Boolean,
            default: false
        },
    },
    data(){
        return{
            trueBtn: true,
            errorer: false
        }
    },
    watch: {
        value(){
            if(this.value.length > 0){
                this.errorer = false
            }
        },
        error(){
            if(this.error = true){
                this.errorer = true
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
img{
    top: 0;
    width: 4px;
    height: 4px;
    position: absolute;
}
.error{
    border: 1px solid #FF8484;
    margin-bottom: 4px;
}
.error_text{
    margin: 4px 0 8px 0;
    font-size: 8px;
    line-height: 10px;
    color: #FF8484;
}
</style>