<svelte:head>
  <title>crumberry</title>
  <meta
    name="description"
    content="offensive security, vulnerability research, and red team operations. breaking things so you don't have to."
  />
</svelte:head>

<h1 class="sr-only">crumberry</h1>

<pre class="banner" aria-hidden="true">┏━╸┏━┓╻ ╻┏┳┓┏┓ ┏━╸┏━┓┏━┓╻ ╻
┃  ┣┳┛┃ ┃┃┃┃┣┻┓┣╸ ┣┳┛┣┳┛┗┳┛
┗━╸╹┗╸┗━┛╹ ╹┗━┛┗━╸╹┗╸╹┗╸ ╹</pre>

<p class="tag">offensive security &middot; vulnerability research &middot; exploit development</p>

<nav aria-label="sections">
  <a href="#about">about</a>
  <a href="#focus">focus</a>
  <a href="#arsenal">arsenal</a>
  <a href="#lab">lab</a>
  <a href="#signal">signal</a>
</nav>

<section id="about">
  <h2><span class="pfx">&gt;</span> about <span class="rail"></span><span class="n">01</span></h2>
  <div class="prose">
    <p>
      I&rsquo;m an offensive security operator and infrastructure hacker. I break into systems on
      paper first, then for real, then write down exactly how &mdash; so somebody can close the
      hole.
    </p>
    <p>
      Penetration testing, vulnerability research, red team tooling, and the unglamorous hardening
      work that stops the next one. <em>Everything reproducible. Nothing decorative.</em>
    </p>
  </div>
</section>

<section id="focus">
  <h2><span class="pfx">&gt;</span> focus <span class="rail"></span><span class="n">02</span></h2>
  <div class="grid">
    <div class="cell">
      <h3>web &amp; api</h3>
      <p>Authentication, access control, injection, and the business logic nobody wrote down.</p>
    </div>
    <div class="cell">
      <h3>infrastructure</h3>
      <p>Network, directory, containers and cloud. The path that runs through the boring bits.</p>
    </div>
    <div class="cell">
      <h3>red team</h3>
      <p>Initial access through objective, with the detection gaps mapped on the way out.</p>
    </div>
    <div class="cell">
      <h3>vulnerability research</h3>
      <p>Source review and fuzzing. A proof of concept, or it didn&rsquo;t happen.</p>
    </div>
    <div class="cell">
      <h3>hardening</h3>
      <p>nftables, systemd, auditd, least privilege. The half of the job that stays up.</p>
    </div>
    <div class="cell">
      <h3>lab automation</h3>
      <p>Disposable targets and reproducible builds, so a result can be re-run and re-proven.</p>
    </div>
  </div>
</section>

<section id="arsenal">
  <h2><span class="pfx">&gt;</span> arsenal <span class="rail"></span><span class="n">03</span></h2>
  <div class="arsenal">
    <div>
      <h3>recon</h3>
      <ul>
        <li>nmap</li>
        <li>masscan</li>
        <li>amass</li>
        <li>subfinder</li>
        <li>ffuf</li>
        <li>gobuster</li>
      </ul>
    </div>
    <div>
      <h3>exploit</h3>
      <ul>
        <li>Burp Suite</li>
        <li>ZAP</li>
        <li>nuclei</li>
        <li>searchsploit</li>
        <li>Metasploit</li>
      </ul>
    </div>
    <div>
      <h3>post</h3>
      <ul>
        <li>linPEAS</li>
        <li>BloodHound</li>
        <li>hashcat</li>
        <li>john</li>
      </ul>
    </div>
    <div>
      <h3>infra</h3>
      <ul>
        <li>Docker</li>
        <li>KVM / libvirt</li>
        <li>nftables</li>
        <li>Tailscale</li>
        <li>Cloudflare</li>
        <li>Trivy</li>
      </ul>
    </div>
  </div>
</section>

<section id="lab">
  <h2><span class="pfx">&gt;</span> lab <span class="rail"></span><span class="n">04</span></h2>
  <div class="prose">
    <p>
      Everything runs on my own iron: Ubuntu, Docker, Tailscale. Targets are KVM guests on
      segregated libvirt networks with default-deny egress, snapshotted before every run.
    </p>
    <p>
      The lab gets rebuilt, not repaired. A target that has been touched once is a target that
      lies.
    </p>
  </div>
</section>

<pre class="dump" aria-hidden="true">00000000  63 72 75 6d 62 65 72 72  |crumberr|
00000008  79 20 2f 2f 20 6f 66 66  |y // off|
00000010  65 6e 73 69 76 65 20 73  |ensive s|
00000018  65 63 75 72 69 74 79     |ecurity |</pre>

<section id="signal">
  <h2><span class="pfx">&gt;</span> signal <span class="rail"></span><span class="n">05</span></h2>
  <div class="signal">
    <p><span class="k">github</span><a href="https://github.com/Apol1o-DevOps">github.com/Apol1o-DevOps</a></p>
    <p><span class="k">email</span><a href="mailto:angeldevz0@proton.me">angeldevz0@proton.me</a></p>
  </div>
</section>

<footer>
  <span>mmxxvi</span>
  <span class="eof">&gt; EOF</span>
</footer>
