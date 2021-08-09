<template>
  <div class="home">
    <div>
      <Search></Search>
      <br />
      <Upload></Upload>
      <br />
      <Statistics></Statistics>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import Upload from "@/components/Upload.vue";
import Statistics from "@/components/Statistics.vue";

export default {
  name: "Home",
  components: {
    Search,
    Upload,
    Statistics,
  },
};
</script>
