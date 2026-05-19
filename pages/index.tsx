import React from "react";
import type {NextPage} from "next";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import styles from "./index.module.scss";

const projectGroups = [
  {
    title: "核心平台",
    description: "设备接入、数据处理、AI 辅助和本地协作的主路径。",
    projects: [
      {
        name: "IoTSharp",
        role: "开源物联网主平台",
        description: "设备注册、心跳、配置、命令、固件、遥测、属性、事件、告警、规则引擎和开放 API。",
        page: "https://iotsharp.net/IoTSharp/",
        repo: "https://github.com/IoTSharp/IoTSharp"
      },
      {
        name: "IoTCoWork",
        role: "Blazor Hybrid 本地工作台",
        description: "面向工程建模、调试、Copilot 协作、脚本设计和产物生成的本地开发工作台。",
        page: "https://iotsharp.net/IoTCoWork/",
        repo: "https://github.com/IoTSharp/IoTCoWork"
      },
      {
        name: "SonnetDB",
        role: "C# 时序数据库",
        description: "面向高频遥测、指标写入、SQL 查询和边缘部署的 .NET 10 时序数据库。",
        page: "https://sonnetdb.com/",
        repo: "https://github.com/IoTSharp/SonnetDB"
      },
      {
        name: "DotVector",
        role: ".NET 原生向量数据库",
        description: "单目录持久化、进程内运行、零外部依赖，也支持 gRPC 服务器模式与 Docker 部署。",
        page: "https://iotsharp.net/DotVector/",
        repo: "https://github.com/IoTSharp/DotVector"
      }
    ]
  },
  {
    title: "边缘与嵌入式",
    description: "从 C# AOT、Linux C 到 STM32 / RT-Thread 的边缘运行时和示例。",
    projects: [
      {
        name: "IoTEdge",
        role: "C# AOT 边缘基座",
        description: "工业 IoT 连接网关、采集循环、上报通道和 BasicRuntime C# 宿主。",
        page: "https://iotsharp.net/IoTEdge/",
        repo: "https://github.com/IoTSharp/IoTEdge"
      },
      {
        name: "IoTEdge.Linux",
        role: "Linux C 边缘基座",
        description: "上游仓库名为 Pixiu，提供 Linux C 边缘计算、控制板和跨发行版构建基础。",
        page: "https://iotsharp.net/Pixiu/",
        repo: "https://github.com/IoTSharp/Pixiu"
      },
      {
        name: "IoTEdge.Stm32",
        role: "MCU BASIC 解释器内核",
        description: "上游仓库名为 IoTEmBASIC，面向 STM32 和低资源设备的 BASIC 解释器生态。",
        page: "https://iotsharp.net/IoTEmBASIC/",
        repo: "https://github.com/IoTSharp/IoTEmBASIC"
      },
      {
        name: "IoTSharp.Edge.RT-Thread",
        role: "RT-Thread 接入示例",
        description: "基于 RT-Thread IoT Board 的 IoTSharp 对接协议实现与设备侧示例。",
        page: "https://iotsharp.net/IoTSharp.Edge.RT-Thread/",
        repo: "https://github.com/IoTSharp/IoTSharp.Edge.RT-Thread"
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
        repo: "https://github.com/IoTSharp/IoTClient"
      },
      {
        name: "Modbus",
        role: ".NET Modbus 协议实现",
        description: "基于 .NET Standard 的 Modbus 通信协议实现，服务网关和采集场景。",
        page: "https://iotsharp.net/Modbus/",
        repo: "https://github.com/IoTSharp/Modbus"
      },
      {
        name: "TaosConnector",
        role: "TDengine ADO.NET 连接器",
        description: "为 TDengine 提供 ADO.NET、ORM、Stmt 等 .NET 生态接入能力。",
        page: "https://iotsharp.net/TaosConnector/",
        repo: "https://github.com/IoTSharp/TaosConnector"
      },
      {
        name: "IoTSharp.Sdks.*",
        role: "多语言设备 SDK",
        description: "覆盖 CoAP、Java、Lua、MQTT-C 等设备端接入示例和 SDK。",
        page: "https://iotsharp.net/IoTSharp.Sdks.Java/",
        repo: "https://github.com/IoTSharp/IoTSharp.Sdks.Java"
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
        repo: "https://github.com/IoTSharp/AntDesignXBlazor"
      },
      {
        name: "LVGLSharp",
        role: "WinForms 到 LVGL 的兼容层",
        description: "让 Visual Studio WinForms 设计器产出的界面在嵌入式 Linux 上一致运行。",
        page: "https://lvglsharp.net/",
        repo: "https://github.com/IoTSharp/LVGLSharp"
      },
      {
        name: "lvgl-editor",
        role: "LVGL 可视化编辑器",
        description: "拖拽设计、事件绑定、逻辑编排和 C 代码生成，服务嵌入式 GUI 开发。",
        page: "https://iotsharp.net/lvgl-editor/",
        repo: "https://github.com/IoTSharp/lvgl-editor"
      },
      {
        name: "MQTT.Chat",
        role: "开源分布式 MQTT Broker",
        description: "面向 IoT 场景的可扩展、高可用 MQTT 消息代理项目。",
        page: "https://mqtt.chat/",
        repo: "https://github.com/IoTSharp/MQTT.Chat"
      }
    ]
  }
];

