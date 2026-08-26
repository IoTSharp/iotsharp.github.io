import React from "react";
import type {NextPage} from "next";
import {ArrowRight, ArrowUpRight, Database, Gauge, Radio, Workflow} from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {featuredProducts} from "@/data/products";
import styles from "./index.module.scss";

const capabilities = [
  {icon: Radio, title: "连接现场", text: "从 HTTP、MQTT、CoAP 到工业协议，把设备接入统一的数据路径。"},
  {icon: Gauge, title: "理解数据", text: "以遥测、属性、事件、告警和规则链组织真实世界的变化。"},
  {icon: Database, title: "靠近业务", text: "用 SonnetDB 承载时序与多模型数据，支持边缘与云端协作。"},
  {icon: Workflow, title: "持续交付", text: "从 IoTCoWork 建模，到 IoTEdge 和 IoTEmBASIC 现场运行。"}
];

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>iotsharp.net · 产品总览</p>
            <h1>让工业数据从现场流动起来。</h1>
            <p className={styles.heroText}>
              IoTSharp 是一个面向工业现场的开源产品组合：平台负责连接与治理，SonnetDB 负责数据，工作台与边缘运行时负责把工程真正交付到设备旁。
            </p>
            <div className={styles.actions}>
              <a href="#products" className={styles.primaryAction}>
                浏览产品矩阵
                <ArrowRight size={17} aria-hidden="true"/>
              </a>
              <a href="https://iotsharp.online/" className={styles.secondaryAction} target="_blank" rel="noreferrer">
                在线演示
                <ArrowUpRight size={17} aria-hidden="true"/>
              </a>
            </div>
            <div className={styles.utilityLinks}>
              <a href="/projects/">更多项目</a>
              <a href="https://iotsharp.net/console">企业服务</a>
              <a href="https://github.com/IoTSharp" target="_blank" rel="noreferrer">GitHub 组织</a>
            </div>
          </div>
          <div className={styles.heroPanel} aria-label="IoTSharp 产品路径">
            <div className={styles.panelRail}/>
            <div className={styles.panelItem}>
              <span>01 / Connect</span>
              <strong>IoTSharp</strong>
              <small>设备接入 · 遥测 · 规则</small>
            </div>
            <div className={styles.panelItem}>
              <span>02 / Build</span>
              <strong>IoTCoWork</strong>
              <small>本地建模 · 调试 · 生成</small>
            </div>
            <div className={styles.panelItem}>
              <span>03 / Run</span>
              <strong>IoTEdge</strong>
              <small>C# AOT · 边缘采集 · 离线运行</small>
            </div>
            <div className={styles.panelItem}>
              <span>04 / Store</span>
              <strong>SonnetDB</strong>
              <small>时序 · 向量 · 全文 · 对象</small>
            </div>
          </div>
        </section>

        <section id="products" className={styles.products}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>Product map</p>
              <h2>一条从设备到应用的开源路径</h2>
            </div>
            <p>每个产品都可以独立使用，也可以组合成一套可交付的工业数据基础设施。</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.map((product, index) => (
              <article className={`${styles.productCard} ${index === 0 ? styles.productCardFeatured : ""}`} key={product.slug}>
                <div className={styles.productMeta}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <p className={styles.productRole}>{product.role}</p>
                <p className={styles.productSummary}>{product.summary}</p>
                <div className={styles.tagList}>
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className={styles.cardLink} href={`/${product.slug}/`}>
                  查看产品介绍
                  <ArrowRight size={16} aria-hidden="true"/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.capabilities}>
          <div className={styles.sectionIntro}>
            <div>
              <p className={styles.eyebrow}>How it fits</p>
              <h2>把复杂的现场工作拆成清晰的四步</h2>
            </div>
            <p>从连接到交付，每一层都有明确的职责边界，团队可以按实际项目选择需要的组合。</p>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map(({icon: Icon, title, text}, index) => (
              <div className={styles.capabilityItem} key={title}>
                <div className={styles.capabilityIndex}>{String(index + 1).padStart(2, "0")}</div>
                <Icon size={22} strokeWidth={1.8} aria-hidden="true"/>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.exploreBand}>
          <div>
            <p className={styles.eyebrow}>Open source network</p>
            <h2>从主要产品继续进入所有开源仓库和内容入口。</h2>
          </div>
          <p>协议、SDK、UI 工具、嵌入式示例和社区资料统一收录在“更多项目”中，按标签快速跳转。</p>
          <a href="/projects/">
            打开更多项目
            <ArrowRight size={17} aria-hidden="true"/>
          </a>
        </section>

        <section className={styles.enterpriseBand}>
          <div>
            <p className={styles.eyebrow}>IoTSharp Enterprise</p>
            <h2>需要落地到真实产线？</h2>
          </div>
          <p>企业服务提供部署、行业包、支持和交付协作，让开源能力进入你的现场节奏。</p>
          <a href="https://iotsharp.net/console">
            了解企业服务
            <ArrowRight size={17} aria-hidden="true"/>
          </a>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
