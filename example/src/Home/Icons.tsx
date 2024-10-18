import { KaIcon } from '@kaiachain/kaia-design-system'
import { Row } from './components/Row'

const Icons = () => {
  return (
    <Row style={{ gap: 10, alignItems: 'center' }}>
      <KaIcon.Search style={{ width: 20, height: 30 }} fill="blue" />
      <KaIcon.ChevronBottom style={{ width: 30, height: 20 }} fill="blue" />
      <KaIcon.Plus
        style={{ width: 40, height: 20, backgroundColor: 'blue' }}
        fill="red"
      />
      <KaIcon.CircleQuestion style={{ width: 30, height: 20 }} fill="green" />
      <KaIcon.ArrowBarUpRight style={{ width: 50, height: 50 }} fill="purple" />
    </Row>
  )
}
export default Icons
