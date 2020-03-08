import Link from 'next/link'
import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Top" />
    <div className={sharedStyles.layout}>
      <h1>RikuSugawara Blog</h1>
      <div className="explanation">
        <p>
          東京・横浜で働くフリーランスデザイナー兼フロントエンドエンジニアのブログです。
          Next.jsベースで動くNotion+ZEIT
          Nowの環境に興味があってはじめました。（ブログのデザインは製作中）
        </p>
        <p>
          普段はNuxt(Vue)+TypeScriptの案件多め。お仕事の依頼はTwitterなどからご連絡ください
        </p>
      </div>
    </div>
  </>
)
