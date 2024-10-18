import { KaLogo } from '@kaiachain/kaia-design-system'
import { Row } from './components/Row'

const Logos = () => {
  return (
    <>
      <Row>
        <KaLogo.KaiaBrandmarkWhite
          style={{ width: 20, height: 20 }}
          stroke="blue"
        />
        <KaLogo.KaiaBrandmarkNeonlime style={{ width: 20, height: 20 }} />
        <KaLogo.KaiaBrandmarkBlack style={{ width: 20, height: 20 }} />
        <KaLogo.KaiaWordmarkWhite
          style={{ width: 50, height: 20 }}
          stroke="blue"
        />

        <KaLogo.KaiaWordmarkNeonlime style={{ width: 50, height: 20 }} />
        <KaLogo.KaiaWordmarkBlack style={{ width: 50, height: 20 }} />
      </Row>
      <Row>
        <KaLogo.LightSymbolKaiaCritters style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaSquare style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaPortal style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaScan style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaDoc style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaGovernanceForum
          style={{ width: 60, height: 60 }}
        />
        <KaLogo.LightSymbolKaiaDevHub style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaWallet style={{ width: 60, height: 60 }} />
        <KaLogo.LightSymbolKaiaDevForum style={{ width: 60, height: 60 }} />
      </Row>
      <Row>
        <KaLogo.DarkSymbolKaiaCritters style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaSquare style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaPortal style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaScan style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaDoc style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaGovernanceForum
          style={{ width: 60, height: 60 }}
        />

        <KaLogo.DarkSymbolKaiaDevHub style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaWallet style={{ width: 60, height: 60 }} />
        <KaLogo.DarkSymbolKaiaDevForum style={{ width: 60, height: 60 }} />
      </Row>
    </>
  )
}
export default Logos
