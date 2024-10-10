import { KaIcon, KaText } from '@kaiachain/kaia-design-system'
import { Row } from './components/Row'

const Icons = () => {
  return (
    <>
      <KaText fontType="title/lg_700">Icons</KaText>

      <KaIcon.SearchNormal style={{ width: 20, height: 30 }} stroke="blue" />
      <KaIcon.Chevron_bottom style={{ width: 30, height: 20 }} stroke="blue" />
      <Row>
        <KaIcon.KaiaBrandmark_white
          style={{ width: 20, height: 20 }}
          stroke="blue"
        />
        <KaIcon.KaiaBrandmark_neonlime style={{ width: 20, height: 20 }} />
        <KaIcon.KaiaBrandmark_black style={{ width: 20, height: 20 }} />
        <KaIcon.KaiaWordmark_white
          style={{ width: 50, height: 20 }}
          stroke="blue"
        />

        <KaIcon.KaiaWordmark_neonlime style={{ width: 50, height: 20 }} />
        <KaIcon.KaiaWordmark_black style={{ width: 50, height: 20 }} />
      </Row>
      <Row>
        <KaIcon.Dark_Symbol_KaiaCritters style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaCritters style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaSquare style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaSquare style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaPortal style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaPortal style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaScan style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaScan style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaDoc style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaDoc style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaGovernanceForum
          style={{ width: 60, height: 60 }}
        />
        <KaIcon.Light_Symbol_KaiaGovernanceForum
          style={{ width: 60, height: 60 }}
        />
        <KaIcon.Dark_Symbol_KaiaDevHub style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaDevHub style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaWallet style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaWallet style={{ width: 60, height: 60 }} />
        <KaIcon.Dark_Symbol_KaiaDevForum style={{ width: 60, height: 60 }} />
        <KaIcon.Light_Symbol_KaiaDevForum style={{ width: 60, height: 60 }} />
      </Row>
    </>
  )
}
export default Icons
