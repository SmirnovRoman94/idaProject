<template>
    <div class="new_work">
        <h1 class="new_work_header">Добавление товара</h1>
        <form class="new_work_content">
            <p v-show="add" class="new_work_text">Товар добавлен!</p>
            <AppInput v-model="work.title"  :error="error" :required="true"  :type="'text'" :placeholder="'Введите наименование товара'">Наименование товара</AppInput>
            <AppTextArea v-model="work.desc" :type="'text'" :placeholder="'Введите описание товара'">Описание товара</AppTextArea>
            <AppInput v-model="work.url"  :error="error" :required="true"  :type="'text'" :placeholder="'Введите ссылку'">Ссылка на изображение товара</AppInput>
            <AppInput v-model="work.price" :error="error" :required="true"  :type="'text'" :placeholder="'Введите цену'">Цена товара</AppInput>
            <AppButton :btnClass="green"  @click.prevent="addWork">Добавить товар</AppButton>
        </form>
    </div>
</template>

<script>


export default {
    data(){
        return{
            work:{
                title: '',
                desc: '',
                url: '',
                price: ''
            },
            btn: 'btnDefaul',
            error: false,
            add: false
        }
    },
    methods: {
        addWork(){
            if(this.work.title === ''){
                this.error = true
            }else{
                this.$store.dispatch('addWork', {
                    title: this.work.title,
                    desc: this.work.desc,
                    url: this.work.url,
                    price: this.work.price

                })
                this.work.price = ''
                this.work.title = ''
                this.work.url = ''
                this.work.desc = ''
            }
            
            
        }
    },
    computed: {
        green(){
            if(this.work.title.length > 0 && this.work.price.length > 0 && this.work.url.length > 0){
                return this.btn = 'btnGreen'
            }
           
        },
        reset(){
            this.work.title = ''
        }
    }
    

}
</script>

<style lang="scss" scoped>
.new_work_text{
    transition: .3s;
    color: #7BAE73;
    padding-bottom: 1em;
}
.new_work{
    width: 100%;
}
.new_work_header{
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 35px;
    margin-bottom: 16px;
}
.new_work_content{
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    background: #FFFEFB;
    padding: 24px;
}
</style>