<template>
<div class="flex justify-content-center align-items-center h-screen">
 <div class="fix-container body">
    <div class="contain border shadow-3 border-round p-3 ">
       <AppBar class="border-none p-0">
            <h2>Back</h2>
            <!-- {{ data }} -->
        </AppBar> 
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
            <Card
                v-for="quiz in data"
                :key="quiz.id"
                class="border-2 border-green-100 mb-2 mt-2 card"
                >
                <template #content>
                    <div v-for="question in quiz.questions" :key="question.id" class="ml-4 mb-2">
                    {{ question.question_text }}
                    </div>
                </template>
            </Card>
            <Button class="flex justify-content-end" @click="next">Next</Button>
        </div>
    </div>
    </div>
</div> 
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProgressBar from 'primevue/progressbar';
import 'primeicons/primeicons.css'
import Button from "primevue/button";
import Card from 'primevue/card';
import { useRouter } from 'vue-router'

const router = useRouter()
const data = ref()

function next(){
    router.push('/result')
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


@media screen and (max-width: 768px) {
    .body{
        padding: 0.5rem;
    }
    .contain{
        padding: 1rem;
    }

}
</style>