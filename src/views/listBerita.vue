<template>
  <div class="container">
    <h1 class="has-text-centered is-size-1">Berita Hari Ini</h1>
    <hr />
    <ul>
      <li
        v-for="article in articles"
        :key="article.id"
        class="has-background-primary-light box"
      >
        <h2 v-html="article.judul_berita" class="has-text-centered pt-3"></h2>
        <div class="pr-4 pl-4">
          {{ `${article.waktu_post} | ${article.kategori_berita.nama}` }}
        </div>
        <br />
        <p
          v-html="article.isi_berita.substring(0, 250) + `...`"
          class="pr-4 pl-4 pb-5 has-text-justified"
        ></p>
        <button class="button is-warning is-right">
          <a :href="`/detailberita/${article.id}`">Klik Disini</a>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "listBerita",
  data() {
    return {
      articles: [],
    };
  },
  async mounted() {
    let allberita = await Axios.get(
      "http://localhost:9999/api/v1/berita/allberita"
    );
    console.log(allberita);
    this.articles = allberita.data.data;
  },
};
</script>
