<template>
  <!-- <Toolbar class="block lg:hidden flex pl-0"> -->
  <Toolbar>
    <template #start>
      <Button @click="back" icon="pi pi-arrow-left" severity="secondary" text />
      <slot></slot>
    </template>
    
    <template #end>
      <!-- <ComUserProfileAvatar /> -->
    </template>
  </Toolbar>
  <!-- <slot name="right"></slot> -->
</template>

<script setup>
import Toolbar from "primevue/toolbar";
import 'primeicons/primeicons.css'
import Button from "primevue/button";

import { useRouter } from 'vue-router'

const router = useRouter()

function back(){
  router.back()
}
</script>
