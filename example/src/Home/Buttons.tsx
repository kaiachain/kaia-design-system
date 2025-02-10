import styled from '@emotion/styled'

import {
  KaButton,
  KaSimpleButton,
  useKaTheme,
} from '@kaiachain/kaia-design-system'
import { Row } from './components/Row'
import { View } from './components/View'

const StyledBtnBox = styled(View)`
  width: 200px;
  padding: 10px;
`

const Buttons = () => {
  const { getTheme } = useKaTheme()
  return (
    <>
      <Row>
        <KaSimpleButton size="sm" type="green" onClick={() => alert('?')}>
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          size="md"
          type="green"
          onClick={() => alert('?')}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="sm"
          type="gray"
          onClick={() => alert('?')}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="md"
          type="w/b"
          onClick={() => alert('?')}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          rightIcon="check"
          size="lg"
          type="w/b"
          onClick={() => alert('?')}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="lg"
          type="w/b"
          disabled
          onClick={() => alert('?')}
        >
          Button
        </KaSimpleButton>
      </Row>
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
        <KaButton
          rightIcon={<>^o^</>}
          size="sm"
          onClick={() => alert('?')}
          style={{ backgroundColor: 'red', paddingRight: 50 }}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '3') }}>
          <KaButton
            size="sm"
            onClick={() => alert('?')}
            fill
            leftIcon="check"
            rightIcon="right"
          >
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '3') }}>
          <KaButton size="sm" onClick={() => alert('?')} fill rightIcon="right">
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '6') }}>
          <KaButton leftIcon="right" size="sm" onClick={() => alert('?')}>
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '9') }}>
          <KaButton rightIcon="upright" size="sm" onClick={() => alert('?')}>
            Button
          </KaButton>
        </StyledBtnBox>
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
          type="primary"
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
        <KaButton
          disabled
          rightIcon="right"
          type="tertiary-tint"
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
