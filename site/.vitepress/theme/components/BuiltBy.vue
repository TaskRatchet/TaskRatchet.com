<script setup lang="ts">
defineProps<{

}>()
</script>

<template>
    <article class="BuiltBy">
        <div class="container">
            <h1 class="main-title">Team</h1>
            <div class="bios">
                <div class="bio">
                    <div class="img">
                        <img src="/Nathan-Arthur.jpg" alt="Nathan Arthur" />
                    </div>
                    <div class="content">
                        <h2 class="title">Founded by Narthur</h2>
                        <p class="details">
                            TaskRatchet was built by <a href="https://nathanarthur.com">Nathan Arthur</a>, a web
                            developer
                            active in <a href="https://forum.beeminder.com/u/narthur/summary">the Beeminder
                                community</a>.
                            Nathan has been <a href="https://www.beeminder.com/narthur">using Beeminder since 2018</a>.
                            With
                            the
                            encouragement of Beeminder cofounder Danny and the Beeminder community, Nathan launched
                            TaskRatchet <a href="https://blog.beeminder.com/taskratchet/">in 2020</a> to make it easier
                            to
                            make
                            monetary commitments on one-off tasks. Since then he's been making <a
                                href="https://forum.beeminder.com/t/taskratchet-development-updates/5037">steady
                                progress</a> on
                            turning TaskRatchet into the
                            ultimate todo list with consequences.
                        </p>
                    </div>
                </div>
                <div class="bio">
                    <div class="img">
                        <img src="/Nicky-Walters.png" alt="Nicky Walters" />
                    </div>
                    <div class="content">
                        <h2 class="title">Supported by Nicky</h2>
                        <p class="details">
                            Nicky <a href="https://breathesbooks.com/" title="Nicky's book blog!">breathes books</a> and
                            raises
                            rabbits. Also
                            they are consummately <a href="https://twitter.com/shanaqui/status/1108509105650585600"
                                title="Nicky sewing">crafty</a>, beguilingly British, and eat university degrees like
                            candy
                            (3
                            and counting!).
                            Here at TaskRatchet Nicky keeps the inbox squeaky-clean and has single-handedly improved the
                            level
                            of customer support by several orders of magnitude since they got involved in late 2022.
                            Nicky's superhero name is Inbox Zero. (RIP Breakfast Bun, also pictured)

                        </p>
                    </div>
                </div>
                <div class="bio">
                    <div class="img">
                        <img src="/Luke-Arthur.jpeg" alt="Luke Arthur" />
                    </div>
                    <div class="content">
                        <h2 class="title">Developed by Luke</h2>
                        <p class="details">
                            <a href="https://github.com/lcflight">Luke Arthur</a> joined his brother to work on
                            TaskRatchet
                            in
                            order to create the first version of TaskRatchet's mobile apps (coming soon!). His love of
                            learning
                            and engineering mindset have been a huge help in pushing TaskRatchet forward. When he's not
                            slinging code, Luke
                            enjoys flying helicopters, scaling climing walls, playing the piano and violin, and working
                            on
                            film
                            projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
.BuiltBy {
    position: relative;
}

.BuiltBy .main-title {
    letter-spacing: -0.02em;
    line-height: 40px;
    font-size: 28px;
    position: relative;
    font-weight: 600;
    outline: none;
    margin: 64px 0 16px;
}

.container {
    max-width: 1152px;
    margin: 16px auto;
}

.bios {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

.bio {
    padding: 24px;
    border: 1px solid var(--vp-c-bg-soft);
    background-color: var(--vp-c-bg-soft);
    border-radius: 12px;
    flex: 1 0 0;
    min-width: 300px;
}

.img {
    width: 100px;
    height: 100px;
    overflow: hidden;
    background-color: var(--vp-c-bg-soft);
    margin-bottom: 20px;
}

.img img {
    border-radius: 6px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    border: none;
    padding: 0;
}

.details {
    padding-top: 8px;
    margin: 0;
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