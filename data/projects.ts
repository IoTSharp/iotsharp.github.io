export interface ProjectEntry {
  name: string;
  role: string;
  description: string;
  page: string;
  repo: string;
  gitee?: string;
  productSlug?: string;
}

export interface ProjectGroup {
  title: string;
  description: string;
  projects: ProjectEntry[];
}

const github = (repo: string): string => `https://github.com/IoTSharp/${repo}`;
const gitee = (repo: string): string => `https://gitee.com/IoTSharp/${repo}`;

export const projectGroups: ProjectGroup[] = [
  {
    title: "核心平台",
    description: "设备接入、数据处理、AI 辅助和本地协作的主路径。",
    projects: [
      {
        name: "IoTSharp",
        role: "开源物联网主平台",
        description: "设备注册、心跳、配置、命令、固件、遥测、属性、事件、告警、规则引擎和开放 API。",
        page: "/IoTSharp/",
        repo: github("IoTSharp"),
        gitee: gitee("IoTSharp"),
        productSlug: "IoTSharp"
      },
      {
        name: "IoTCoWork",
        role: "Blazor Hybrid 本地工作台",
        description: "面向工程建模、调试、Copilot 协作、脚本设计和产物生成的本地开发工作台。",
        page: "/IoTCoWork/",
        repo: github("IoTCoWork"),
        gitee: gitee("IoTCoWork"),
        productSlug: "IoTCoWork"
      },
      {
        name: "SonnetDB",
        role: "C# 时序数据库",
        description: "面向高频遥测、指标写入、SQL 查询和边缘部署的 .NET 10 时序数据库。",
        page: "/SonnetDB/",
        repo: github("SonnetDB"),
        gitee: gitee("SonnetDB"),
        productSlug: "SonnetDB"
      },
      {
        name: "DotVector",
        role: ".NET 原生向量数据库",
        description: "单目录持久化、进程内运行、零外部依赖，也支持 gRPC 服务器模式与 Docker 部署。",
        page: "https://iotsharp.net/DotVector/",
        repo: github("DotVector"),
        gitee: gitee("DotVector")
      }
    ]
  },
  {
    title: "边缘与嵌入式",
    description: "从 C# AOT 网关到 STM32、RTOS、bare-metal 和低资源 Linux 的边缘运行时和示例。",
    projects: [
      {
        name: "IoTEdge",
        role: "C# AOT 边缘基座",
        description: "工业 IoT 连接网关、采集循环、上报通道和 BasicRuntime C# 宿主。",
        page: "/IoTEdge/",
        repo: github("IoTEdge"),
        gitee: gitee("IoTEdge"),
        productSlug: "IoTEdge"
      },
      {
        name: "IoTEmBASIC",
        role: "嵌入式 BASIC/C 运行时",
        description: "覆盖 STM32、RTOS、bare-metal 和低资源 Linux 的嵌入式 BASIC/C 运行时。",
        page: "/IoTEmBASIC/",
        repo: github("IoTEmbedded"),
        gitee: gitee("IoTEmbedded"),
        productSlug: "IoTEmBASIC"
      },
      {
        name: "IoTSharp.Edge.RT-Thread",
        role: "RT-Thread 接入示例",
        description: "基于 RT-Thread IoT Board 的 IoTSharp 对接协议实现与设备侧示例。",
        page: "https://iotsharp.net/IoTSharp.Edge.RT-Thread/",
        repo: github("IoTSharp.Edge.RT-Thread"),
        gitee: gitee("IoTSharp.Edge.RT-Thread")
      }
    ]
  },
  {
    title: "协议、SDK 与驱动",
    description: "工业协议、嵌入式通信、数据库连接器和设备端 SDK。",
    projects: [
      {
        name: "IoTClient",
        role: "工业通信协议客户端",
        description: "面向 PLC、Modbus、BACnet 等常见工业通信读取和测试场景。",
        page: "https://iotsharp.net/IoTClient/",
        repo: github("IoTClient"),
        gitee: gitee("IoTClient")
      },
      {
        name: "Modbus",
        role: ".NET Modbus 协议实现",
        description: "基于 .NET Standard 的 Modbus 通信协议实现，服务网关和采集场景。",
        page: "https://iotsharp.net/Modbus/",
        repo: github("Modbus"),
        gitee: gitee("Modbus")
      },
      {
        name: "TaosConnector",
        role: "TDengine ADO.NET 连接器",
        description: "为 TDengine 提供 ADO.NET、ORM、Stmt 等 .NET 生态接入能力。",
        page: "https://iotsharp.net/TaosConnector/",
        repo: github("TaosConnector"),
        gitee: gitee("TaosConnector")
      },
      {
        name: "IoTSharp.Sdks.*",
        role: "多语言设备 SDK",
        description: "覆盖 CoAP、Java、Lua、MQTT-C 等设备端接入示例和 SDK。",
        page: "https://iotsharp.net/IoTSharp.Sdks.Java/",
        repo: github("IoTSharp.Sdks.Java"),
        gitee: gitee("IoTSharp.Sdks.Java")
      }
    ]
  },
  {
    title: "开发者工具与 UI",
    description: "围绕 .NET、Blazor、LVGL、MQTT 和运维体验的工具生态。",
    projects: [
      {
        name: "AntDesignXBlazor",
        role: "Ant Design X for Blazor",
        description: "面向 AI 对话、工作台和内容生成类产品的 Blazor 组件实现。",
        page: "https://x.blazor.design/",
        repo: github("AntDesignXBlazor"),
        gitee: gitee("AntDesignXBlazor")
      },
      {
        name: "LVGLSharp",
        role: "WinForms 到 LVGL 的兼容层",
        description: "让 Visual Studio WinForms 设计器产出的界面在嵌入式 Linux 上一致运行。",
        page: "https://lvglsharp.net/",
        repo: github("LVGLSharp"),
        gitee: gitee("LVGLSharp")
      },
      {
        name: "lvgl-editor",
        role: "LVGL 可视化编辑器",
        description: "拖拽设计、事件绑定、逻辑编排和 C 代码生成，服务嵌入式 GUI 开发。",
        page: "https://iotsharp.net/lvgl-editor/",
        repo: github("lvgl-editor"),
        gitee: gitee("lvgl-editor")
      },
      {
        name: "MQTT.Chat",
        role: "开源分布式 MQTT Broker",
        description: "面向 IoT 场景的可扩展、高可用 MQTT 消息代理项目。",
        page: "https://mqtt.chat/",
        repo: github("MQTT.Chat"),
        gitee: gitee("MQTT.Chat")
      }
    ]
  }
];