const capabilities = [
  "设备注册、配置、命令、固件和生命周期管理",
  "遥测、属性、事件、告警和规则链处理",
  "C# AOT、Linux C、STM32 / BASIC 三类边缘目标",
  "工业协议、嵌入式 SDK、数据库连接器和工具链",
  "Blazor Hybrid 工作台、AI 对话组件和可视化编辑体验",
  "文档、示例、GitHub Pages 和社区协作入口"
];

const repositoryCatalog = [
  {
    title: "主平台与数据",
    repositories: ["IoTSharp", "IoTCoWork", "SonnetDB", "DotVector", "DotSearch", "FreeSql", "TaosConnector", "PinusDB.Data", "EFCore.Cassandra", "EntityFrameworkCore", "IoTSharp.EntityFrameworkCore.MongoDB"]
  },
  {
    title: "边缘与嵌入式",
    repositories: ["IoTEdge", "Pixiu", "IoTEmBASIC", "IoTCoreAppUpdates", "IoTSharp.Edge.RT-Thread", "IoTSharp.Edge.nanoFramework", "IoTSharp.Edge.paho.mqtt.c", "iotsharp-rtthread-package", "stm32-it-sdk", "STM32F407VET6", "W601_IoT_Board", "ADT74XX", "PANDORA"]
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

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <main className={styles.home}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <p className={styles.eyebrow}>iotsharp.net · Open Source Home</p>
            <h1>IoTSharp 开源产品矩阵</h1>
            <p className={styles.heroText}>
              这里是 IoTSharp 组织的开源门面：从物联网主平台、IoTCoWork 工作台、三类 IoTEdge 边缘目标，到协议 SDK、嵌入式工具和开发者组件。
            </p>
            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryAction}>浏览开源项目</a>
              <a href="https://github.com/IoTSharp" className={styles.secondaryAction} target="_blank" rel="noreferrer">GitHub 组织</a>
              <a href="https://iotsharp.online" className={styles.secondaryAction} target="_blank" rel="noreferrer">商业服务</a>
            </div>
          </div>
          <div className={styles.heroPanel} aria-label="IoTSharp open source map">
            <div>
              <span>Cloud</span>
              <strong>IoTSharp</strong>
              <small>设备接入 / 遥测 / 规则 / API</small>
            </div>
            <div>
              <span>Workbench</span>
              <strong>IoTCoWork</strong>
              <small>本地建模 / Copilot / 生成发布</small>
            </div>
            <div>
              <span>Edge</span>
              <strong>IoTEdge · Linux · STM32</strong>
              <small>C# AOT / Linux C / BASIC</small>
            </div>
          </div>
        </section>

        <section id="capabilities" className={styles.capabilities}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Capabilities</p>
            <h2>开源项目覆盖从设备到工具链的完整路径</h2>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((item, index) => (
              <div className={styles.capabilityItem} key={item}>
                <span>{(index + 1).toString().padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <div className={styles.sectionIntro}>
            <p className={styles.eyebrow}>Projects</p>
            <h2>所有主要开源仓库和内容入口</h2>
            <p>
              导航优先进入对应项目的 GitHub Pages；当项目页面尚未发布时，仍保留目标 Pages 路径，并提供 GitHub 仓库入口。
            </p>
          </div>

          {projectGroups.map((group) => (
            <div className={styles.projectGroup} key={group.title}>
              <div className={styles.groupHeading}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>
              <div className={styles.projectGrid}>
                {group.projects.map((project) => (
                  <article className={styles.projectItem} key={project.name}>
                    <p className={styles.projectRole}>{project.role}</p>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <div className={styles.projectLinks}>
                      <a href={project.page} target="_blank" rel="noreferrer">Pages</a>
                      <a href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <div className={styles.repositoryCatalog}>
            <div className={styles.groupHeading}>
              <h3>更多开源仓库</h3>
              <p>按仓库名进入约定的 GitHub Pages 路径；如果某个仓库尚未发布 Pages，可从页面路径继续进入 GitHub 仓库。</p>
            </div>
            <div className={styles.repositoryGroups}>
              {repositoryCatalog.map((group) => (
                <section className={styles.repositoryGroup} key={group.title}>
                  <h4>{group.title}</h4>
                  <div className={styles.repositoryLinks}>
                    {group.repositories.map((repo) => (
                      <a href={`https://iotsharp.net/${repo}/`} target="_blank" rel="noreferrer" key={repo}>
                        {repo}
                      </a>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section id="open-commercial" className={styles.boundary}>
          <div>
            <p className={styles.eyebrow}>Open Source + Commercial</p>
            <h2>iotsharp.net 介绍开源生态，iotsharp.online 承载商业服务</h2>
          </div>
          <p>
            开源项目聚焦设备接入、边缘运行时、协议 SDK、数据处理和开发工具。商业客户需要的 Copilot 在线服务、生成工件托管、用量计量、企业 License、镜像授权、私有化交付和支持服务由 IoTSharp Online 提供。
          </p>
          <a href="https://iotsharp.online" target="_blank" rel="noreferrer">访问 iotsharp.online</a>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
