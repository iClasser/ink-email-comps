"use client";
import { Fragment, useState, useEffect } from "react";
import { Table } from "@inkdes-email/table";
import {
  Html,
  Head,
  Font,
  Body,
  Img,
  Text,
  Card,
  Button,
  getHtml,
} from "@inkdes-email/components";
import { getText } from "@inkdes-email/get-text";

const EmailTemplate = () => {
  return (<Html>
    <Head>
      <Font
        family="Inter"
        url="https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZJhiJ-Ek-_EeAmM.woff2"
        format="woff2"
        fallback="Arial"
        style="normal"
        weight="400"
        targetClasses={[]}
        targetTags={["html", "body", "button"]}
      />
      <title>Platform name</title>
    </Head>
    <Body
      previewText="Some preview pre-header text."
      width={376}
      padding="20px 20px"
      outerBgColor="#fff"
      backgroundColor="#f2f6f7"
    >
      <Img
        src="https://github.com/user-attachments/assets/8e885609-d2bb-46ab-a760-ae896757ff60"
        alt="Cat"
        width={48}
        height={48}
      />
      <Text fontSize="14px" fontWeight="400" fontColor="#000">
        Hello from InkDes!
      </Text>

      <Card
        header={
          <Fragment>
            <Img
              src="https://cdnjs.cloudflare.com/ajax/libs/browser-logos/75.0.1/chromium/chromium_48x48.png"
              alt="Cat"
              width={48}
              height={48}
              borderRadius="100%"
            />
            <Text textColor="white" fontSize="20px">
              InkDes
            </Text>
          </Fragment>
        }
        headerBackgroundColor="#000"
        content={<Text>Welcome to InkDes!</Text>}
        borderRadius="24px"
        padding="12px 15px"
        width="100%"
      />

      <Table border padding="10px">
        <Table.Row align="left" valign="middle">
          <Table.Col>Cell 1</Table.Col>
          <Table.Col>Cell 2</Table.Col>
        </Table.Row>
        <Table.Row>
          <Table.Col>Cell 1</Table.Col>
          <Table.Col>Cell 2</Table.Col>
        </Table.Row>
      </Table>

      <Button
        align="center"
        href="https://inkdes.com"
        text="Confirm"
        backgroundColor="#000"
        textColor="#fff"
      />
    </Body>
  </Html>);
}

export default function Page() {
  const [htmlString, setHtmlString] = useState<string | null>(null);
  const downloadHtml = () => {
    const { html, error } = getHtml(
      <EmailTemplate />
    );
    if (html) {
      const blob = new Blob([html], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'email.html';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };
  useEffect(() => {
    const { html, error } = getHtml(
      <EmailTemplate />
    );
    setHtmlString(html ?? null);
  }, []);
  return (
    <main style={{ padding: 24 }}>
      <h1>InkDes Email Playground</h1>
      <p>Preview your email components:</p>
      <div>
        <button onClick={downloadHtml}>Downlaod</button>
      </div>
      <iframe
        style={{ width: "100%", height: "500px" }}
          srcDoc={
            getHtml(
              <EmailTemplate />
            ).html ?? null
          }
      />
      <pre>
        <code>{getText(
              <EmailTemplate />
            ).text ?? null}</code>
      </pre>
    </main>
  );
}
