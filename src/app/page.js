"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "../components/container/container";
import { Header } from "../components/header/header";
import { Card } from "../components/card/card";
import { Footer } from "../components/footer/footer";
import { useEffect, useState } from "react";
import React from "react";
import { Pagination } from "antd";
import { Banner } from "../components/Banner/banner";

export default function Home() {
  const [list, setList] = useState([]);
  const [load, setLoad] = useState([true]);
  // const img ="https://picsum.photos/800/200"
  const getData = () => {
    setLoad(true);
    fetch("https://api.slingacademy.com/v1/sample-data/blog-posts?limit=99")
      .then((res) => res.json())
      .then((data) => {
        setList(data.blogs);
        setLoad(false);
      });
  };

  //pagination
  const items = 9;
  const [curr, setCurr] = useState(1);
  const nPaga = Math.ceil(list.length / items);
  const startIndex = (curr - 1) * items;
  const endIndex = startIndex + items;
  const dataPage = list.slice(startIndex, endIndex);

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (page) => {
    setCurr(page);
  };

  return (
    <main className={styles.home}>
      <Header />
      <div className={styles.cover}>
      {/* <Image src={img} fill={true}/> */}
      <Banner image={"https://picsum.photos/800/200"}/>
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
          {dataPage.map((blog, i) => (
            <Card key={i} blog={blog} />
          ))}
        </div>
        <Pagination
          className={styles.pagination}
          defaultCurrent={1}
          total={110}
          count={nPaga}
          page={curr}
          onChange={handleChange}
        />
        ;
      </Container>
      <Footer />
    </main>
  );
}
