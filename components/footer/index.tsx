import {FC} from "react";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoText from "@/public/logo-text.svg";
import styles from "./styles.module.scss";

export interface IFooterProps {}

const linkGroups = [
  {
    title: "核心项目",
    links: [
      {label: "IoTSharp", link: "https://iotsharp.net/IoTSharp/"},
      {label: "IoTCoWork", link: "https://iotsharp.net/IoTCoWork/"},
      {label: "IoTEdge", link: "https://iotsharp.net/IoTEdge/"},
      {label: "IoTEmBASIC", link: "https://iotsharp.net/IoTEmBASIC/"}
    ]
  },
  {
    title: "开发者入口",
    links: [
      {label: "GitHub", link: "https://github.com/IoTSharp"},
      {label: "文档", link: "https://docs.iotsharp.net/"},
      {label: "商业服务", link: "https://iotsharp.online"},
      {label: "组织主页", link: "https://iotsharp.net"}
    ]
  },
  {
    title: "社区",
    links: [
      {label: "Gitee", link: "https://gitee.com/IoTSharp"},
      {label: "Discord", link: "https://discord.com/invite/My6PaTmUvu"},
      {label: "QQ 群", link: "https://jq.qq.com/?_wv=1027&k=u1ZzTmVd"}
    ]
  }
];

const Footer: FC<IFooterProps> = ({}) => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topArea}>
        <div>
          <h1 className={styles.footerTitle}>
            <Image src={logoIcon} alt="" width={35} height={35}/>
            <Image src={logoText} alt="IoTSharp" width={135} height={40}/>
          </h1>
          <p className={styles.summary}>
            IoTSharp 开源生态门面。设备、边缘、协议、SDK、数据和工具项目都从这里进入。
          </p>
        </div>

        <div className={styles.linkListArea}>
          {linkGroups.map((group) => (
            <div className={styles.linkArea} key={group.title}>
              <span className={styles.title}>{group.title}</span>
              <div className={styles.links}>
                {group.links.map((item) => (
                  <a href={item.link} target="_blank" rel="noreferrer" key={item.link}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottomArea}>
        <span>© 2018 - {year} The IoTSharp Authors. All rights reserved.</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">冀ICP备18039206号</a>
      </div>
    </footer>
  );
};

export default Footer;
