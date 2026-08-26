export interface ProductDetail {
  title: string;
  description: string;
}

export interface ProductStep extends ProductDetail {
  label: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  role: string;
  summary: string;
  description: string;
  audienceIntro: string;
  audiences: ProductDetail[];
  capabilities: ProductDetail[];
  portfolioRole: string;
  workflow: ProductStep[];
  quickStart: ProductStep[];
  docs: string;
  websiteLabel: string;
  website: string;
  github: string;
  gitee: string;
  tags: string[];
}

export const products: Product[] = [
  {
    slug: "iotsharp",
    name: "IoTSharp",
    category: "工业物联网平台",
    role: "连接现场设备与数字业务",
    summary: "开源的设备、资产、规则链和遥测平台，为工业现场提供统一的数据入口。",
    description: "IoTSharp 把设备接入、数字孪生、遥测、属性、事件、告警和规则链组织在一套开放平台中。它既能作为项目的设备数据底座，也能通过开放 API 与现有 MES、能源、运维和数据应用协作。",
    audienceIntro: "适合需要统一设备身份、数据语义和业务动作的团队，也适合作为 .NET 物联网架构的开放起点。",
    audiences: [
      {title: "平台与后端开发者", description: "用 API、规则链和扩展点构建设备管理、数据服务与行业应用。"},
      {title: "解决方案与交付团队", description: "用统一租户、产品、设备和资产模型缩短项目从试点到复制的周期。"},
      {title: "运维与数据团队", description: "集中观察遥测、属性、事件与告警，让现场状态进入可追踪的运营流程。"}
    ],
    capabilities: [
      {title: "多协议设备接入", description: "通过 HTTP、MQTT、CoAP 等通道接收设备消息，并为协议适配与网关接入保留扩展空间。"},
      {title: "数字孪生资源模型", description: "以租户、产品、设备、资产、属性和遥测建立清晰的数据归属与业务语义。"},
      {title: "事件、告警与规则链", description: "把持续到达的数据转化为过滤、计算、通知和业务动作，减少外围系统的重复编排。"},
      {title: "双向设备协作", description: "通过 RPC、属性下发和固件管理连接云端决策与现场执行。"},
      {title: "开放 API 与权限边界", description: "面向管理端、行业应用和第三方系统提供可组合的集成入口。"},
      {title: "多种部署与存储选择", description: "适配从开发验证到生产环境的数据库、容器和本地部署路径。"}
    ],
    portfolioRole: "IoTSharp 位于产品组合的中心：IoTEmBASIC 在设备端执行轻量逻辑，IoTEdge 在现场采集并缓冲数据，IoTSharp 统一治理连接与业务事件，SonnetDB 承载高密度现场数据，IoTCoWork 则帮助工程师在本地完成建模和调试。",
    workflow: [
      {label: "01", title: "定义产品与设备", description: "先建立租户、产品、设备和资产关系，明确数据与权限边界。"},
      {label: "02", title: "接入现场消息", description: "选择 MQTT、HTTP、CoAP 或边缘网关，把遥测、属性和事件送入平台。"},
      {label: "03", title: "编排规则与告警", description: "将数据条件转为规则动作、告警状态或对外集成事件。"},
      {label: "04", title: "连接业务应用", description: "通过开放 API、仪表盘和外部系统将设备状态带入业务流程。"}
    ],
    quickStart: [
      {label: "A", title: "阅读部署文档", description: "确认运行环境、数据库与最适合当前项目的部署方式。"},
      {label: "B", title: "启动平台", description: "按文档运行服务，创建第一个租户、产品和设备。"},
      {label: "C", title: "发送第一条遥测", description: "使用示例或设备 SDK 验证接入、存储与查询链路。"}
    ],
    docs: "/docs/iotsharp/",
    websiteLabel: "在线演示",
    website: "https://iotsharp.online/",
    github: "https://github.com/IoTSharp/IoTSharp",
    gitee: "https://gitee.com/IoTSharp/IoTSharp",
    tags: ["设备接入", "数字孪生", "规则链"]
  },
  {
    slug: "sonnetdb",
    name: "SonnetDB",
    category: "现场数据基础设施",
    role: "让时序数据靠近业务与设备",
    summary: "面向遥测、指标、向量、全文和对象数据的 .NET 原生数据库。",
    description: "SonnetDB 面向边缘与云端的现场数据场景，在一个 .NET 友好的数据引擎中组织高频写入、SQL 查询和多模型数据。团队可以让数据靠近采集与计算，同时保留熟悉的开发、部署和运维体验。",
    audienceIntro: "适合需要处理连续设备数据，又不希望为多个专用数据系统承担额外集成成本的 .NET 团队。",
    audiences: [
      {title: "IoT 与边缘开发者", description: "在采集节点或现场服务器上持久化遥测、指标和业务对象。"},
      {title: ".NET 应用团队", description: "沿用熟悉的语言、类型系统和部署链路开发数据密集型应用。"},
      {title: "数据与 AI 工程师", description: "在时序数据旁组织向量、全文与对象数据，减少跨系统搬运。"}
    ],
    capabilities: [
      {title: "高频时序写入", description: "为遥测、指标和持续采样场景设计的数据写入与时间范围查询能力。"},
      {title: "SQL 查询体验", description: "使用熟悉的查询表达方式分析数据，降低应用团队的学习与接入成本。"},
      {title: "多模型数据组织", description: "在同一产品路径中覆盖时序、向量、全文和对象数据需求。"},
      {title: ".NET 原生集成", description: "贴合 C# 服务、边缘应用和现有 .NET 工程的构建与发布方式。"},
      {title: "边缘到云的部署", description: "支持从单机和现场节点开始，再按业务边界扩展到服务化运行。"},
      {title: "靠近数据的计算", description: "减少现场数据的无效传输，让筛选、检索和分析发生在更合适的位置。"}
    ],
    portfolioRole: "SonnetDB 是产品组合的数据层。IoTEdge 与 IoTSharp 产生和治理现场数据，SonnetDB 为高密度遥测、检索与分析提供更靠近业务的落点，并可独立服务任何 .NET 数据应用。",
    workflow: [
      {label: "01", title: "确定数据模型", description: "识别时间序列、业务对象、检索文本与向量数据的边界。"},
      {label: "02", title: "在应用中接入", description: "按文档启动数据库并从 .NET 服务建立读写连接。"},
      {label: "03", title: "写入现场数据", description: "把采集数据、指标或应用事件持续写入对应模型。"},
      {label: "04", title: "查询与服务化", description: "通过 SQL 与应用接口完成分析，并逐步形成稳定的数据服务。"}
    ],
    quickStart: [
      {label: "A", title: "选择运行方式", description: "从本地开发、边缘单机或容器化部署中选择起点。"},
      {label: "B", title: "创建第一个数据集", description: "按照文档初始化实例并定义用于验证的时序数据。"},
      {label: "C", title: "完成读写闭环", description: "从 .NET 示例写入数据，再使用 SQL 执行时间范围查询。"}
    ],
    docs: "/docs/sonnetdb/",
    websiteLabel: "产品官网",
    website: "https://www.sonnetdb.com/",
    github: "https://github.com/IoTSharp/SonnetDB",
    gitee: "https://gitee.com/IoTSharp/SonnetDB",
    tags: ["时序", "多模型", ".NET 10"]
  },
  {
    slug: "iotcowork",
    name: "IoTCoWork",
    category: "工程工作台",
    role: "在本地完成建模、调试与生成",
    summary: "面向 IoTSharp 生态的 Blazor Hybrid 本地工作台。",
    description: "IoTCoWork 把工程建模、设备调试、脚本设计、Copilot 协作和产物生成放进一个本地优先的工作台。它围绕工程文件组织上下文，让现场工程师与软件开发者能在同一交付基线上协作。",
    audienceIntro: "适合需要在办公环境与工业现场之间反复建模、验证和交付的工程团队。",
    audiences: [
      {title: "现场与自动化工程师", description: "集中管理工程配置、设备参数和调试记录，保留本地可控的工作方式。"},
      {title: "IoT 应用开发者", description: "把模型、脚本与生成产物纳入可重复的工程流程。"},
      {title: "方案与交付负责人", description: "建立可复制的项目模板，减少不同现场之间的配置漂移。"}
    ],
    capabilities: [
      {title: "本地优先工程空间", description: "围绕项目文件管理模型、配置和产物，适配离线或受限网络现场。"},
      {title: "设备连接与调试", description: "在交付前后验证设备通信、数据映射和关键配置。"},
      {title: "脚本与逻辑设计", description: "将现场处理逻辑放进可检查、可迭代的工程上下文。"},
      {title: "Copilot 协作", description: "利用工程上下文辅助解释、生成和调整配置与代码。"},
      {title: "交付产物生成", description: "从工程模型生成运行时需要的配置、脚本或代码，减少手工搬运。"},
      {title: "生态产品协同", description: "面向 IoTEdge、IoTEmBASIC 与 IoTSharp 的配置和交付链路组织工作。"}
    ],
    portfolioRole: "IoTCoWork 是产品组合中的工程入口。工程师在这里定义和调试项目，再把配置与逻辑交给 IoTEdge 或 IoTEmBASIC 运行，并连接 IoTSharp 平台完成设备治理。",
    workflow: [
      {label: "01", title: "建立工程", description: "从项目模板开始，集中保存目标、连接与数据模型。"},
      {label: "02", title: "连接并验证", description: "接入测试设备，核对协议参数、采集值和数据映射。"},
      {label: "03", title: "设计现场逻辑", description: "编辑脚本与配置，并借助 Copilot 检查和生成重复内容。"},
      {label: "04", title: "生成与交付", description: "输出运行产物，部署到边缘或设备环境并持续维护工程版本。"}
    ],
    quickStart: [
      {label: "A", title: "安装工作台", description: "根据文档选择目标平台的安装包或开发运行方式。"},
      {label: "B", title: "创建工程", description: "录入第一个设备连接与数据点，形成可保存的项目结构。"},
      {label: "C", title: "完成一次生成", description: "验证调试数据并导出面向运行时的配置或代码产物。"}
    ],
    docs: "/docs/iotcowork/",
    websiteLabel: "产品官网",
    website: "https://iotsharp.net/iotcowork/",
    github: "https://github.com/IoTSharp/IoTCoWork",
    gitee: "https://gitee.com/IoTSharp/IoTCoWork",
    tags: ["Blazor Hybrid", "建模", "Copilot"]
  },
  {
    slug: "iotedge",
    name: "IoTEdge",
    category: "边缘运行时",
    role: "把采集与计算带到现场",
    summary: "面向工业连接、采集循环与上报通道的 C# AOT 边缘基座。",
    description: "IoTEdge 运行在靠近设备的环境中，承载工业协议连接、采集任务、数据转换和上报通道。C# AOT 与低依赖部署路径使它适合资源受限、网络不稳定或需要持续本地运行的现场。",
    audienceIntro: "适合需要把协议接入、采集与可靠上报放到设备旁，同时保持 C# 工程效率的团队。",
    audiences: [
      {title: "边缘与网关开发者", description: "用 C# 构建设备连接、采集循环、数据转换和自定义扩展。"},
      {title: "工业集成工程师", description: "把不同现场协议收敛为稳定的数据上行通道。"},
      {title: "平台运维团队", description: "在断网与资源约束下维持现场任务，并管理重新连接后的数据上报。"}
    ],
    capabilities: [
      {title: "C# AOT 边缘基座", description: "兼顾 .NET 开发体验与原生发布形态，降低现场运行依赖。"},
      {title: "工业协议适配", description: "面向 PLC、仪表、传感器和其他现场设备组织连接与采集扩展。"},
      {title: "计划采集循环", description: "按项目需要调度数据点读取、转换和质量处理。"},
      {title: "离线缓存与恢复", description: "网络波动时在现场保留关键数据，并在连接恢复后继续上报。"},
      {title: "数据转换与路由", description: "在边缘统一单位、字段和目标通道，减少平台侧重复处理。"},
      {title: "IoTSharp 协同", description: "连接平台设备模型、遥测与管理链路，也可作为独立边缘组件使用。"}
    ],
    portfolioRole: "IoTEdge 是产品组合中的现场桥梁：向下连接协议与设备，向上连接 IoTSharp 和 SonnetDB；工程配置可由 IoTCoWork 组织，轻量设备逻辑则可与 IoTEmBASIC 配合。",
    workflow: [
      {label: "01", title: "描述现场连接", description: "定义设备、协议参数、数据点与采样周期。"},
      {label: "02", title: "运行采集任务", description: "在目标边缘环境启动运行时，验证数据质量与资源占用。"},
      {label: "03", title: "处理离线状态", description: "配置缓存、重试和上报策略，覆盖网络不稳定场景。"},
      {label: "04", title: "接入上层系统", description: "把标准化数据送往 IoTSharp、SonnetDB 或现有业务通道。"}
    ],
    quickStart: [
      {label: "A", title: "确认目标环境", description: "根据操作系统、架构和现场资源选择构建与发布方式。"},
      {label: "B", title: "配置一个采集点", description: "连接测试设备，设定采样周期并观察读取结果。"},
      {label: "C", title: "验证可靠上报", description: "连接目标平台并模拟断网，确认缓存与恢复行为。"}
    ],
    docs: "/docs/iotedge/",
    websiteLabel: "产品官网",
    website: "https://iotsharp.net/iotedge/",
    github: "https://github.com/IoTSharp/IoTEdge",
    gitee: "https://gitee.com/IoTSharp/IoTEdge",
    tags: ["C# AOT", "边缘网关", "离线运行"]
  },
  {
    slug: "iotembasic",
    name: "IoTEmBASIC",
    category: "嵌入式运行时",
    role: "为低资源设备保留开发自由",
    summary: "覆盖 STM32、RTOS、bare-metal 与低资源 Linux 的嵌入式 BASIC/C 运行时。",
    description: "IoTEmBASIC 面向微控制器和低资源设备，提供适合现场控制与快速试验的 BASIC/C 运行时。它让团队在资源有限的目标上保留可读、可迭代的设备逻辑，并沿用 IoTSharp 的连接思路。",
    audienceIntro: "适合在 MCU、RTOS、bare-metal 或低资源 Linux 上开发采集、控制与联网逻辑的团队。",
    audiences: [
      {title: "嵌入式开发者", description: "在受限资源上组合 C 驱动与更易迭代的 BASIC 业务逻辑。"},
      {title: "硬件与原型团队", description: "快速验证传感器、控制流程和联网方案，再逐步固化实现。"},
      {title: "设备交付团队", description: "为多个硬件目标维护一致的运行模型与通信路径。"}
    ],
    capabilities: [
      {title: "嵌入式 BASIC 运行时", description: "用紧凑、可读的脚本表达采集、判断和控制流程。"},
      {title: "BASIC 与 C 协作", description: "将底层驱动与性能关键逻辑留在 C 中，让上层流程保持快速迭代。"},
      {title: "多类硬件目标", description: "面向 STM32、RTOS、bare-metal 与低资源 Linux 组织移植和运行。"},
      {title: "设备通信能力", description: "为遥测上报、参数同步和现场消息交互提供轻量连接路径。"},
      {title: "小资源运行", description: "围绕有限内存、存储和计算能力控制运行时边界。"},
      {title: "现场逻辑迭代", description: "缩短硬件验证和设备行为调整周期，减少每次变更的固件开发成本。"}
    ],
    portfolioRole: "IoTEmBASIC 位于产品组合最靠近硬件的一层。它在设备上执行采集和控制逻辑，经 IoTEdge 或直接协议接入 IoTSharp，并可由 IoTCoWork 组织工程配置与生成产物。",
    workflow: [
      {label: "01", title: "选择硬件目标", description: "确认 MCU、RTOS 或 Linux 环境，以及可用内存和外设资源。"},
      {label: "02", title: "接入底层能力", description: "用 C 驱动连接传感器、执行器、存储和通信接口。"},
      {label: "03", title: "编写设备逻辑", description: "用 BASIC 组织采样、判断、控制和消息处理流程。"},
      {label: "04", title: "连接边缘或平台", description: "验证遥测上报与配置交互，再固化到设备交付流程。"}
    ],
    quickStart: [
      {label: "A", title: "准备目标板", description: "按文档选择支持的开发环境与示例目标。"},
      {label: "B", title: "运行第一个脚本", description: "构建运行时并执行基础输入输出或传感器示例。"},
      {label: "C", title: "发送设备数据", description: "接通通信能力，将首条遥测发送到边缘或 IoTSharp。"}
    ],
    docs: "/docs/iotembasic/",
    websiteLabel: "产品官网",
    website: "https://iotsharp.net/iotembasic/",
    github: "https://github.com/IoTSharp/IoTEmbedded",
    gitee: "https://gitee.com/IoTSharp/IoTEmbedded",
    tags: ["Embedded BASIC", "STM32", "RTOS"]
  }
];

export const featuredProducts = products;

export const getProduct = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug);
