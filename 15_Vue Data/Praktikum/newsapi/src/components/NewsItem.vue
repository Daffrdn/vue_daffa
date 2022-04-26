<template>
    <div class="card mb-3">
        <img class="card-img-top" :src="this.$store.state.api.list[$route.params.id].urlToImage" alt="Card image cap" >
    <div class="card-body">
        <h3 class="card-title">{{ this.$store.state.api.list[$route.params.id].title }}</h3>
        <div class="d-flex justify-content-between">
                <p class="card-text"><small class="text-muted"> {{ this.$store.state.api.list[$route.params.id].author }} </small></p>
                <p class="card-text"><small class="text-muted"> {{ this.$store.state.api.list[$route.params.id].publishedAt }} </small></p>
        </div>
        <h4 class="card-text">{{ this.$store.state.api.list[$route.params.id].content }}</h4>
        <div class="d-flex justify-content-between">
            <p class="font-italic">Lanjutkan <a :href="this.$store.state.api.list[$route.params.id].url"> Disini </a> </p>
            <router-link to="/about">
                <button type="button" class="btn btn-dark">Kembali</button>
            </router-link>
        </div>

  </div>
    <!-- <div class="card-img-top">
        <img :src="this.$store.state.api.list[$route.params.id].urlToImage" width="500px">
        <h3 class="font-weight-bold mt-4">{{ this.$store.state.api.list[$route.params.id].title }} </h3>
            <div class="d-flex justify-content-between">
                <p>{{ this.$store.state.api.list[$route.params.id].author }} </p>
                <p>{{ this.$store.state.api.list[$route.params.id].publishedAt }} </p>
            </div>
        <h5 class="text-justify">{{ this.$store.state.api.list[$route.params.id].content }} </h5>
    <div class="d-flex justify-content-between">
    <p class="font-italic">Lanjutkan <a :href="this.$store.state.api.list[$route.params.id].url"> Disini </a> </p>
    <router-link to="/about">
        <button type="button" class="btn btn-dark">Kembali</button>
    </router-link>
    </div> -->
</div>   
</template>

<script>

export default {
    name: 'NewsItem',
}
    
</script>