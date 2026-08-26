import React from "react";
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ArrowLeft, ArrowRight, ExternalLink, Github, Globe2} from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {getProduct, products, type Product} from "@/data/products";
import styles from "./product.module.scss";

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({product}) => {
  const productNumber = products.findIndex((item) => item.slug === product.slug) + 1;

  return (
    <div>
      <NavBar/>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <a className={styles.backLink} href="/projects/">
              <ArrowLeft size={15} aria-hidden="true"/> 返回更多项目
            </a>
            <p className={styles.eyebrow}>{product.category}</p>
            <h1>{product.name}</h1>
            <p className={styles.role}>{product.role}</p>
            <p className={styles.description}>{product.description}</p>
            <div className={styles.tags}>
              {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className={styles.actions}>
              <a href={product.website} className={styles.primaryAction} target="_blank" rel="noreferrer">
                <Globe2 size={17} aria-hidden="true"/>
                {product.websiteLabel}
                <ArrowRight size={15} aria-hidden="true"/>
              </a>
              <a href={product.github} className={styles.secondaryAction} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true"/>
                GitHub
              </a>
              <a href={product.gitee} className={styles.secondaryAction} target="_blank" rel="noreferrer">
                <ExternalLink size={17} aria-hidden="true"/>
                Gitee
              </a>
            </div>
          </div>
          <div className={styles.heroIndex} aria-hidden="true">
            <span>IoTSharp portfolio</span>
            <strong>{String(productNumber).padStart(2, "0")}</strong>
          </div>
        </section>

        <section className={styles.content}>
          <div className={styles.contentHeader}>
            <p className={styles.eyebrow}>What it brings</p>
            <h2>为真实项目准备的能力边界</h2>
          </div>
          <div className={styles.highlightGrid}>
            {product.highlights.map((highlight, index) => (
              <div className={styles.highlight} key={highlight}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.linkBand}>
          <div>
            <p className={styles.eyebrow}>Keep exploring</p>
            <h2>继续浏览 IoTSharp 产品组合</h2>
          </div>
          <p>从产品页面回到总览，或者前往更多项目查找协议、SDK、工具和社区资料。</p>
          <div className={styles.bandActions}>
            <a href="/">产品总览 <ArrowRight size={15} aria-hidden="true"/></a>
            <a href="/projects/">更多项目 <ArrowRight size={15} aria-hidden="true"/></a>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: products.map((product) => ({params: {slug: product.slug}})),
  fallback: false
});

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({params}) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const product = getProduct(slug);

  if (!product) {
    return {notFound: true};
  }

  return {props: {product}};
};

export default ProductPage;
