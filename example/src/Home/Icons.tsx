import { KaIcon } from '@kaiachain/kaia-design-system'

const Icons = () => {
  return (
    <>
      <KaIcon.Search style={{ width: 20, height: 30 }} stroke="blue" />
      <KaIcon.ChevronBottom style={{ width: 30, height: 20 }} stroke="blue" />
      <KaIcon.Plus
        style={{ width: 40, height: 20, backgroundColor: 'blue' }}
        stroke="red"
      />
    </>
  )
}
export default Icons
