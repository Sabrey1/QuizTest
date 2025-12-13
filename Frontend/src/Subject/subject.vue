<template>
    <div class="bg-gray-200 h-screen p-0">   
        <div class="flex justify-content-center align-items-center h-screen">
            <div class="fix-container bg-white p-3 ">
                <AppBar class="border-none p-0">
                    <h2>Back</h2>
                   
                </AppBar>
                <div class="header text-center">
                    <h1 class="my-0">Web Dev Quiz</h1>
                    <p class="textHeader mt-0">Choose a subject to test your knowledge</p>
                </div>
                <div class="contain">
                   
                    <Card @click="goToEasy" v-for="index in data" class="mb-2 border-2 border-green-100 card">
                            <template #content>
                                <div class="flex gap-3 align-items-center flex-wrap">
                                    <i class="pi pi-code text-4xl bg-orange-400 p-2 border-round"></i>
                                    <div>
                                        <h2 class="my-0 ">{{ index?.title }}</h2>
                                    <p class="m-0">
                                        {{ index?.description }}
                                    </p>
                                    </div>
                                </div>
                            </template>
                    </Card>
                </div>
            </div>
        </div>
     </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Card from 'primevue/card';
import { useRouter } from 'vue-router'
import 'primeicons/primeicons.css'
const router = useRouter()

const data = ref()
function goToEasy(){
    router.push('/quiz')
}

async function getData(){
    const res = await axios.get('http://127.0.0.1:8000/api/quiz')

    if(res.data){
        data.value = res.data
    }
}
onMounted(() => {
    getData()
})
</script>
<style scoped>
.card{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.card:hover{
    transform: scale(1.02);
    background-color: rgb(148, 243, 243);
    border: green 2px solid!important;
}
    @media screen and (max-width: 768px) {
        .contain{
            padding: 1rem;
        }
        .textHeader{
            padding: 1rem;
        }
    }
</style>