"use client";

import ThemeToggleButton from "@/components/ui/ThemeToggleButton/ThemeToggleButton";
import Button from "@/components/ui/Button/Button";
import styles from "./header.module.css";

export function Header() {
  function greeting() {
    console.log("Hej");
  }

  return (
    <header className={styles.header}>
      <p>Logo</p>
      <ThemeToggleButton />
    </header>
  );
}
