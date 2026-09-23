export function ProjectVisual({
  title,
  index,
  accent,
}: {
  title: string;
  index: string;
  accent: string;
}) {
  return (
    <div className={`project-visual accent-${accent}`} aria-hidden="true">
      <div className="visual-orb visual-orb-one" />
      <div className="visual-orb visual-orb-two" />
      <div className="mock-window">
        <div className="mock-bar">
          <span /><span /><span />
        </div>
        <div className="mock-content">
          <div className="mock-sidebar">
            <div className="mock-logo">BP</div>
            <i /><i /><i /><i />
          </div>
          <div className="mock-main">
            <div className="mock-kicker">PROJECT {index}</div>
            <div className="mock-title">{title}</div>
            <div className="mock-line long" />
            <div className="mock-line medium" />
            <div className="mock-grid">
              <div className="mock-card"><b>01</b><span /></div>
              <div className="mock-card"><b>02</b><span /></div>
              <div className="mock-card wide"><b>03</b><span /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="visual-index">{index}</div>
    </div>
  );
}
