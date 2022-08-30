<script>
export default {
    props: {
        title: String
    },
}
</script>

<template>
    <div class="Container">
        <div class="inner">
            <h2 class="title">{{ title }}</h2>
            <div class="details">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.Container {
    position: relative;
    padding: 0 24px;
}

@media (min-width: 640px) {
    .Container {
        padding: 0 48px;
    }
}

@media (min-width: 960px) {
    .Container {
        padding: 0 64px;
    }
}

.inner {
    padding: 24px;
    border: 1px solid var(--vp-c-bg-soft);
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    margin: 24px auto;
    max-width: 1152px;
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