export const repositoryCatalog = [
  {
    title: "主平台与数据",
    repositories: ["IoTSharp", "IoTCoWork", "SonnetDB", "DotVector", "DotSearch", "FreeSql", "TaosConnector", "PinusDB.Data", "EFCore.Cassandra", "EntityFrameworkCore", "IoTSharp.EntityFrameworkCore.MongoDB"]
  },
  {
    title: "边缘与嵌入式",
    repositories: ["IoTEdge", "IoTEmbedded", "IoTCoreAppUpdates", "IoTSharp.Edge.RT-Thread", "IoTSharp.Edge.nanoFramework", "IoTSharp.Edge.paho.mqtt.c", "iotsharp-rtthread-package", "stm32-it-sdk", "STM32F407VET6", "W601_IoT_Board", "ADT74XX", "PANDORA"]
  },
  {
    title: "协议、通信与 SDK",
    repositories: ["IoTClient", "Modbus", "ModbusTool", "OpcUaHelper", "LibUA", "CoAP.NET", "IoTSharp.Sdks.CoAP", "IoTSharp.Sdks.Java", "IoTSharp.Sdks.Lua", "IoTSharp.Sdks.MQTT-C", "MQTTSdk", "mqttclient", "MQTT.Chat", "MQTTnet.AspNetCore.Routing", "NetCoreMQTTExampleCluster"]
  },
  {
    title: "开发框架与 UI",
    repositories: ["AntDesignXBlazor", "LVGLSharp", "lvgl-editor", "MewUI", "NativeWebHost", "Client", "MobileClient", "WeChatMiniApp", "ngFlowchart", "easy-flow", "SilkierQuartz", "AspNetCore.HealthChecks", "CAP.Extensions"]
  },
  {
    title: "工具、库与镜像项目",
    repositories: ["args", "Cocona", "GitLoom", "Extensions.Configuration.GitRepository", "IoTSharp.Numerics", "IoTSharp.X509Extensions", "jsonDB", "RuleEngine", "libedssharp", "FlatSharp", "HTML-Renderer", "PDFsharp", "tinylog", "parson", "Savitar"]
  },
  {
    title: "社区、资料与实验",
    repositories: ["awesome-mqtt", "awesome-raspberry-pi-zh", "canfestival", "tdengine-action", "VLPR", "stable-diffusion.cpp", "whisper.cpp", "DynamicExpresso", "Cyotek.Windows.Forms.ImageBox", "git-credential-manager", ".github", "iotsharp.github.io"]
  }
];
