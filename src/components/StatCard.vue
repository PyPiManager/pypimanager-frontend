<template>
  <div>
    <p class="title"><span :class="iconClass"></span>{{ title }}</p>
    <p class="count">{{ count }}</p>
    <p class="desc">{{ desc }}</p>
  </div>
</template>


<script>
// import { toRefs } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: () => {
        return '卡片名称'
      }
    },
    count: { 
      type: Number, 
      default: () => {
        return 0
      }
    },
    desc: {
      type: String,
      default: () => {
        return '卡片描述'
      }
    },
    iconClass: {
      type: String,
      default: () => {
        return 'el-icon-s-cooperation'
      }
    }
  },
  // setup(props) {
  //   const { cardName, cardCount, cardDesc } = toRefs(props);
  //   return {
  //     cardName, cardCount, cardDesc
  //   }
  // },
}
</script>


<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.title {
  margin-top: 0px;
  margin-bottom: 0px;
  padding: auto;
  font-size: 18px;
}

.count {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 50px;
}

.desc {
  margin-top: 5px;
  margin-bottom: 0px;
  font-size: 15px;
}
</style>
