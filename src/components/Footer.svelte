<footer>
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h4>Product</h4>
        <ul>
          <li><a href="https://app.taskratchet.com/register">Sign Up</a></li>
          <li><a href="https://app.taskratchet.com/login">Login</a></li>
          <li><a href="https://docs.taskratchet.com/">Documentation</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Legal</h4>
        <ul>
          <li>
            <a href="https://docs.taskratchet.com/terms.html"
              >Terms of Service</a
            >
          </li>
          <li>
            <a href="https://docs.taskratchet.com/privacy.html"
              >Privacy Policy</a
            >
          </li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Connect</h4>
        <ul>
          <li><a href="https://github.com/taskratchet">GitHub</a></li>
          <li><a href="mailto:support@taskratchet.com">Contact Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        Built with ❤️ by <a href="https://nathanarthur.com">Narthur</a> and
        <a href="https://pinepeakdigital.com">Pine Peak Digital</a>.
      </p>
      <p class="copyright">
        &copy; {new Date().getFullYear()} TaskRatchet. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<style>
  footer {
    padding: 4rem 0 2rem;
    background-color: var(--bg-main);
    border-top: 1px solid var(--border-color);
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .footer-section h4 {
    font-size: 1.125rem;
    font-weight: 600;
    margin: 0 0 1rem;
    color: var(--text-primary);
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-section a,
  .footer-bottom a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .footer-section a:hover,
  .footer-bottom a:hover {
    color: var(--primary);
  }

  :global([data-theme="dark"]) .footer-section a:hover,
  :global([data-theme="dark"]) .footer-bottom a:hover {
    color: var(--primary-dark);
  }

  .footer-bottom {
    padding-top: 2rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
  }

  .footer-bottom p {
    color: var(--text-secondary);
    margin: 0.5rem 0;
  }

  .copyright {
    font-size: 0.875rem;
  }

  @media (max-width: 768px) {
    footer {
      padding: 3rem 0 2rem;
    }

    .footer-content {
      gap: 2rem;
    }

    .footer-section {
      text-align: center;
    }
  }
</style>
