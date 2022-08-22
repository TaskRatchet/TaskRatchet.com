<script setup lang="ts">
defineProps<{

}>()
</script>

<template>
    <article class="BuiltBy">
        <div class="container">
            <div class="img">
                <img src="/Nathan-Arthur.jpg" alt="Nathan Arthur" />
            </div>
            <div class="content">
                <h2 class="title">Built by Narthur</h2>
                <p class="details">
                    TaskRatchet was built by <a href="https://nathanarthur.com">Nathan Arthur</a>, a web developer
                    active in <a href="https://forum.beeminder.com/u/narthur/summary">the Beeminder community</a>.
                    Nathan has been <a href="https://www.beeminder.com/narthur">using Beeminder since 2018</a>. With the
                    encouragement of Beeminder cofounder Danny and the Beeminder community, Nathan launched
                    TaskRatchet <a href="https://blog.beeminder.com/taskratchet/">in 2020</a> to make it easier to make
                    monetary commitments on one-off tasks. Since then he's been making <a
                        href="https://twitter.com/TaskRatchet">steady progress</a> on turning TaskRatchet into the
                    ultimate todo list with consequences.
                </p>
            </div>
        </div>
    </article>
</template>

<style scoped>
.BuiltBy {
    position: relative;
    padding: 0 24px;
}

@media (min-width: 640px) {
    .BuiltBy {
        padding: 0 48px;
    }
}

@media (min-width: 960px) {
    .BuiltBy {
        padding: 0 64px;
    }
}

.container {
    padding: 24px;
    border: 1px solid var(--vp-c-bg-soft);
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    margin: 24px auto;
    max-width: 1152px;
    display: flex;
    flex-direction: row;
}

.img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    background-color: var(--vp-c-bg-soft);
    flex: 0 0 100px;
    margin-right: 24px;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
}

.details {
    padding-top: 8px;
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.details a {
    font-weight: 500;
    color: var(--vp-c-brand);
    text-decoration-style: dotted;
    transition: color 0.25s;
}

.details a:hover {
    color: var(--vp-c-brand-dark);
}
</style>