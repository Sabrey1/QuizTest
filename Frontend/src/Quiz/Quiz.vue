<template>
<div class="flex justify-content-center align-items-center h-screen">
 <div class="fix-container body">
    <div class="contain border shadow-3 border-round p-3 ">
        <div class="flex">
            <Button @click="back" icon="pi pi-arrow-left" severity="secondary" text />
            <p>Back</p>
        </div> 
        <div>
            <div class="flex justify-content-between align-items-center">
                <p>Question 1 of 5</p>
            <p>
                20%
            </p>
            </div>
            <div>
                 <ProgressBar :value="50" style="height: 13px; font-size: 10px;"></ProgressBar> 
            </div>
        </div>
        <div>
            <p>What is the default value of 'position' in CSS?</p>
            <Card class="border-2 border-green-100 mb-2 card"> 
                    <template #content>
                        <p class="m-0">
                           Basic CSS concept for beginners
                        </p>
                    </template>
            </Card>
            <Card class="border-2 border-green-100 mb-2 card">
                    <template #content>
                        <p class="m-0">
                           Basic CSS concept for beginners
                        </p>
                    </template>
            </Card>
            <Card class="border-2 border-green-100 mb-2 card">
                    <template #content>
                        <p class="m-0">
                           Basic CSS concept for beginners
                        </p>
                    </template>
            </Card>
            <Card class="border-2 border-green-100 mb-2 card">
        
                    <template #content>
                        <p class="m-0">
                           Basic CSS concept for beginners
                        </p>
                    </template>
            </Card>
            <Button class="flex justify-content-end" @click="next">Next</Button>
        </div>
    </div>
    </div>
</div> 
</template>

<script setup>
import ProgressBar from 'primevue/progressbar';
import 'primeicons/primeicons.css'
import Button from "primevue/button";
import Card from 'primevue/card';
import { useRouter } from 'vue-router'

const router = useRouter()

function next(){
    router.push('/result')
}
</script>

<style scoped>


@media screen and (max-width: 768px) {
    .body{
        padding: 0.5rem;
    }
    .contain{
        padding: 1rem;
    }

}
</style>