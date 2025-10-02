"use client";

import { Table } from "@inkdes-email/table";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Playground</h1>
      <p>Basic Table preview:</p>
      <Table padding="12px" border borderColor="#ddd" width="100%">
        <Table.Row>
          <Table.Col width="20%">Left</Table.Col>
          <Table.Col>Right</Table.Col>
        </Table.Row>
        <Table.Row>
          <Table.Col>Row 2 - A</Table.Col>
          <Table.Col>Row 2 - B</Table.Col>
        </Table.Row>
      </Table>
    </main>
  );
}


