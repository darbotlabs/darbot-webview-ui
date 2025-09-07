import { VSCodeTag } from "darbot-webview-ui/react";

export function TagDemo() {
  return (
    <section className="component-container">
      <h2>Tag</h2>
      <section className="component-example">
        <p>Default Tag</p>
        <VSCodeTag>Tag Text</VSCodeTag>
      </section>
    </section>
  );
}
