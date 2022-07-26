<template>
    <div class="slider-header">
        <div class="slider-heaer__title"> Просмотренные товары</div>
        <div class="slider-btn-group">
            <div class="slider-btn-group__btn" @click="$store.commit('incSlide')">
                &and;
            </div>
            <div class="slider-btn-group__curent-slide-number">{{ $store.state.sliderCounter }}</div>
            <div class="slider-btn-group__total-slide-number">  /{{ $store.state.watched.length / 4 }} </div>
            <div class="slider-btn-group__btn" @click="$store.commit('decSlide')">
                &or;
            </div>
        </div>
    </div>
    <div class="slider">
        <transition-group name="slider_anim-wraper">
            <div v-for="item in $store.state.watched.slice(0, 4)" :key="item.id">
                <div class="slider__items">
                    <img class="slider__img" :src="item.image" />
                    <div>
                        <div class="slider__title">{{ item.title }}</div>
                        <div class="slider__cont">{{ item.content }}</div>
                    </div>
                    <div>
                        <div class="slider__price">{{ item.price }} </div>
                        <div class="slider__euro-price">{{ item.euroPrice }}</div>
                    </div>
                    <button class="slider-btn">Подробнее</button>
                </div>
            </div>
        </transition-group>
    </div>


</template>
<script>
export default {
    name: 'slider'
}

</script>
<style>
.slider_anim-wraper-item {
    display: inline-block;
    margin-right: 50px;
}

.slider_anim-wraper-enter-active,
.slider_anim-wraper-leave-active {
    transition: all 0.3s ease;
}

.slider_anim-wraper-enter-from,
.slider_anim-wraper-leave-to {
    opacity: 1;
    transform: translateX(1130px);
}

.slider {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: hidden;

}

.slider-header {
    display: flex;
    justify-content: space-between;
}

.slider-btn-group {
    display: flex;
}

.slider-btn-group__btn {
    border-radius: 50%;
    background: #90A2B5;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    transform: rotate(-90deg);
    font-size: 1.5rem;

}

.slider-heaer__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
    color: #1F2432;
    text-align: left;
}

.slider__items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    max-width: 305px;
    height: 563px;
    text-align: left;
    padding: 20px;
    background: #F6F8FA;
    border-radius: 5px;
}

.slider__title {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 120.52%;
    color: #1F2432;
}

.slider__cont {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1F2432;
}

.slider__price {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: #1F2432;
}

.slider__euro-price {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797B86;
}

.slider-btn {
    background: #0069B4;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 54px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;
    color: #FFFFFF;
    margin-bottom: 12px;
}

.slider-btn-group__curent-slide-number {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    color: #212121;
}

.slider-btn-group__total-slide-number {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    display: flex;
    margin-top: 10px;
    align-items:baseline;

}

.slider-btn:hover {
    background-color: #053e68;
    transition: 0.2s linear;
}

.slider-btn:active {
    background-color: #8a8d99;
    border: #4f505228 solid 3px;
}
</style>