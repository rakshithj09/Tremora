import Button from "./Button";
import Container from "./Container";

const problemAreas = [
  {
    title: "Eating",
    description:
      "Tremor turns basic meals into a repeated negotiation with spills, fatigue, and loss of independence.",
  },
  {
    title: "Writing",
    description:
      "Fine-motor tasks degrade first, limiting signatures, notes, and other daily acts of control.",
  },
  {
    title: "Holding Objects",
    description:
      "Unstable grip makes cups, utensils, devices, and tools harder to trust in motion.",
  },
];

const systemFlow = [
  {
    step: "01",
    title: "Capture",
    description:
      "A 6-axis IMU continuously samples wrist motion through a 3-axis accelerometer and 3-axis gyroscope.",
  },
  {
    step: "02",
    title: "Isolate",
    description:
      "An onboard ESP32-WROOM runs a real-time bandpass filter tuned to the 3-6 Hz Parkinsonian tremor band.",
  },
  {
    step: "03",
    title: "Counteract",
    description:
      "A DRV2605L driver triggers dual LRA motors to deliver directional haptic counterforce within 100 ms.",
  },
];

const hardwareStack = [
  "Digital filtering evaluates periodicity, amplitude threshold, and directional consistency simultaneously.",
  "The algorithm separates involuntary tremor signatures from intentional wrist motion in real time.",
  "A sealed silicone-fluid dampening membrane absorbs residual tremor energy after haptic stabilization.",
  "The full detect-analyze-counteract loop responds within the same tremor oscillation instead of trailing it.",
];

const audiences = [
  {
    id: "01",
    title: "Primary",
    description: "People living with Parkinson's disease who need real-time wrist stabilization.",
  },
  {
    id: "02",
    title: "Secondary",
    description: "Essential tremor and movement-disorder use cases where precision and control matter.",
  },
  {
    id: "03",
    title: "Future",
    description: "Rehabilitation clinics, surgeons, and high-precision clinical training environments.",
  },
];

export default function Hero() {
  return (
    <main className="overflow-hidden bg-[var(--surface-base)] text-[var(--text-primary)]">
      <section className="hero-grid relative border-b border-[var(--border-subtle)]">
        <div className="hero-glow hero-glow-left" />
        <div className="hero-glow hero-glow-right" />
        <Container>
          <div className="grid gap-14 py-20 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-28">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-[var(--surface-panel)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">
                Blackout Labs Tech
              </div>
              <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Precision neurostabilization for the hand that refuses to stay still.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                Tremora is a discreet wearable that detects Parkinsonian tremor at the wrist and
                deploys active haptic counterforce in under 100 milliseconds.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="#vision" variant="primary">
                  View funding ask
                </Button>
                <Button href="#technology" variant="outline">
                  Explore the system
                </Button>
              </div>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="metric-card">
                  <span className="metric-value">3-6 Hz</span>
                  <span className="metric-label">target tremor band</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">&lt;100 ms</span>
                  <span className="metric-label">closed-loop response</span>
                </div>
                <div className="metric-card">
                  <span className="metric-value">Dual LRA</span>
                  <span className="metric-label">counterforce actuators</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="device-shell">
                <div className="device-bezel">
                  <div className="device-screen">
                    <div className="device-topline">
                      <span className="brand-mark">Tremora</span>
                      <span className="status-pill">Active loop</span>
                    </div>
                    <div className="mt-10 grid gap-4">
                      <div className="signal-panel">
                        <span className="signal-label">Detection Window</span>
                        <div className="signal-bars" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="signal-panel">
                          <span className="signal-label">IMU</span>
                          <p className="signal-copy">6-axis MEMS inertial tracking</p>
                        </div>
                        <div className="signal-panel">
                          <span className="signal-label">Actuation</span>
                          <p className="signal-copy">DRV2605L + dual LRA haptics</p>
                        </div>
                      </div>
                      <div className="signal-panel">
                        <span className="signal-label">Tremor Logic</span>
                        <p className="signal-copy">
                          Periodicity, amplitude, and directional consistency are assessed before
                          counterforce is deployed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="problem" className="border-b border-[var(--border-subtle)] bg-[var(--surface-panel)]">
        <Container>
          <div className="grid gap-10 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="section-kicker">The Problem</p>
              <h2 className="section-title">Current solutions suppress symptoms. They do not restore real-time control.</h2>
              <p className="section-copy">
                Parkinsonian tremor interrupts the ordinary mechanics of daily life. Existing tools
                rarely respond at the same speed as the oscillation itself, which leaves the user
                compensating instead of regaining stability.
              </p>
            </div>
            <div className="feature-panel">
              <div className="stat-block">
                <span className="stat-highlight">10M+</span>
                <p className="stat-copy">people worldwide are living with Parkinson&apos;s disease.</p>
              </div>
              <div className="problem-grid">
                {problemAreas.map((item) => (
                  <article key={item.title} className="problem-card">
                    <span className="problem-index">{item.title}</span>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="technology" className="border-b border-[var(--border-subtle)]">
        <Container>
          <div className="py-20">
            <div className="max-w-3xl">
              <p className="section-kicker">Technology</p>
              <h2 className="section-title">A real-time detect-analyze-counteract loop built for Parkinsonian tremor.</h2>
              <p className="section-copy">
                Tremora is engineered around the specific physiology of wrist tremor, combining
                signal discrimination, responsive actuation, and passive dampening in one compact
                wearable system.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {systemFlow.map((item) => (
                <article key={item.step} className="flow-card">
                  <span className="flow-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="technical-panel">
                <h3>Signal discrimination</h3>
                <ul className="tech-list">
                  {hardwareStack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="technical-panel">
                <h3>Stabilization architecture</h3>
                <div className="stack-rows">
                  <div className="stack-row">
                    <span>Sensor layer</span>
                    <p>3-axis accelerometer + 3-axis gyroscope sampling continuous wrist motion.</p>
                  </div>
                  <div className="stack-row">
                    <span>Processing layer</span>
                    <p>ESP32-WROOM microcontroller running custom embedded tremor detection logic.</p>
                  </div>
                  <div className="stack-row">
                    <span>Response layer</span>
                    <p>DRV2605L routes corrective haptic output to dual LRAs placed against the wrist.</p>
                  </div>
                  <div className="stack-row">
                    <span>Passive layer</span>
                    <p>Silicone fluid micro-chambers absorb residual motion after active correction.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="market" className="border-b border-[var(--border-subtle)] bg-[var(--surface-panel)]">
        <Container>
          <div className="grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">Target Market</p>
              <h2 className="section-title">Built first for Parkinson&apos;s, expandable to broader precision-stability needs.</h2>
            </div>
            <div className="audience-list">
              {audiences.map((audience) => (
                <article key={audience.id} className="audience-card">
                  <span className="audience-id">{audience.id}</span>
                  <div>
                    <p className="audience-title">{audience.title}</p>
                    <p className="audience-copy">{audience.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="vision" className="bg-[var(--surface-base)]">
        <Container>
          <div className="py-20">
            <div className="vision-panel">
              <p className="section-kicker">Vision & Ask</p>
              <h2 className="section-title max-w-3xl">Tremora does not cure Parkinson&apos;s. It engineers back independence, one steady hand at a time.</h2>
              <p className="section-copy max-w-3xl">
                Tremora is in the prototyping phase. Blackout Labs Tech is seeking funding,
                mentorship, and strategic partnerships to move from working prototype to validated
                medical-device product.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="mailto:partners@blackoutlabs.tech" variant="primary">
                  Contact the team
                </Button>
                <Button href="#problem" variant="outline">
                  Review the need
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
