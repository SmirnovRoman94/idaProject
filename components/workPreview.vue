<template>
    <div class="work_item">
            <img class="work_img" :src="require(`~/assets/img${work.url}`)" :alt="work.title">
            <div class="work_content">
                <h3 class="work_header">{{work.title}}</h3>
                <p class="work_descr">{{work.desc}}</p>
                <p class="work_price">{{newPrice}}<span class="price_span">руб.</span></p>
            </div>
            <div class="delete">
                <img @click="deleteWork(work)" class="delete_item" src="~/assets/img/Group 16.png" alt="delete"/>
            </div>
    </div>
</template>

<script> 
export default {
    props: {
        work: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteWork(work){
            this.$emit('deleteWork', this.work)
        }
    },
    computed: {
        newPrice(){
            let price = this.work.price
            let newFrm = new Intl.NumberFormat('ru-RU').format(price)
            return newFrm
        }
    },

}
</script>

<style lang="scss" scoped>
.work_item{
    position: relative;
    width: calc(100% - 8px);
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    max-height: 423px;
    &:hover .delete{
        opacity: 1;
        transition: .5s;
    }
    .work_img{
        width: 100%;
        max-height: 200px;
    }
    .work_content{
        padding: 16px;
        .work_header{
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
        }
        .work_descr{
            padding: 16px 0;
            font-size: 16px;
            line-height: 20px;
        }
        .work_price{
            padding: 16px 0;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            .price_span{
                padding-left: 4px;
            }
        }
    }
    .delete{
        transition: .5s;
        opacity: 0;
        position: absolute;
        top: -8px;
        right: -8px;
    }
}
</style>