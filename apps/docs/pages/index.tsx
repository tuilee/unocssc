import { Button } from "@unocssc/ui";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>
      <h2>Button</h2>
      <Button>Default Button</Button>
      <Button variant="primary">Primary Button</Button>
      <Button variant="success">Success Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="warning">Warning Button</Button>
      <h2>Disabled state</h2>
      <Button variant="primary" disabled>
        Primary Button
      </Button>
      <Button variant="success" disabled>
        Success Button
      </Button>
    </div>
  );
}
