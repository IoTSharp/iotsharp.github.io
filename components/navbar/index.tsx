import {FC, useContext, useState} from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoIcon from "@/public/logo-icon.svg";
import logoTextDark from "@/public/logo-text-dark.svg";
import logoText from "@/public/logo-text.svg";
import {ThemeContext} from "@/stores/theme";
import {Github, Menu, Moon, Sun, X} from 'lucide-react';
import {Themes} from "@/constants/enum";

export interface INavBarProps {
}

const navLinks = [
  {label: "IoTSharp", href: "https://iotsharp.net/IoTSharp/"},
  {label: "IoTCoWork", href: "https://iotsharp.net/IoTCoWork/"},
  {label: "IoTEdge", href: "https://iotsharp.net/IoTEdge/"},
  {label: "IoTEmBASIC", href: "https://iotsharp.net/IoTEmBASIC/"},
  {label: "更多项目", href: "#projects"},
  {label: "商业服务", href: "https://iotsharp.net/console"}
];

const NavBar: FC<INavBarProps> = ({}) => {
  const {setTheme, theme} = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const icon = theme === Themes.light ? logoTextDark : logoText;
  const themeLabel = theme === Themes.light ? '切换到暗色模式' : '切换到亮色模式';
  const iconTheme = theme === Themes.light ? <Moon size={24}/> : <Sun size={24}/>;
  return (
    <div className={styles.navBar}>
      <a href="https://iotsharp.net/">
        <Image src={logoIcon} alt="" width={35} height={35}/>
        <Image src={icon} alt="" width={135} height={40}/>
      </a>
      <nav
        id="main-navigation"
        className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}
        aria-label="主导航"
      >
        {navLinks.map((item) => {
          if (item.href.startsWith("http")) {
            return (
              <a href={item.href} key={item.href} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            );
          }

          return (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className={styles.themeArea}>
        <button
          type="button"
          className={styles.iconButton}
          title={themeLabel}
          aria-label={themeLabel}
          onClick={(): void => {
            if (localStorage.getItem("theme") === Themes.light) {
              setTheme(Themes.dark);
            } else {
              setTheme(Themes.light);
            }
          }}
        >
          {iconTheme}
        </button>
        <button type="button" className={styles.iconButton} title="查看 GitHub" aria-label="查看 GitHub" onClick={(): void => {
          window.open(
            "https://github.com/IoTSharp",
            "blank",
            "noopener=yes,noreferrer=yes"
          );
        }}>
          <Github size={24}/>
        </button>
        <button
          type="button"
          className={`${styles.iconButton} ${styles.menuButton}`}
          title={menuOpen ? "关闭导航" : "打开导航"}
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
