import React from "react";
import Link from "next/link"; // Import the Link component from Next.js
import styles from "./page.module.css"; // Import the CSS module file

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1>Hello, WELCOME DEAR</h1>

        <div>
          <Link href="/register">CLICK HERE FOR REGISTRATION</Link>
        </div>
      </div>
    </main>
  );
}
