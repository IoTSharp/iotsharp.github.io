import {FC, useState} from "react";
import Image from "next/image";
import {ChevronLeft, ChevronRight} from 'lucide-react';
import TenantImage from '@/public/img_9.png';
import RuleImage from '@/public/img_6.png';
import ResourceImage from '@/public/img_8.png';
import DeviceImage from '@/public/img_5.png';
import ProductImage from '@/public/img_7.png';
import styles from "./styles.module.scss";

export interface IPlatformProps {
}

const Platform: FC<IPlatformProps> = ({}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const Options = [{
    image: TenantImage,
    background: 'rgb(230, 232, 234)',
    title: '多租户',
    description: '通过多租户，充分的利用系统资源为多个客户提供服务并确保数据彻底隔离。'
  }, {
    image: DeviceImage,
    background: 'rgb(239, 202, 240)',
    title: '数字孪生',
    description: '通过数字孪生使得设备的属性数据、遥测数据、数据清洗、告警更容易管理和使用'
  }, {
    image: RuleImage,
    background: 'rgb(226, 209, 244)',
    title: '规则链引擎',
    description: '通过规则链引擎利用多种语言脚本来扩展你对数据的分析和处理。'
  }, {
    image: ResourceImage,
    background: 'rgb(209, 216, 240)',
    title: '资产管理',
    description: '使用多个设备及其属性和遥测可抽象为资产更利于管理设备和数据分析。'
  },
    {
      image: ProductImage,
      title: '产品管理',
      background: 'rgb(203, 231, 254)',
      description: '为设备或者网关提供简洁有效的数据模板、字典、认证、素材组织能力。'
    }]
  const active = Options[activeIndex];
  return (
    <div className={styles.platformContainer}>
      <p className={styles.title}>打造现代 Web 应用</p>
      <p className={styles.subTitle}>与现代操作系统、浏览器更贴近的设计语言</p>
      <div className={styles.carousel} aria-live="polite">
        <div className={styles.imgWrapper} style={{backgroundColor: active.background}}>
          <Image src={active.image} unoptimized priority fill sizes="(max-width: 768px) 100vw, 80vw" alt=""/>
        </div>
        <div className={styles.imgInfo}>
          <div className={styles.logo}>{active.title}</div>
          <div className={styles.imgInfoText}>{active.description}</div>
        </div>
        <div className={styles.carouselControls}>
          <button type="button" aria-label="上一项" onClick={() => setActiveIndex((activeIndex - 1 + Options.length) % Options.length)}>
            <ChevronLeft size={24}/>
          </button>
          <span>{activeIndex + 1} / {Options.length}</span>
          <button type="button" aria-label="下一项" onClick={() => setActiveIndex((activeIndex + 1) % Options.length)}>
            <ChevronRight size={24}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
