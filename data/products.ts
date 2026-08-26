export interface Product {
  slug: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  websiteLabel: string;
  website: string;
  github: string;
  gitee: string;
  tags: string[];
  highlights: string[];
}

export const products: Product[] = [
  {
    slug: "IoTSharp",
    name: "IoTSharp",
    category: "工业物联网平台",
    role: "连接现场设备与数字业务",
    summary: "开源的设备、资产、规则链和遥测平台，为工业现场提供统一的数据入口。",
    description: "IoTSharp 把设备接入、数字孪生、遥测、属性、事件、告警和规则链组织在一套开放平台中，帮助团队从现场连接一路走到业务应用。",
    websiteLabel: "在线演示",
    website: "https://iotsharp.online/",
    github: "https://github.com/IoTSharp/IoTSharp",
    gitee: "https://gitee.com/IoTSharp/IoTSharp",
    tags: ["设备接入", "数字孪生", "规则链"],
    highlights: ["HTTP、MQTT、CoAP 等多协议接入", "设备、产品、资产和租户模型", "遥测、告警、RPC 与规则链编排"]
  },
  {
    slug: "SonnetDB",
    name: "SonnetDB",
    category: "现场数据基础设施",
    role: "让时序数据靠近业务与设备",
    summary: "面向遥测、指标、向量、全文和对象数据的 .NET 原生数据库。",
    description: "SonnetDB 面向边缘与云端的现场数据场景，提供高效写入、SQL 查询和多模型数据能力，并保持熟悉的 .NET 开发体验。",
    websiteLabel: "产品官网",
    website: "https://www.sonnetdb.com/",
    github: "https://github.com/IoTSharp/SonnetDB",
    gitee: "https://gitee.com/IoTSharp/SonnetDB",
    tags: ["时序", "多模型", ".NET 10"],
    highlights: ["高频遥测与指标写入", "时序、向量、全文和对象数据", "单机、边缘和托管部署路径"]
  },
  {
    slug: "IoTCoWork",
    name: "IoTCoWork",
    category: "工程工作台",
    role: "在本地完成建模、调试与生成",
    summary: "面向 IoTSharp 生态的 Blazor Hybrid 本地工作台。",
    description: "IoTCoWork 把工程建模、设备调试、脚本设计、Copilot 协作和产物生成放进一个本地优先的工作台，适合现场工程师与开发者协作。",
    websiteLabel: "产品页面",
    website: "https://iotsharp.net/IoTCoWork/",
    github: "https://github.com/IoTSharp/IoTCoWork",
    gitee: "https://gitee.com/IoTSharp/IoTCoWork",
    tags: ["Blazor Hybrid", "建模", "Copilot"],
    highlights: ["本地优先的工程项目与配置", "设备调试、脚本设计和代码生成", "与 IoTSharp、IoTEdge 的协作入口"]
  },
  {
    slug: "IoTEdge",
    name: "IoTEdge",
    category: "边缘运行时",
    role: "把采集与计算带到现场",
    summary: "面向工业连接、采集循环与上报通道的 C# AOT 边缘基座。",
    description: "IoTEdge 运行在靠近设备的环境中，承载工业协议连接、采集任务、数据转换和上报通道，适合资源受限或需要离线运行的现场。",
    websiteLabel: "产品页面",
    website: "https://iotsharp.net/IoTEdge/",
    github: "https://github.com/IoTSharp/IoTEdge",
    gitee: "https://gitee.com/IoTSharp/IoTEdge",
    tags: ["C# AOT", "边缘网关", "离线运行"],
    highlights: ["C# AOT 运行时与低依赖部署", "采集循环、缓存和可靠上报", "适配工业协议与 IoTSharp 平台"]
  },
  {
    slug: "IoTEmBASIC",
    name: "IoTEmBASIC",
    category: "嵌入式运行时",
    role: "为低资源设备保留开发自由",
    summary: "覆盖 STM32、RTOS、bare-metal 与低资源 Linux 的嵌入式 BASIC/C 运行时。",
    description: "IoTEmBASIC 面向微控制器和低资源设备，提供适合现场控制与快速试验的 BASIC/C 运行时，并沿用 IoTSharp 的设备连接思路。",
    websiteLabel: "产品页面",
    website: "https://iotsharp.net/IoTEmBASIC/",
    github: "https://github.com/IoTSharp/IoTEmbedded",
    gitee: "https://gitee.com/IoTSharp/IoTEmbedded",
    tags: ["Embedded BASIC", "STM32", "RTOS"],
    highlights: ["STM32、RTOS 和 bare-metal 目标", "BASIC/C 混合开发体验", "面向低资源设备的轻量通信能力"]
  }
];

export const featuredProducts = products;

export const getProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
