import { Tabs } from 'antd'
import styles from './App.module.scss'
import { Food } from './components/Food/Food'
import { Presentation } from './components/Presentation/Presentation'
import { Transport } from './components/Transport/Transport'

const { TabPane } = Tabs

function App() {
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

export default App
