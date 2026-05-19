import {FC, useContext} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoTextDark from "@/public/logo-text-dark.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";
import { Tooltip } from '@douyinfe/semi-ui';
import {IconGithubLogo, IconMoon, IconSun} from '@douyinfe/semi-icons';
import {Themes} from "@/constants/enum";

export interface INavBarProps {
}

const navLinks = [
  {label: "IoTSharp", href: "https://iotsharp.net/IoTSharp/"},
  {label: "IoTCoWork", href: "https://iotsharp.net/IoTCoWork/"},
  {label: "IoTEdge", href: "https://iotsharp.net/IoTEdge/"},
  {label: "IoTEmBASIC", href: "https://iotsharp.net/IoTEmBASIC/"},
  {label: "更多项目", href: "#projects"},
  {label: "商业服务", href: "https://iotsharp.online"}
];

const NavBar: FC<INavBarProps> = ({}) => {
  const {setTheme, theme} = useContext(ThemeContext);
  const icon = theme === Themes.light ? logoTextDark : logoText;
  const iconTheme = theme === Themes.light ? <IconMoon size="extra-large"/> : <IconSun size="extra-large"/>;
  return (
    <div className={styles.navBar}>
      <a href="https://iotsharp.net/">
        <Image src={logoIcon} alt="" width={35} height={35}/>
        <Image src={icon} alt="" width={135} height={40}/>
      </a>
      <nav className={styles.links} aria-label="主导航">
        {navLinks.map((item) => {
          if (item.href.startsWith("http")) {
            return (
              <a href={item.href} key={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            );
          }

          return (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className={styles.themeArea}>
        <div
          className={styles.icon}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        >
          <Tooltip position="bottom" content={Themes.light ? '切换到暗色模式' : '切换到亮色模式'}>
            {iconTheme}
          </Tooltip>
        </div>
        <div className={styles.icon} onClick={(): void => {
          window.open(
            "https://github.com/IoTSharp",
            "blank",
            "noopener=yes,noreferrer=yes"
          );
        }}>
          <Tooltip position="bottom" content="查看Github">
            <IconGithubLogo size="extra-large"/>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
