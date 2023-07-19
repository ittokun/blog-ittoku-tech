import "./globals.css";
import "@/config/fontawesome";

import styles from "./layout.module.css";

import type { Metadata } from "next";

import { Noto_Sans_JP } from "next/font/google";
const noto_sans_jp = Noto_Sans_JP({ subsets: ["latin"] });

import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export const metadata: Metadata = {
  title: "ittoku-tech",
  description: "Here is ittokunvim portfolio site",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const github_url = "https://github.com/ittokunvim";
  const twitter_url = "https://twitter.com/ittokunvim";
  const zenn_url = "https://zenn.dev/ittoku_ky73";
  const repo_url = "https://github.com/ittokunvim/ittoku-tech";

  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <header className={styles.page_header}>
          <Link href="/">
            <Image src="/logo.svg" width={44} height={44} alt="site logo" />
          </Link>
          <div>
            <a href={github_url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#202328" }}
              />
            </a>
            <a href={twitter_url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                size="2xl"
                style={{ color: "#1DA1F2" }}
              />
            </a>
            <a href={zenn_url} target="_blank" rel="noopener noreferrer">
              <Image src="/zenn.svg" width={32} height={32} alt="zenn logo" />
            </a>
          </div>
        </header>
        {children}
        <footer className={styles.page_footer}>
          <div className={styles.external}>
            <a href={repo_url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                size="sm"
                style={{ marginRight: "0.5em" }}
              />
              Source Code
            </a>
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
            <a
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            <a
              href="https://pixlr.com/jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixlr
            </a>
            <a
              href="https://fontawesome.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Font Awesome
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className={styles.copyright}>
            <p>
              <FontAwesomeIcon
                icon={faCopyright}
                size="sm"
                style={{ marginRight: "0.5em" }}
              />
              ittokunvim All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
