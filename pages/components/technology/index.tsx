import {FC} from "react";
import cNames from 'classnames';
import styles from "./styles.module.scss";

export interface ITechnologyProps {
}

const Technology: FC<ITechnologyProps> = ({}) => {
  const Options = [{
    title: '预测未来',
    description: '利用ML.Net使用遥测数据训练时间序列预测模型让你对态势快人一步。',
    classGroup: [styles.item, styles.item3]
  }, {
    title: '规则链引擎',
    description: '通过脚本处理数据并结合动态表达式处理节点与节点之间的走向以实现数据清洗、告警。',
    classGroup: [styles.item, styles.item2]
  }, {
    title: '自主可控',
    description: '针对国产CPU龙芯进行了完整的适配。为国产时序数据库TDengine做了最有力的生态支持。',
    classGroup: [styles.item, styles.item1]
  }]
  return (
    <div className={styles.technologyContainer}>
      <div className={styles.titleContainer}>
        <h2>技术方向</h2>
        <div className={styles.line}/>
      </div>
      <div className={styles.grid}>
        {
          Options?.map((option, index) => {
            return (
              <div key={index}>
                <div className={cNames(option?.classGroup)}>
                  <div className={styles.title}>{option?.title}</div>
                  <div className={styles.description}>
                    {option?.description}
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Technology;
