<template>
    <div>
        <div class="fix-container">
        <Card class="shadow bg-white">
                    <template #content>
                        <p class="text-center p-0 mb-0">
                            <i class="pi pi-trophy p-5 text-3xl border-circle color-green text-green-500 text-center bg-green-100"></i>
                        </p>
                        <p class="text-center font-bold text-2xl">Quiz Complete!</p>
                        <div class="grid">
                        <div class="col">
                                <div class="text-center p-3 border-round-sm font-bold">
                                    <p class="m-0"><i class="pi pi-bullseye"></i></p>
                                    <p class="m-0">2/5</p>
                                    <p class="m-0">Correct</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center p-3 border-round-sm font-bold ">
                                    <i class="pi pi-bolt"></i>
                                    <p class="m-0">40%</p>
                                    <p class="m-0">Score</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="text-center p-3 border-round-sm font-bold ">
                                    <p class="m-0"><i class="pi pi-trophy"></i></p>
                                    <p class="m-0">Retry</p>
                                    <p class="m-0">Status</p>
                                </div>
                            </div>
                        </div>
                        <div>
                             <ProgressBar :value="50" :showValue="false"   style="height: 13px; font-size: 10px;"></ProgressBar> 
                        </div>
                        <div class="mt-4 flex justify-content-center">
                        <Button 
                            icon="pi pi-refresh" 
                            class="w-2 flex justify-center gap-2 items-center" 
                            @click="next"
                            label="Try Again"
                            >
                            </Button>
                        </div>
                    </template>
            </Card>
        </div>
    </div>
 </template>

<script setup>
import Card from 'primevue/card';
import 'primeicons/primeicons.css'
import ProgressBar from 'primevue/progressbar';
import Button from "primevue/button";
</script>

<style scoped>
   
</style>