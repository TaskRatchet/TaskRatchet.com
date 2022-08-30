<script>
import Container from './Container.vue'

export default {
    components: {
        Container
    },
    data: async () => {
        const user = import.meta.env.VITE_BM_USER;
        const token = import.meta.env.VITE_BM_TOKEN;
        const goal = import.meta.env.VITE_BM_GOAL;
        const url = `https://www.beeminder.com/api/v1/users/${user}/goals/${goal}.json?auth_token=${token}`;
        const response = await fetch(url);
        const data = await response.json();

        return {
            data,
            last_comment: data.last_datapoint.comment,
            last_date: new Date(data.last_datapoint.timestamp * 1000),
            url: `https://www.beeminder.com/${user}/${goal}`
        }
    }
}
</script>

<template>
    <Container title="Changelog">
        <p>Last improvement, {{ last_date.toDateString() }}:</p>
        <div class="highlight">{{ last_comment }}</div>
        <p>Next improvement <a href="{{ url }}">due</a>:</p>
        <div class="highlight">{{ data.limsum }}</div>
        <p><a href="https://twitter.com/TaskRatchet">See all</a></p>
    </Container>
</template>

<style scoped>
.highlight {
    color: var(--vp-c-text-2);
    font-size: 32px;
    line-height: normal;
}

.highlight:not(:last-child) {
    padding: 0 0 24px 0;
}

a {
    font-weight: 500;
    color: var(--vp-c-brand);
    text-decoration-style: dotted;
    transition: color 0.25s;
}

a:hover {
    color: var(--vp-c-brand-dark);
}
</style>