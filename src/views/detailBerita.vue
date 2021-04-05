<template>
  <div class="container">
    <h2 class="has-text-centered is-size-1 mt-5">
      {{ articles.judul_berita }}
    </h2>
    <hr />
    <div class="pr-4 pl-4">
      {{ `${articles.waktu_post} | ${articles.kategori_berita}` }}
    </div>
    <div class="pr-4 pl-4">
      <div class="card-content has-background-dark has-text-primary-light">
        <p>
          <span v-html="articles.isi_berita"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "detailBerita",
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    let allberita = await Axios.get(
      `http://localhost:9999/api/v1/berita/beritaById/${this.$route.params.id}`
    );
    this.articles = allberita.data.data;
    console.log(this.articles);
  },
};
</script>
