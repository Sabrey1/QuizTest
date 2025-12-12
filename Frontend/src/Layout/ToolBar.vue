<template>
  <Toolbar class="fixed block lg:hidden flex w-full">
    <template #start>
      <Button @click="visible = true" icon="pi pi-bars" severity="secondary" text />
      <slot></slot>
    </template>
    
    <template #end>
      <ComUserProfileAvatar />
    </template>
  </Toolbar>
 
 
    <!-- Drawer -->
    <Drawer v-model:visible="visible" position="left" class="mobile-drawer">
      <template #container="{ closeCallback }">
        <div class="p-1">
          <!-- Header -->
          <div class="flex">    
            <Button
              icon="pi pi-times"
              class="p-button-text"
              @click="closeCallback"
            />
            <h1>{{t("Menu")}}</h1>
          </div>
          <div>
            <ul class="list-none p-0 ">
              <li @click="home">
                <a v-ripple class="flex items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                  <i class="pi pi-home mr-2"></i>
                  <span class="font-medium">{{t("Home")}}</span>
                </a>
              </li> 
              <li @click="promotion">
                <a v-ripple class="flex items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                  <i class="pi pi-tag mr-2"></i>
                  <span class="font-medium">{{ t("Promotion") }}</span>
                </a>
              </li> 

              <li @click="order">
                <a v-ripple class="flex items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                  <i class="pi pi-cart-arrow-down mr-2"></i>
                  <span class="font-medium">{{ t("My Orders") }}</span>
                </a>
              </li> 
              
              <li @click="reward">
                <a v-ripple class="flex items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                  <i class="pi pi-gift mr-2"></i>
                  <span class="font-medium">{{ t("Reward") }}</span>
                </a>
              </li> 
              <li @click="myaccount">
                <a v-ripple class="flex items-center cursor-pointer p-2 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple">
                  <i class="pi pi-user mr-2"></i>
                  <span class="font-medium">{{ t("My Account") }}</span>
                </a>
              </li> 
              
            </ul>
          </div>
          
          <div class="flex-1 overflow-y-auto p-4">
            <slot name="right"></slot> 
          </div>
          
        </div>
      </template>
    </Drawer>
   
</template>

<script setup>
import { ref } from "vue";
import Toolbar from "primevue/toolbar";
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import { useRouter } from "vue-router";
const visible = ref(false);
const router = useRouter();
function home() {
  router.push({ name: 'Home' });
}
function promotion() {
  router.push({ name: 'Promotions' });
}
function order() {
  router.push({name: 'OrderList'});
}
function reward() {
  router.push('/rewards');
}
function myaccount() {
  router.push('/user-profile');
}
</script>

<style scoped>

.mobile-drawer .p-drawer {
  width: 100%;
  max-width: 280px;
}

.mobile-drawer .flex-1 {
  -webkit-overflow-scrolling: touch;
}
</style>
