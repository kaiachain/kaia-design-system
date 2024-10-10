import { KaTextInput } from '@kaiachain/kaia-design-system'

const InputBox = () => {
  return (
    <>
      <KaTextInput
        inputProps={{
          placeholder: 'placeholder',
        }}
        leftIcon="search"
        leftUnit="$"
        rightUnit="SGD"
      />
      <KaTextInput
        inputProps={{
          placeholder: 'placeholder',
        }}
        leftIcon="close"
        leftUnit="$"
      />
      <KaTextInput
        inputProps={{
          placeholder: 'search here and see the sentence is very long',
        }}
        leftIcon="search"
        width="300px"
        rightIcon={'close'}
      />
      <KaTextInput
        inputProps={{
          placeholder: 'search here and see the sentence is very long',
        }}
        leftIcon="search"
        leftUnit="$"
        rightUnit="Unit"
        rightIcon={'close'}
        isError={true}
      />
      <KaTextInput
        inputProps={{
          placeholder: 'search here and see the sentence is very long',
        }}
        leftIcon="search"
        leftUnit="$"
        rightUnit="Unit"
        rightIcon={'close'}
        disabled={true}
      />
    </>
  )
}

export default InputBox
