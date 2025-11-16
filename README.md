<section id="my-ai-usage">
  <h2>My AI Usage</h2>

  <p>
    During development I used AI tools to speed up boilerplate, help design APIs,
    and assist with debugging and testing. Below is a clear and transparent
    summary of which tools I used, how I used them, and my reflections on the
    impact of AI on my workflow.
  </p>

  <h3>Tools used</h3>
  <ul>
    <li><strong>ChatGPT (OpenAI)</strong> — used for explaining concepts, generating code snippets, suggesting fixes, and drafting documentation and tests.</li>
    <li><strong>GitHub Copilot</strong> — used to suggest inline code completions while writing components and simple utility functions (only when it helped speed up repetitive work).</li>
    <!-- Edit or remove entries above to match the exact tools you actually used -->
  </ul>

  <h3>How I used these tools</h3>
  <ul>
    <li><strong>ChatGPT</strong>
      <ul>
        <li>Generated initial backend and frontend boilerplate examples (FastAPI/SQLAlchemy endpoints and React/Vite components).</li>
        <li>Explained step-by-step setup instructions (virtual environment, Docker commands, running the dev server).</li>
        <li>Helped debug errors by analyzing terminal output and suggesting fixes (e.g., routing and import issues, Vite/Tailwind setup problems).</li>
        <li>Drafted README sections, git commit message templates, and example tests following a TDD approach.</li>
      </ul>
    </li>

    <li><strong>GitHub Copilot</strong>
      <ul>
        <li>Provided inline code suggestions for repetitive UI markup and small helper functions.</li>
        <li>Accelerated writing of component templates and CSS classes; suggestions were reviewed and edited manually before committing.</li>
      </ul>
    </li>
  </ul>

  <h3>Example of AI co-authorship in commit messages</h3>
  <p>
    Per the project rules, when I used AI to generate or assist with code included in a commit, I added the AI as a co-author in the commit message. Example:
  </p>

  <pre><code>git commit -m "feat: Implement user registration endpoint

Used an AI assistant to generate the initial boilerplate for the controller and service, then manually added validation logic.

Co-authored-by: ChatGPT &lt;chatgpt@noreply.github.com&gt;"
</code></pre>

  <h3>Reflection — how AI impacted my workflow</h3>
  <p>
    AI tools significantly sped up the early scaffolding of the project and reduced time spent on boilerplate. ChatGPT was especially useful for:
  </p>
  <ul>
    <li>Rapidly prototyping API endpoints and React components which I then adapted to match project requirements.</li>
    <li>Explaining confusing error messages and suggesting precise fixes, which reduced debugging time.</li>
    <li>Drafting tests and test ideas to follow a TDD-style approach (I still wrote and verified all tests manually).</li>
  </ul>

  <p>
    Important notes about responsible AI use in this project:
  </p>
  <ul>
    <li>All AI-generated suggestions were reviewed and edited by me — I validated correctness, security, and style before adding them to the codebase.</li>
    <li>I explicitly recorded each commit that used AI assistance by adding a co-author trailer in the commit message as required by the assignment.</li>
    <li>I avoided blindly accepting generated code; final responsibility for design, quality and security rests with me (the developer).</li>
  </ul>

  <h3>Where to find more details</h3>
  <p>
    For a full list of commits that used AI assistance, please check the commit history in this repository. Commits that used AI include an explanatory sentence and a <code>Co-authored-by</code> trailer in the commit message.
  </p>
</section>
