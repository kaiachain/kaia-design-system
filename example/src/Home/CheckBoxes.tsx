import { KaCheckBox } from '@kaiachain/kaia-design-system'
import { Row } from './components/Row'

const CheckBoxes = () => {
  return (
    <>
      <Row>
        <KaCheckBox size="sm" value="1" onClick={() => {}} />
        <KaCheckBox checked size="sm" value="1" onClick={() => {}} />
        <KaCheckBox size="md" value="1" onClick={() => {}} />
        <KaCheckBox checked size="md" value="1" onClick={() => {}} />
        <KaCheckBox size="lg" value="1" onClick={() => {}} />
        <KaCheckBox checked size="lg" value="1" onClick={() => {}} />
        <KaCheckBox disabled size="lg" value="1" onClick={() => {}} />
        <KaCheckBox disabled checked size="lg" value="1" onClick={() => {}} />
      </Row>
    </>
  )
}

export default CheckBoxes
