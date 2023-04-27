import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("main", {
  state: () => {
    return {
      count: 10,
      list: [
        {
          name: "iphone13",
          price: 5800,
          num: 1,
        },
        {
          name: "huawei",
          price: 6000,
          num: 1,
        },
      ],
      timuList: [],
    };
  },
  getters: {
    sumPrice: (state) => {
      return state.list.reduce((pre, item) => {
        return pre + item.price;
      }, 0);
    },
  },
  // 同步和异步都可以
  actions: {
    async getTimu() {
      let result = await axios.get("/tsconfig.json");
      console.log(result);
      this.timuList = result.data;
    },
  },
  persist: true,
});
