<script setup lang="ts">
    import PictureCard from "@/components/picture-card/PictureCard.vue";
    import {onMounted, ref} from "vue";
    import {ProfileLoader} from "@/utils/profile-loader";
    import {config} from "@/utils/config"

    const persons = ref<Array<ProfileLoader>>([])

    onMounted(() => {
        fetch(`${config.baseUrl}/configurations/map.json`)
            .then(response => response.json())
            .then(list => {
                list.forEach((name:string) => {
                    const person = new ProfileLoader(name)

                    person
                        .load()
                        .then(() => {
                            persons.value.push(person)
                        })
                })
            })
            .catch(_ => alert("Une erreur s'est produite lors du chargement"))
    })
</script>

<template>
    <div class="picture-cards">
        <PictureCard
            v-for="person in persons"
            :name="person.name"
            :firstname="person.firstname!!"
            :pictureLink="person.images[0]"
            :quickPresentation="person.quickPresentation!!"
        />
    </div>
</template>

<style src="./HomeView.scss" lang="scss"></style>