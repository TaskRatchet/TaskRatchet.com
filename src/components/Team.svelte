<section class="team">
  <div class="container">
    <h2>Our Team</h2>
    <div class="team-members">
      <div class="team-member">
        <img
          src="/Nathan-Arthur.jpg"
          alt="Nathan Arthur"
          class="team-photo"
        />
        <h3>Founded by Narthur</h3>
        <p>
          TaskRatchet was built by Nathan Arthur, a web developer active in
          the Beeminder community. Nathan has been using Beeminder since
          2018. With the encouragement of Beeminder cofounder Danny and the
          Beeminder community, Nathan launched TaskRatchet in 2020 to make
          it easier to make monetary commitments on one-off tasks. Since
          then he's been making steady progress on turning TaskRatchet into
          the ultimate todo list with consequences.
        </p>
      </div>
      <div class="team-member">
        <img
          src="/Nicky-Walters.png"
          alt="Nicky Walters"
          class="team-photo"
        />
        <h3>Supported by Nicky</h3>
        <p>
          Nicky breathes books and raises rabbits. Also they are
          consummately crafty, beguilingly British, and eat university
          degrees like candy (3 and counting!). Here at TaskRatchet Nicky
          keeps the inbox squeaky-clean and has single-handedly improved the
          level of customer support by several orders of magnitude since
          they got involved in late 2022. Nicky's superhero name is Inbox
          Zero. (RIP Breakfast Bun, also pictured)
        </p>
      </div>
      <div class="team-member">
        <img src="/Luke-Arthur.jpeg" alt="Luke Arthur" class="team-photo" />
        <h3>Developed by Luke</h3>
        <p>
          Luke Arthur joined his brother to work on TaskRatchet in order to
          create the first version of TaskRatchet's mobile apps (coming
          soon!). His love of learning and engineering mindset have been a
          huge help in pushing TaskRatchet forward. When he's not slinging
          code, Luke enjoys flying helicopters, scaling climing walls,
          playing the piano and violin, and working on film projects.
        </p>
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
    margin: 1.5rem 0 2.5rem;
    color: var(--text-primary);
  }

  .team-members {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .team-member {
    background: var(--bg-card);
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    transition: transform 0.2s ease;
  }

  .team-member:hover {
    transform: translateY(-4px);
  }

  .team-photo {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    object-fit: cover;
    border: 4px solid var(--bg-main);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    .team-members {
      grid-template-columns: 1fr;
    }
  }
</style>
