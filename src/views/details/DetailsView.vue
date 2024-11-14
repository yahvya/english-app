<script setup lang="ts">
    import {useRoute} from "vue-router";
    import {ProfileLoader} from "@/utils/profile-loader";
    import {onMounted, ref} from "vue";
    import PictureCard from "@/components/picture-card/PictureCard.vue";

    const route = useRoute<"details">()
    let person = ref<ProfileLoader>()

    onMounted(() => {
        const loader = new ProfileLoader(route.params.name as string)

        loader
            .load()
            .then(() => person.value = loader)
            .catch(() => alert("Echec de chargement des données"))
    })
</script>

<template>
    <div class="details-page">
        <div class="head">
            <PictureCard
                v-if="person != undefined"
                :quickPresentation="person.quickPresentation!!"
                :firstname="person.firstname!!"
                :name="person.name!!"
                :pictureLink="person.images[0]"
            />

            <div class="description background">
                <div class="description-head">
                    <p class="bigger">{{person?.name}} {{person?.firstname}}, born at {{person?.country}}</p>
                    <swiper-container
                        loop
                        autoplay
                    >
                        <swiper-slide v-for="image in person?.images">
                            <div class="img-container">
                                <img :src="image" alt="#">
                            </div>
                        </swiper-slide>
                    </swiper-container>
                </div>
                <pre class="main-text">{{person?.mainText}}</pre>
            </div>
        </div>

        <div class="background description-section" data-aos="flip-up">
            <p class="title">Strengths</p>

            <div class="elements">
                <p class="bigger" v-for="strengh in person?.strenghts">{{strengh}}</p>
            </div>
        </div>

        <div class="background description-section" data-aos="flip-up">
            <p class="title">Weaknesses</p>

            <div class="elements">
                <p class="bigger" v-for="weakness in person?.weakness">{{weakness}}</p>
            </div>
        </div>
    </div>
</template>

<style src="./DetailsView.scss" lang="scss" scoped></style>