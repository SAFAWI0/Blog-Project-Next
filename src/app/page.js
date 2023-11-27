"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "../components/container/container";
import { Header } from "../components/header/header";
import { Card } from "../components/card/card";
import { Footer } from "../components/footer/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState([true]);

  const getData = () => {
    setLoad(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts")
      .then((res) => res.json())
      .then((data) => {
        setList(data.blogs);
        setLoad(false);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
        <div className={styles.inCover}>
          <Container>
            <div className={styles.title}>
              <h1>Simple Blog.</h1>
              <p>A blog created by Aon 2023</p>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        {load && <span class={styles.loader}></span>}
        <div className={styles.grid}>
          {list.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
      </Container>
      <Footer />
    </main>
  );
}
