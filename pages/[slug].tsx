import React from "react";
import Head from "next/head";
import type {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Boxes,
  CheckCircle2,
  ExternalLink,
  Github,
  Globe2,
  Route,
  UsersRound
} from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {getProduct, products, type Product} from "@/data/products";
import styles from "./product.module.scss";

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({product}) => {
  const productNumber = products.findIndex((item) => item.slug === product.slug) + 1;
  const canonical = `https://iotsharp.net/${product.slug}/`;

  return (
    <div>
      <Head>
        <title>{product.name} · {product.category} · IoTSharp</title>
        <meta name="description" content={product.summary}/>
        <link rel="canonical" href={canonical}/>
      </Head>
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
            <div className={styles.tags} aria-label="产品标签">
              {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <div className={styles.actions}>
              <a href={product.docs} className={styles.primaryAction}>
                <BookOpen size={17} aria-hidden="true"/>
                阅读文档
                <ArrowRight size={15} aria-hidden="true"/>
              </a>
              <a href={product.github} className={styles.secondaryAction} target="_blank" rel="noreferrer">
                <Github size={17} aria-hidden="true"/> GitHub
              </a>
              <a href={product.gitee} className={styles.secondaryAction} target="_blank" rel="noreferrer">
                <ExternalLink size={17} aria-hidden="true"/> Gitee
              </a>
            </div>
          </div>
          <div className={styles.heroIndex} aria-hidden="true">
            <span>IoTSharp portfolio</span>
            <strong>{String(productNumber).padStart(2, "0")}</strong>
          </div>
        </section>

        <section className={styles.audience} aria-labelledby="audience-title">
          <div className={styles.sectionLead}>
            <div className={styles.sectionMark}><UsersRound size={20} aria-hidden="true"/></div>
            <div>
              <p className={styles.eyebrow}>Built for the field</p>
              <h2 id="audience-title">谁会用它</h2>
            </div>
            <p>{product.audienceIntro}</p>
          </div>
          <div className={styles.audienceGrid}>
            {product.audiences.map((audience, index) => (
              <article key={audience.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.capabilities} aria-labelledby="capabilities-title">
          <div className={styles.sectionLead}>
            <div className={styles.sectionMark}><Boxes size={20} aria-hidden="true"/></div>
            <div>
              <p className={styles.eyebrow}>Core capabilities</p>
              <h2 id="capabilities-title">从概念走到工程交付</h2>
            </div>
            <p>这些能力围绕真实现场的连接、运行和长期维护组织，而不是一组孤立的功能清单。</p>
          </div>
          <div className={styles.capabilityGrid}>
            {product.capabilities.map((capability, index) => (
              <article key={capability.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.portfolio} aria-labelledby="portfolio-title">
          <div className={styles.portfolioIntro}>
            <div className={styles.sectionMark}><Route size={20} aria-hidden="true"/></div>
            <p className={styles.eyebrow}>How it fits</p>
            <h2 id="portfolio-title">在产品组合中的位置</h2>
            <p>{product.portfolioRole}</p>
          </div>
          <ol className={styles.workflow}>
            {product.workflow.map((step) => (
              <li key={step.label}>
                <span>{step.label}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.getStarted} aria-labelledby="quick-start-title">
          <div className={styles.sectionLead}>
            <div className={styles.sectionMark}><CheckCircle2 size={20} aria-hidden="true"/></div>
            <div>
              <p className={styles.eyebrow}>Quick start</p>
              <h2 id="quick-start-title">从一个可验证的闭环开始</h2>
            </div>
            <p>先完成最小路径，再根据现场规模、网络条件和业务边界逐步扩展。</p>
          </div>
          <div className={styles.startGrid}>
            {product.quickStart.map((step) => (
              <article key={step.label}>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.resourceBar}>
            <div>
              <p className={styles.eyebrow}>Resources</p>
              <h2>开始使用 {product.name}</h2>
            </div>
            <nav aria-label={`${product.name} 资源链接`}>
              <a href={product.docs}><BookOpen size={16} aria-hidden="true"/> 文档</a>
              <a href={product.website} target={product.website.startsWith("http") ? "_blank" : undefined} rel={product.website.startsWith("http") ? "noreferrer" : undefined}>
                <Globe2 size={16} aria-hidden="true"/> {product.websiteLabel}
              </a>
              <a href={product.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true"/> GitHub</a>
              <a href={product.gitee} target="_blank" rel="noreferrer"><ExternalLink size={16} aria-hidden="true"/> Gitee</a>
            </nav>
          </div>
        </section>

        <section className={styles.linkBand}>
          <div>
            <p className={styles.eyebrow}>Keep exploring</p>
            <h2>继续浏览 IoTSharp 产品组合</h2>
          </div>
          <p>返回产品总览，或者前往更多项目查找协议、SDK、工具和社区资料。</p>
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
