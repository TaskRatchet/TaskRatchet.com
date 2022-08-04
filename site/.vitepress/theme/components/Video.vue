<script>
export default {
    props: {
        url: String
    },
}
</script>

<template>
    <iframe width="560" height="315" v-bind:src="url" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
</template>