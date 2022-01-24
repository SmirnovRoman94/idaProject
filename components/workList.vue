<template>
    <div class="work_list">
        <div class="button_control">
            <AppButton :class="{'hide': hideList}"  @click="hideList = !hideList" :btnClass="'btnWhite'">По умолчанию<span :class="{'hide': hideList}" class="btn_span"></span></AppButton>
            <form :class="{'hide': hideList}" class="form_list">
                <div class="search_select_content_item">
                    <input type="checkbox" @click="SortPrice" id="a"/><label for="a" class="checkbox_name"><span class="checkbox_text">По цене (min => max)</span></label>
                </div>
                <div class="search_select_content_item">
                    <input type="checkbox" @click="SortName" id="b"/><label for="b" class="checkbox_name"><span class="checkbox_text">Сортировать по наименованию</span></label>
                </div>
                <div class="search_select_content_item">
                    <input type="checkbox" @click="SortMax" id="c"/><label for="c" class="checkbox_name"><span class="checkbox_text">По цене (max => min)</span></label>
                </div>
            </form>
        </div>
        <div class="lest">
            <div class="list_item">
                <workPreview @deleteWork="deletee" v-for="item in works" :key="item.id" :work="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import workPreview from '~/components/workPreview'

export default {
    components: {
        workPreview,
    },
    props: {
        works: {
            type: Array,
            required: true
        }
    },
    data(){
        return{
            hideList: false,
        }
    },
    methods: {
        deletee(work){
            this.$emit('deteler', work)
        },
        SortPrice(){
            this.$store.dispatch('SortMin')
        },
        SortName(){
            this.$store.dispatch('SortName')
        },
        SortMax(works){
            this.$store.dispatch('SortMax')
        }
    }
}
</script>

<style lang="scss" scoped>
.button_control{
    position: absolute;
    right:40px;
}
.btn_span{
    content: url('~/assets/img/Rectangle 33.png');
    padding-left: 5px;
    transition: .5s;
}
.form_list{
    opacity: 0;
    margin-top: 10px;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    background: #FFFEFB;
    padding: 10px;
}
@keyframes hider {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.form_list.hide{
    z-index: 100;
    animation: hider .5s ease-in;
    opacity: 1;
    width: 100%;
    position: absolute;
}
.btn_span.hide{
    transform: rotateX(180deg);
}
//checkbox
$checkbox-background: #fff;
$checkbox-border: #C4C4C4;
$checkbox-checked: $checkbox-border;
$checkbox-background-checked: #FCE66F;

input[type="checkbox"]{
  opacity: 0;
  &:checked + label::before{
    opacity: 1;
    background-color: $checkbox-background-checked;
  }
}

.search_select_content_item{
  position: relative;

  &:first-child{
      margin-top: 10px;
  }
}
.checkbox_name{
  top: 0px;
  display: flex;
  position: absolute;
  width: 16px;
  height: 16px;
  border: 1px solid $checkbox-border;
  &::before{
    padding: 0 1px;
    opacity: 0;
    content: url('~/assets/img/Vector.png');
  }
  
  .checkbox_text{
    padding-left: 25px;
    text-align: left;
    width: 120px;
    position: absolute;
    &:hover{
      color: #FF0D29;
    }
  }
}
.list_item{
    height: 100vh; 
    width: 100%;
    overflow: scroll;
    width: 100%;
    padding-top: 8px;
    padding-left: 16px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 16px;
}
@media screen and (max-width: 1200px) {
    .list_item{
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-gap: 16px;
    }
}
@media screen and (max-width: 800px) {
    .list_item{
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-gap: 16px;
    }
}
@media screen and (max-width: 600px) {
    .list_item{
        padding-left: 0;
    }
}
@media screen and (max-width: 300px) {
    .button_control{
        right: 30px;
        left: 10px;
    }
}
.lest{
    position: relative;
    width: calc(100% -8px);
    top: 51px;
    width: 100%;
}

</style>