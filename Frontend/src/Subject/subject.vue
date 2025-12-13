<template>
    <div class="bg-gray-200 h-screen p-0">   
        <div class="flex justify-content-center align-items-center h-screen">
            <div class="fix-container bg-white p-3 ">
                <AppBar class="border-none">
                    <h2>Back</h2>
                </AppBar>
                <div class="header text-center">
                    <h1 class="mt-0 pt-4">Web Dev Quiz</h1>
                    <p class="textHeader">Choose a subject to test your knowledge</p>
                </div>
                <div class="contain">
                    <Card @click="goToEasy" class="mb-2 border-2 border-green-100 card">
                            <template #content>
                                <div class="flex gap-3 align-items-center flex-wrap">
                                    <i class="pi pi-code text-4xl bg-orange-400 p-2 border-round"></i>
                                    <div>
                                        <h2 class="my-0 ">HTML</h2>
                                    <p class="m-0">
                                    Structure & Semantics
                                    </p>
                                    </div>
                                </div>
                            </template>
                    </Card>
                    <Card class="mb-2 border-2 border-green-100 card">
                            <template #content>
                                <div class="flex gap-3 align-items-center flex-wrap">
                                    <i class="pi pi-palette text-4xl bg-blue-400 p-2 border-round"></i>
                                    <div>
                                        <h2 class="my-0">CSS</h2>
                                    <p class="m-0">
                                        Style & Layout
                                    </p>
                                    </div>
                                </div>     
                            </template>
                    </Card>
                    <Card class="mb-2 border-2 border-green-100 card">
                            <template #content>
                                <div class="flex gap-3 align-items-center flex-wrap">
                                    <i class="pi pi-code text-4xl bg-yellow-400 p-2 border-round"></i>
                                    <div>
                                        <h2 class="my-0">Javascript</h2>
                                    <p class="m-0">
                                    Logic & Interactivity
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
import Card from 'primevue/card';
import { useRouter } from 'vue-router'
import 'primeicons/primeicons.css'
const router = useRouter()

function goToEasy(){
    router.push('/home')
}
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