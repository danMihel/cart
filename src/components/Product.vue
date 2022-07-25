<template>
    <div class="">
        <img class="product__img" :src="product.image" />
        <div class="product__items">
            <div class="product__title">{{ product.title }}</div>
            <div class="product__cont">{{ product.content }}</div>
            <div class="product__art">{{ product.art }}</div>
        </div>
        <div class="product__counter-container">
            <div class="product__counter-btn-group">
                <div class="product__counter-btn product__counter-btn__pointer"
                    @click.prevent="this.$store.commit('multiPriceDecrise', product)">-
                </div>
                <div class="product__counter-btn">{{ product.amount }}</div>
                <div class="product__counter-btn product__counter-btn__pointer"
                    @click.prevent="this.$store.commit('multiPriceIncrise', product)">+
                </div>
            </div>
            <div class="product__static-price" v-if="product.amount > 1"> {{
                    product.price.toLocaleString('ru-RU')
            }} &#8381;/шт.</div>
            <div class="product__static-price" v-else> &nbsp;</div>
        </div>
        <div class="product__price">{{ product.totalPrice.toLocaleString('ru-RU') }} &#8381;</div>
        <div class="product__remove-btn"><span @click.prevent="this.$store.commit('removeFromCart', product)"> &#x00D7;</span></div> 
    </div>
</template>

<script>
export default {
    name: 'product',
    props: {
        product: {
            type: Object,
            require: true
        },
        itemId: {
            require: true
        }
    },
}
</script>
<style>

.product__items {
    text-align: left;
    margin-right: 5%;
}

.product__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
}

.product__cont {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;
    color: #2C3242;
}

.product__art {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
}

.product__counter-container {
    display: flex;
    flex-direction: column;
    margin-right: 5%;
}

.product__counter-btn-group {
    display: flex;
}

.product__counter-btn {
    position: relative;
    top: 9px;
    height: 34px;
    width: 34px;
    border-radius: 4px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #F6F8FA;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #1F2432;
    margin-right: 4px;
}

.product__counter-btn__pointer {
    cursor: pointer;
}

.product__static-price {
    position: relative;
    height: 1rem;
    top: 15px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #1F2432
}

.product__price {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    color: #1F2432;
}
.product__remove-btn{
    height: 80px;
    cursor: pointer;
}
</style>
