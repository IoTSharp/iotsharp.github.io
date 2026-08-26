import React from "react";
import type {NextPage} from "next";
import {ArrowRight, ExternalLink, Github, Globe2} from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import {featuredProducts} from "@/data/products";
import {projectGroups, repositoryCatalog} from "@/data/projects";
import styles from "./projects.module.scss";

const Projects: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <main className={styles.page}>
        <section className={styles.intro}>
          <div>
            <p className={styles.eyebrow}>Open source network</p>
            <h1>更多项目</h1>
            <p className={styles.lede}>
              主要产品之外，这里收录 IoTSharp 组织的协议、SDK、嵌入式示例、开发者工具和社区内容入口。用标签进入产品介绍，也可以直接打开对应的代码仓库。
            </p>
          </div>
          <div className={styles.introNote}>
            <span>入口说明</span>
            <p>产品标签进入本站介绍页；GitHub 与 Gitee 标签进入代码仓库。</p>
          </div>
        </section>

        <section className={styles.productLinks} aria-labelledby="product-links-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Products</p>
              <h2 id="product-links-title">先看产品，再进入仓库</h2>
            </div>
            <a href="/">返回首页 <ArrowRight size={16} aria-hidden="true"/></a>
          </div>
          <div className={styles.productTabs}>
            {featuredProducts.map((product) => (
              <a href={`/${product.slug}/`} className={styles.productTab} key={product.slug}>
                <span>{product.category}</span>
                <strong>{product.name}</strong>
                <ArrowRight size={17} aria-hidden="true"/>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.catalog} aria-labelledby="catalog-title">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Repository catalog</p>
              <h2 id="catalog-title">所有主要开源仓库和内容入口</h2>
            </div>
            <p>按领域浏览，标签会在新窗口打开仓库主页。</p>
          </div>

          {projectGroups.map((group) => (
            <section className={styles.projectGroup} key={group.title}>
              <div className={styles.groupHeading}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className={styles.projectGrid}>
                {group.projects.map((project) => (
                  <article className={styles.projectItem} key={project.name}>
                    <p className={styles.projectRole}>{project.role}</p>
                    <h4>{project.name}</h4>
                    <p className={styles.projectDescription}>{project.description}</p>
                    <div className={styles.projectLinks}>
                      <a href={project.page} target={project.productSlug ? undefined : "_blank"} rel={project.productSlug ? undefined : "noreferrer"}>
                        {project.productSlug ? "产品介绍" : "Pages"}
                        {project.productSlug ? <ArrowRight size={14} aria-hidden="true"/> : <Globe2 size={14} aria-hidden="true"/>}
                      </a>
                      <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                        <Github size={14} aria-hidden="true"/> GitHub
                      </a>
                      {project.gitee && <a href={project.gitee} target="_blank" rel="noreferrer" aria-label={`${project.name} Gitee`}>
                        <ExternalLink size={14} aria-hidden="true"/> Gitee
                      </a>}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </section>

        <section className={styles.repositoryCatalog}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Browse by tag</p>
              <h2>社区、实验与基础库</h2>
            </div>
            <p>继续从标签进入 GitHub，发现更多可复用的组件与资料。</p>
          </div>
          <div className={styles.repositoryGroups}>
            {repositoryCatalog.map((group) => (
              <section className={styles.repositoryGroup} key={group.title}>
                <h3>{group.title}</h3>
                <div className={styles.repositoryLinks}>
                  {group.repositories.map((repo) => (
                    <a href={`https://github.com/IoTSharp/${repo}`} target="_blank" rel="noreferrer" key={repo}>
                      {repo}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Projects;
