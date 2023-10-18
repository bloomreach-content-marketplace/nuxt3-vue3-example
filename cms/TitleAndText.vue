<template>
  <div>
    <h2>{{ content.title }}</h2>
    <div  v-html="content.text.value"></div>
  </div>
</template>

<script lang="ts" setup>
import {ContainerItem, Page} from "@bloomreach/spa-sdk";
import {computed} from "vue";

const props = defineProps<{
  component: ContainerItem,
  page: Page
}>();

const content = computed(() => props.component.getContent(props.page));
</script>