import { useState } from 'react'
import { KaTextarea } from '@kaiachain/kaia-design-system'

import { View } from './components/View'

const Textareas = () => {
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')
  const [text4, setText4] = useState('')
  const [text5, setText5] = useState('')
  const [text6, setText6] = useState('')
  return (
    <>
      <KaTextarea
        textareaProps={{
          text: text1,
          onChangeText: setText1,
          placeholder: 'disabled placeholder',
        }}
        disabled={true}
      />
      <KaTextarea
        title="error title here"
        textareaProps={{
          text: text2,
          onChangeText: setText2,
          placeholder: 'error placeholder, rows 10',
          rows: 10,
        }}
        message="error message here"
        isError={true}
      />
      <View style={{ alignItems: 'center' }}>
        <View style={{ width: '300px' }}>
          <KaTextarea
            title="Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title Long title "
            textareaProps={{
              text: text3,
              onChangeText: setText3,
              placeholder: 'long title, long message, fixed height and width',
            }}
            message="Long message Long message Long message Long message Long message Long message "
            maxNumOfChar="2000000"
          />
        </View>
      </View>
      <KaTextarea
        title="Here is the title"
        textareaProps={{
          text: text4,
          onChangeText: setText4,
          placeholder: 'only Title',
        }}
      />
      <KaTextarea
        textareaProps={{
          text: text5,
          onChangeText: setText5,
          placeholder: 'only showNumOfChar',
        }}
        maxNumOfChar="100"
      />
      <KaTextarea
        title="Here is the title"
        textareaProps={{
          text: text6,
          onChangeText: setText6,
          placeholder: 'All',
        }}
        maxNumOfChar="1000000"
        message="Here is the message"
      />
    </>
  )
}

export default Textareas
