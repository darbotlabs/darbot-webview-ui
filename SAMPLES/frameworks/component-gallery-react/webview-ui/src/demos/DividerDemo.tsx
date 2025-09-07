import { VSCodeDivider } from "darbot-webview-ui/react";

export function DividerDemo() {
  return (
    <section className="component-container">
      <h2>Divider</h2>
      <section className="component-example">
        <p>With Separator Role</p>
        <VSCodeDivider role="separator"></VSCodeDivider>
      </section>
      <section className="component-example">
        <p>With Presentation Role</p>
        <VSCodeDivider role="presentation"></VSCodeDivider>
      </section>
    </section>
  );
}
