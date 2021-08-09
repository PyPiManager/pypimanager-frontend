<template>
  <div class="rank">
    <div>
      Rank Page
      <UploaderRank></UploaderRank>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import UploaderRank from "@/components/UploaderRank.vue";

export default {
  name: "Rank",
  components: {
    UploaderRank,
  },
};
</script>
