import { VSCodeBadge } from "darbot-webview-ui/react";

export function BadgeDemo() {
  return (
    <section className="component-container">
      <h2>Badge</h2>
      <section className="component-example">
        <p>Default Badge</p>
        <VSCodeBadge>1</VSCodeBadge>
      </section>
    </section>
  );
}
