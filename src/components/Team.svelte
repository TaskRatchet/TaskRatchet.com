<section class="team">
  <div class="container">
    <h2>Our Team</h2>
    <div class="team-members">
      <div class="team-member">
        <div class="member-image">
          <img
            src="/Nathan-Arthur.jpg"
            alt="Nathan Arthur"
            class="team-photo"
          />
        </div>
        <div class="member-card">
          <h3>Founded by Narthur</h3>
          <p>
            TaskRatchet was built by Nathan Arthur, a web developer active in
            the Beeminder community. Nathan has been using Beeminder since 2018.
            With the encouragement of Beeminder cofounder Danny and the
            Beeminder community, Nathan launched TaskRatchet in 2020 to make it
            easier to make monetary commitments on one-off tasks. Since then
            he's been making steady progress on turning TaskRatchet into the
            ultimate todo list with consequences.
          </p>
        </div>
      </div>
      <div class="team-member">
        <div class="member-image">
          <img
            src="/Nicky-Walters.png"
            alt="Nicky Walters"
            class="team-photo"
          />
        </div>
        <div class="member-card">
          <h3>Supported by Nicky</h3>
          <p>
            Nicky breathes books and raises rabbits. Also they are consummately
            crafty, beguilingly British, and eat university degrees like candy
            (3 and counting!). Here at TaskRatchet Nicky keeps the inbox
            squeaky-clean and has single-handedly improved the level of customer
            support by several orders of magnitude since they got involved in
            late 2022. Nicky's superhero name is Inbox Zero.
          </p>
        </div>
      </div>
      <div class="team-member">
        <div class="member-image">
          <img src="/Luke-Arthur.jpeg" alt="Luke Arthur" class="team-photo" />
        </div>
        <div class="member-card">
          <h3>Developed by Luke</h3>
          <p>
            Luke Arthur joined his brother to work on TaskRatchet in order to
            create the first version of TaskRatchet's mobile apps (coming
            soon!). His love of learning and engineering mindset have been a
            huge help in pushing TaskRatchet forward. When he's not slinging
            code, Luke enjoys flying helicopters, scaling climbing walls,
            playing the piano and violin, and working on film projects.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .team {
    padding: 2.5rem 0 4rem;
    background-color: var(--bg-main);
  }

  h2 {
    text-align: center;
    font-size: 2.25rem;
    margin: 0 0 2.5rem;
    color: var(--text-primary);
  }

  .team-members {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .team-member {
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2.5rem;
    align-items: start;
  }

  /* Alternate layout for every other member */
  .team-member:nth-child(even) {
    grid-template-columns: 1fr 220px;
  }

  .team-member:nth-child(even) .member-image {
    order: 2;
  }

  .team-member h3 {
    margin-top: 0;
  }

  .member-image {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    width: 220px;
    height: 100%;
  }

  .member-image::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .team-member:hover .member-image::after {
    opacity: 1;
  }

  .team-photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .team-member:hover .team-photo {
    transform: scale(1.05);
  }

  /* Dark mode adjustments */
  :global([data-theme="dark"]) .member-image::after {
    background: linear-gradient(
      180deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
  }

  .member-card {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    .team-member,
    .team-member:nth-child(even) {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: center;
    }

    .member-image {
      width: 180px;
      height: 240px;
      margin: 0 auto;
    }

    /* Force all images to top on mobile */
    .member-image {
      order: 1;
    }

    /* Reset any alternate ordering */
    .team-member:nth-child(even) .member-image {
      order: 1;
    }

    /* Force all cards below images */
    .member-card {
      order: 2;
    }
  }
</style>
