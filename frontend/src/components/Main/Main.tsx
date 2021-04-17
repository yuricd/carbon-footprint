import { Tabs } from 'antd'
import { Food } from '../Food/Food'
import { Presentation } from '../Presentation/Presentation'
import { Transport } from '../Transport/Transport'
import styles from './Main.module.scss'

const { TabPane } = Tabs

export const Main = () => {
  return (
    <div className={styles.app}>
      <aside className={styles.presentation}>
        <Presentation />
      </aside>

      <main className={styles.content}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Transport" key="1">
            <Transport />
          </TabPane>

          <TabPane tab="Food" key="2">
            <Food />
          </TabPane>
        </Tabs>
      </main>
    </div>
  )
}
