import { KaText } from '@kaiachain/kaia-design-system'
import { View } from './components/View'

const Texts = () => {
  return (
    <>
      <View>
        <KaText fontType="body/lg_400">Text</KaText>
        <KaText fontType="body/lg_400" center>
          Center
        </KaText>
      </View>
    </>
  )
}

export default Texts
