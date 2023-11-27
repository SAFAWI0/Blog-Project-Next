import React from "react";
import styles from "./header.module.css";
import { Container } from "../container/container";
import Link from "next/link";


export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1>Aon 2023</h1>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/help"}>Help</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
