<script setup lang="ts">
    import type {SwiperContainer} from "swiper/element";
    import {useRouter} from "vue-router";

    const props = defineProps({
        pictureLink: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
        },
        firstname: {
            type: String,
            required: true
        },
        quickPresentation: {
            type: String,
            required: true
        }
    })
    const router = useRouter()

    /**
     * @brief redirect to details page
     */
    async function redirect(){
        await router.push({
            name: "details",
            params: {
                name: props.name
            }
        })
    }

    /**
     * @brief flip or un flip the card
     * @param event {MouseEvent}
     */
    function flipCard(event: MouseEvent){
        const swiperElement = event.target as SwiperContainer

        if(!swiperElement.swiper.slideNext())
            swiperElement.swiper.slidePrev()
    }
</script>

<template>
    <div data-aos="flip-up" class="animation-container">
        <div class="picture-card" @click="redirect" >
            <div class="pin">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="122.879px" height="122.867px" viewBox="0 0 122.879 122.867" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M83.88,0.451L122.427,39c0.603,0.601,0.603,1.585,0,2.188l-13.128,13.125 c-0.602,0.604-1.586,0.604-2.187,0l-3.732-3.73l-17.303,17.3c3.882,14.621,0.095,30.857-11.37,42.32 c-0.266,0.268-0.535,0.529-0.808,0.787c-1.004,0.955-0.843,0.949-1.813-0.021L47.597,86.48L0,122.867l36.399-47.584L11.874,50.76 c-0.978-0.98-0.896-0.826,0.066-1.837c0.24-0.251,0.485-0.503,0.734-0.753C24.137,36.707,40.376,32.917,54.996,36.8l17.301-17.3 l-3.733-3.732c-0.601-0.601-0.601-1.585,0-2.188L81.691,0.451C82.295-0.15,83.279-0.15,83.88,0.451L83.88,0.451z"/></g></svg>
            </div>

            <swiper-container
                @mouseenter="flipCard"
                @mouseleave="flipCard"
            >
                <swiper-slide>
                    <div class="img-container container">
                        <img :src="props.pictureLink" :alt="props.name + ' ' + props.firstname">
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="container presentation-container">
                        <div>
                            <p>{{ props.name }} {{ props.firstname }}</p>
                            <p class="quick-presentation-text">{{ props.quickPresentation }}</p>
                        </div>

                        <p class="information-text">Appuyez pour plus de détails</p>
                    </div>
                </swiper-slide>
            </swiper-container>
        </div>
    </div>
</template>

<style src="./PictureCard.scss" lang="scss"></style>