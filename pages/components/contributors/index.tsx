import {FC} from "react";
import styles from "./styles.module.scss";

export interface IContributorsProps {
}

const Contributors: FC<IContributorsProps> = ({}) => {
  const Comments = [{
    avatar: 'https://avatars.githubusercontent.com/u/29589505?v=4',
    name: 'IoTGateway 王海东',
    content: 'IoTSharp作为dotNet开源物联网平台的独苗，架构设计先进、可扩展性强、协议宽松。是你学习、评估、落地的最佳选择。',
  }, {
    avatar: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/card-meta-avatar-docs-demo.jpg',
    name: 'ThingsBoard中文网 王磊',
    content: 'IoTSharp一个开箱即用的开源物联网平台助力企业快速完成IoT数据采集，预警处理及数据可视化，保证项目质量提高项目交付率。'
  }]
  return (
    <div className={styles.contributorsContainer}>
      <p className={styles.title}>与用户共同成长</p>
      <p className={styles.subTitle}>IoTSharp 重视我们的用户，加入并助力我们不断完善</p>
      <dl className={styles.stats}>
        <div><dt>Stars</dt><dd>1800+</dd></div>
        <div><dt>Fork</dt><dd>600+</dd></div>
        <div><dt>Download</dt><dd>3400+</dd></div>
        <div><dt>Contributors</dt><dd>15+</dd></div>
      </dl>
      <div className={styles.imageBox}>
        <div className={styles.comments}>
          {
            Comments?.map((comment, index) => {
              return (
                <article className={styles.commentCard} key={index}>
                  <p>{comment?.content}</p>
                  <footer>
                    <img className={styles.avatar} alt="" src={comment?.avatar}/>
                    <span>{comment?.name}</span>
                  </footer>
                </article>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Contributors;
