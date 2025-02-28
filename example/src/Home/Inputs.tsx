import { useState } from 'react'
import { KaTextInput, KaButton, KaIcon } from '@kaiachain/kaia-design-system'

import { View } from './components/View'

const Inputs = () => {
  const [value, setValue] = useState<string>('')

  return (
    <>
      <KaTextInput
        inputProps={{
          placeholder: 'placeholder',
          value: value,
          onChangeText: setValue,
        }}
      />
      <KaTextInput
        inputProps={{
          type: 'password',
          placeholder: 'placeholder',
          value: value,
          onChangeText: setValue,
          style: { color: 'red' },
        }}
        rightUnit="$"
      />
      <KaTextInput inputProps={{ value: "I'm read only" }} readOnly />
      <KaTextInput
        inputProps={{
          type: 'number',
          placeholder: 'placeholder',
          value: value,
          onChangeText: setValue,
        }}
        leftUnit="$"
      />
      <KaTextInput
        inputProps={{
          placeholder: 'placeholder',
          value: value,
          onChangeText: setValue,
        }}
        leftComponent={
          <View style={{ width: 24, paddingLeft: 4 }}>
            <KaIcon.Search fill="dark" />
          </View>
        }
        leftUnit="$"
        rightUnit="SGD"
      />
      <KaTextInput
        inputProps={{
          value,
          onChangeText: setValue,
          placeholder: 'placeholder',
        }}
        rightComponent={<KaButton size="md">Confirm</KaButton>}
        leftUnit="$"
      />
      <KaTextInput
        inputProps={{
          value,
          onChangeText: setValue,
          placeholder: 'search here and see the sentence is very long',
        }}
        leftComponent={
          <View style={{ width: 24, paddingLeft: 4 }}>
            <KaIcon.Search fill="dark" />
          </View>
        }
        containerStyle={{ width: 300 }}
        rightComponent={<KaButton size="md">Confirm</KaButton>}
      />
      <KaTextInput
        inputProps={{
          value,
          onChangeText: setValue,
          placeholder: 'search here and see the sentence is very long',
        }}
        leftComponent={
          <View style={{ width: 24, paddingLeft: 4 }}>
            <KaIcon.Search fill="dark" />
          </View>
        }
        leftUnit="$"
        rightUnit="Unit"
        rightComponent={<KaButton size="md">Confirm</KaButton>}
        isError={true}
      />
      <KaTextInput
        inputProps={{
          value,
          onChangeText: setValue,
          placeholder: 'search here and see the sentence is very long',
        }}
        leftUnit="$"
        rightUnit="Unit"
        disabled={true}
      />
    </>
  )
}

export default Inputs
