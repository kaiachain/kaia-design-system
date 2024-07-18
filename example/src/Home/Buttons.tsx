import { KaButton } from '@kaiachain/kaia-design-system'

import { Row } from './components/Row'

const Buttons = () => {
  return (
    <>
      <Row>
        <KaButton size="sm" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton leftIcon="check" size="sm" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton rightIcon="right" size="sm" onClick={() => alert('?')}>
          Button
        </KaButton>
      </Row>

      <Row>
        <KaButton type="secondary" size="md" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton
          leftIcon="check"
          type="secondary"
          size="md"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
        <KaButton
          rightIcon="right"
          type="secondary"
          size="md"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="tertiary" size="lg" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton
          leftIcon="check"
          type="tertiary"
          size="lg"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
        <KaButton
          rightIcon="right"
          type="tertiary"
          size="lg"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton
          disabled
          type="secondary"
          size="xl"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
        <KaButton
          disabled
          leftIcon="check"
          type="secondary"
          size="xl"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
        <KaButton
          disabled
          rightIcon="right"
          type="secondary"
          size="xl"
          onClick={() => alert('?')}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="red" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="red" leftIcon="check" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="red" rightIcon="right" onClick={() => alert('?')}>
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="redLine" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="redLine" leftIcon="check" onClick={() => alert('?')}>
          Button
        </KaButton>
        <KaButton type="redLine" rightIcon="right" onClick={() => alert('?')}>
          Button
        </KaButton>
      </Row>
    </>
  )
}

export default Buttons
