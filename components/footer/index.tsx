import {FC, JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal} from "react";
import Image from "next/image";
import publicLogo from "@/public/public_logo.png";
import styles from "./styles.module.scss";
import cName from "classnames";
import {isEmpty} from "lodash";
import logoText from "@/public/logo-text.svg";
import QRCode from "@/public/code.jpg";
import logoIcon from "@/public/logo-icon.svg";
interface ILink {
  label: string;
  link?: string;
}

interface ILinkList {
  title: string;
  list: ILink[];
}

interface IQRCode {
  image: string;
  text: string;
}

export interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  const data = {
    "title": "IoTSharp",
    "qr_code": "",
    "copy_right": "© 2018 - 2023 The IoTSharp Authors. All rights reserved.",
    "site_number": "",
    "public_number": "冀ICP备18039206号",
    "qr_code_image": {
      "data": {
        "name": "code.png",
        "alternativeText": "code.png",
        "caption": "code.png",
        "width": 56,
        "height": 56,
        "formats": {},
        "hash": "code_67191e1aba",
        "ext": ".png",
        "mime": "image/png",
        "size": 1.45,
        "url": "/uploads/code_67191e1aba.png",
        "previewUrl": {},
        "provider": "local",
        "provider_metadata": {}
      }
    },
    "link_lists": {
      "data": [
        {
          "title": '关于',
          "links": {
            "data": [
              {
                "label": "演示",
                "link": "http://iotsharp.online/"
              },
              {
                "label": "文档",
                "link": "https://iotsharp.gitee.io/",
              },
            ]
          }
        },
        {
          "title": "了解更多",
          "links": {
            "data": [
              {
                "label": "Github",
                "link": "https://github.com/IoTSharp"
              },
              {
                "label": "Gitee",
                "link": "https://gitee.com/IoTSharp"
              },
            ]
          }
        },
        {
          "title": "联系我们",
          "links": {
            "data": [
              {
                "label": "QQ",
                "link": "https://jq.qq.com/?_wv=1027&k=u1ZzTmVd"
              }, {
                "label": "企微",
                "link": "https://iotsharp.gitee.io/img/qyqun.jpg"
              }, {
                "label": "Discord",
                "link": "https://discord.com/invite/My6PaTmUvu"
              }
            ]
          }
        }
      ]
    }
  }
  const {copy_right, link_lists, public_number, qr_code, qr_code_image, site_number, title} = data || {};
  const footerData = {
    title,
    linkList: link_lists?.data?.map((item: any) => ({
      title: item.title,
      list: item?.links?.data?.map((_item: any) => ({
        label: _item.label,
        link: isEmpty(_item.link) ? '' : _item.link,
      })),
    })),
    qrCode: {
      image: QRCode,
      text: qr_code,
    },
    copyRight: copy_right,
    siteNumber: site_number,
    publicNumber: public_number,
  }
  return (
    <div className={styles.footer}>
      <div className={styles.topArea}>
        <h1 className={styles.footerTitle}>
          <Image src={logoIcon} alt="" width={35} height={35}/>
          <Image src={logoText} alt="" width={135} height={40}/>
        </h1>
        <div className={styles.linkListArea}>
          {footerData?.linkList?.map((item, index) => {
            return (
              <div className={styles.linkArea} key={`linkArea${index}`}>
                <span className={styles.title}>{item.title}</span>
                <div className={styles.links}>
                  {item.list?.map((_item: { link: string | URL | undefined; label: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | Iterable<ReactNode> | null | undefined; }, _index: any) => {
                    return (
                      <div
                        className={cName({
                          [styles.link]: _item.link,
                          [styles.disabled]: !_item.link,
                        })}
                        onClick={(): void => {
                          _item.link &&
                          window.open(
                            _item.link,
                            "blank",
                            "noopener=yes,noreferrer=yes"
                          );
                        }}
                        key={`link${_index}`}
                      >
                        {_item.label}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.bottomArea}>
        <div className={styles.codeArea}>
          <div>
            <Image
              src={footerData?.qrCode?.image}
              alt={footerData?.qrCode?.text}
              width={120}
              height={120}
            ></Image>
          </div>
          <div className={styles.text}>{footerData?.qrCode?.text}</div>
        </div>
        <div className={styles.numArea}>
          <span>{footerData?.copyRight}</span>
          <span>{footerData?.siteNumber}</span>
          <div className={styles.publicLogo} onClick={(): void => {
            window.open(
              "https://beian.miit.gov.cn/",
              "blank",
              "noopener=yes,noreferrer=yes"
            );
          }}>
            <div className={styles.logo}>
              <Image
                src={publicLogo}
                alt={footerData?.publicNumber}
                width={20}
                height={20}
              ></Image>
            </div>
            <span>{footerData?.publicNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
