import { useCallback } from 'react'
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

  const onClick = useCallback(() => {
    alert('button clicked')
  }, [])

  return (
    <>
      <Row>
        <KaSimpleButton size="sm" type="green" onClick={onClick}>
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          size="md"
          type="green"
          onClick={onClick}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="sm"
          type="gray"
          onClick={onClick}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="md"
          type="w/b"
          onClick={onClick}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          rightIcon="check"
          size="lg"
          type="w/b"
          onClick={onClick}
        >
          Button
        </KaSimpleButton>
        <KaSimpleButton
          leftIcon="check"
          rightIcon="right"
          size="lg"
          type="w/b"
          disabled
          onClick={onClick}
        >
          Button
        </KaSimpleButton>
      </Row>
      <Row>
        <KaButton size="sm" onClick={onClick}>
          Button
        </KaButton>
        <KaButton leftIcon="check" size="sm" onClick={onClick}>
          Button
        </KaButton>
        <KaButton rightIcon="right" size="sm" onClick={onClick}>
          Button
        </KaButton>
        <KaButton
          rightIcon={<>^o^</>}
          size="sm"
          onClick={onClick}
          style={{ backgroundColor: 'red', paddingRight: 50 }}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '3') }}>
          <KaButton
            size="sm"
            onClick={onClick}
            fill
            leftIcon="check"
            rightIcon="right"
          >
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '3') }}>
          <KaButton size="sm" onClick={onClick} fill rightIcon="right">
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '6') }}>
          <KaButton leftIcon="right" size="sm" onClick={onClick}>
            Button
          </KaButton>
        </StyledBtnBox>
        <StyledBtnBox style={{ backgroundColor: getTheme('gray', '9') }}>
          <KaButton rightIcon="upright" size="sm" onClick={onClick}>
            Button
          </KaButton>
        </StyledBtnBox>
      </Row>

      <Row>
        <KaButton type="secondary" size="md" onClick={onClick}>
          Button
        </KaButton>
        <KaButton leftIcon="check" type="secondary" size="md" onClick={onClick}>
          Button
        </KaButton>
        <KaButton
          rightIcon="right"
          type="secondary"
          size="md"
          onClick={onClick}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="tertiary" size="lg" onClick={onClick}>
          Button
        </KaButton>
        <KaButton leftIcon="check" type="tertiary" size="lg" onClick={onClick}>
          Button
        </KaButton>
        <KaButton rightIcon="right" type="tertiary" size="lg" onClick={onClick}>
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton disabled type="secondary" size="xl" onClick={onClick}>
          Button
        </KaButton>
        <KaButton
          disabled
          leftIcon="check"
          type="secondary"
          size="xl"
          onClick={onClick}
        >
          Button
        </KaButton>
        <KaButton
          disabled
          rightIcon="right"
          type="primary"
          size="xl"
          onClick={onClick}
        >
          Button
        </KaButton>
        <KaButton
          disabled
          rightIcon="right"
          type="secondary"
          size="xl"
          onClick={onClick}
        >
          Button
        </KaButton>
        <KaButton
          disabled
          rightIcon="right"
          type="tertiary-tint"
          size="xl"
          onClick={onClick}
        >
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="red" onClick={onClick}>
          Button
        </KaButton>
        <KaButton type="red" leftIcon="check" onClick={onClick}>
          Button
        </KaButton>
        <KaButton type="red" rightIcon="right" onClick={onClick}>
          Button
        </KaButton>
      </Row>
      <Row>
        <KaButton type="redLine" onClick={onClick}>
          Button
        </KaButton>
        <KaButton type="redLine" leftIcon="check" onClick={onClick}>
          Button
        </KaButton>
        <KaButton type="redLine" rightIcon="right" onClick={onClick}>
          Button
        </KaButton>
      </Row>
    </>
  )
}

export default Buttons
