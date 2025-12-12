<template>
    <div class="bg-gray-200 h-screen p-0">   
    <div class="fix-container">
        <div class="header text-center">
            <h1 class="mt-0 pt-4">CSS Quiz</h1>
            <p class="textHeader">Test your CSS knowledge. Choose your difficulty level to begin.</p>
        </div>
        <div class="contain">
            <Card class="mb-2 border-2 border-green-100 card">
                    <template #title>Easy</template>
                    <template #content>
                        <p class="m-0">
                           Basic CSS concept for beginners
                        </p>
                    </template>
            </Card>
            <Card class="mb-2 border-2 border-green-100 card">
                    <template #title>Medium</template>
                    <template #content>
                        <p class="m-0">
                            FlexBox, Grid & Box Model
                        </p>
                    </template>
            </Card>
            <Card class="mb-2 border-2 border-green-100 card">
                    <template #title>Hard</template>
                    <template #content>
                        <p class="m-0">
                            Advanced CSS techniques
                        </p>
                    </template>
            </Card>
        </div>
    </div>
     </div>
</template>
<script setup>
    import Card from 'primevue/card';
</script>
<style scoped>
.card{
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.card:hover{
    transform: scale(1.02);
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