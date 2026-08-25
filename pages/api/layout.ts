import type {NextApiRequest, NextApiResponse} from 'next';
import {ILayoutProps} from '../../components/layout';
import {isEmpty} from 'lodash';

const getLayoutData = (req: NextApiRequest, res: NextApiResponse<ILayoutProps>): void => {
  const data = {
    "title": "IoTSharp",
    "qr_code": "",
    "copy_right": "Copyright © 2022 The IoTSharp Authors",
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
          "title": "关于",
          "links": {
            "data": [
              {
                "label": "Demo",
                "link": "https://iotsharp.net/demo/"
              },
              {
                "label": "Docs",
                "link": "https://iotsharp.net/docs/",
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
          "title": "联系我",
          "links": {
            "data": [
              {
                "label": "微信",
                "link": {}
              },
              {
                "label": "QQ",
                "link": {}
              }
            ]
          }
        }
      ]
    }
  }
  const {copy_right, link_lists, public_number, qr_code, qr_code_image, site_number, title} = data || {};

  res.status(200).json({
    navbarData: {},
    footerData: {
      title,
      linkList: link_lists?.data?.map((item: any) => ({
        title: item.title,
        list: item?.links?.data?.map((_item: any) => ({
          label: _item.label,
          link: isEmpty(_item.link) ? '' : _item.link,
        })),
      })),
      qrCode: {
        image: `${qr_code_image.data.url}`,
        text: qr_code,
      },
      copyRight: copy_right,
      siteNumber: site_number,
      publicNumber: public_number,
    },
  });
};

export default getLayoutData;
