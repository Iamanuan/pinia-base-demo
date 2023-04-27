<script setup lang="ts">
import useMainStore from "./store/index";
import { storeToRefs } from "pinia";
const store = useMainStore();
let { count, list, sumPrice } = storeToRefs(store);

const handleClick = () => {
  // store.count++;
  count.value++;
  store.list.push({ name: "vivo", price: 3000, num: 1 });
};

const patchClick = () => {
  store.list.push({ name: "oppo", price: 2000, num: 1 });
  store.$patch({ count: store.count + 5, list: store.list });
};

const patchFnClick = () => {
  store.$patch((state) => {
    state.list.push({ name: "mi13", price: 1000, num: 1 });
    state.count += 10;
  });
};

const toggleState = () => {
  store.$state = {
    count: 100,
    list: [
      { name: "oppo", price: 2000, num: 1 },
      { name: "vivo", price: 3000, num: 1 },
    ],
  };
};

const resetState = () => {
  store.$reset();
};

store.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
});
</script>

<template>
  <div class="bgClass">
    <h1>商品总价：{{ store.sumPrice }}</h1>
    <h1>商品总价：{{ sumPrice }}</h1>
    <h1>商品数量：{{ store.count }}</h1>
    <h1>商品数量：{{ count }}</h1>
    <ul>
      <li v-for="item in list">{{ item.name }}{{ item.price }}</li>
    </ul>
    <button @click="handleClick">+1</button>
    <br />
    <button @click="patchClick">+5</button>
    <br />
    <button @click="patchFnClick">+10</button>
    <br />
    <button @click="toggleState">替换state</button>
    <br />
    <button @click="resetState">重置state</button>
    <br />
    <button @click="store.getTimu()">获取异步数据</button>
    <h1>题目列表</h1>
    <ul>
      <li v-for="item in store.timuList">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.bgClass {
  width: 100%;
  height: 100%;
}
button {
  width: 130px;
  height: 40px;
  background-color: #ccc;
  color: #000;
}
</style>
