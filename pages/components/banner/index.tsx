import {FC, useContext, useEffect, useRef} from "react";
import styles from "./styles.module.scss";
import cName from "classnames";
import {ThemeContext} from "@/stores/theme";

export interface IBannerProps {
}

const Banner: FC<IBannerProps> = ({}) => {
  const mainRef = useRef<HTMLDivElement>(null);
  const {theme} = useContext(ThemeContext);
  useEffect(() => {
    mainRef.current?.classList.remove(styles.withAnimation);
    window.requestAnimationFrame(() => {
      mainRef.current?.classList.add(styles.withAnimation);
    });
  }, [theme]);
  return (
    <div className={cName([styles.banner, styles.withAnimation])} ref={mainRef}>
      <div className={styles.layout}>
        <div>
          <div className={styles.container}>
            <div className={styles.title}>连接物理设备与数字世界</div>
            <div className={styles.description}>IoTSharp 是一个开源的物联网基础平台，通过属性、遥测、RPC、规则链按照数字孪生概念将可见与不可见的物理设备投射到了数字世界，透过资产、产品的概念贴合应用和生产，协议支持 HTTP、MQTT 、CoAp 以及常见物联网协议的转换，支持常用关系型和时序数据库。在生态和周边，我们支持了国产时序数据库TDengine、确保了能在龙芯Linux运行、对接了国产实时操作系统RT-Thread以及常用标准协议。 </div>
            <div className={styles.button} onClick={(): void => {
              window.open(
                "https://iotsharp.net/docs/",
                "blank",
                "noopener=yes,noreferrer=yes"
              );
            }}>快速上手
            </div>
          </div>
        </div>
        <div>
          <div className={styles.bannerImage}>
            <div className={styles.background}/>
            <div className={styles.icon}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
