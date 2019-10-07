import React from 'react'
import ContentBox from '../../../components/content-box'
import PrimaryText from '../../../components/text/primary'
import Bold from '../../../components/text/bold'
import SubtitleBar from '../../../components/subtitle-bar'
import EmptySpace from '../../../components/empty-space'
import Subtitle from '../../../components/text/subtitle'


class Three extends React.Component {
  constructor(props){
    super(props)
    this.props.setHeader()
  }
  render() {
    return (
      <ContentBox>
        <PrimaryText>
            <SubtitleBar type={2} title='SITUAÇÃO-PROBLEMA' subtitle='Apresentação sobre a vida da Dona Veridiana'/>
            <p>As crianças da família decidiram fazer uma apresentação sobre a vida da Dona Veridiana. A ideia central é que elas se organizem em grupos e que cada um apresente, da maneira que achar mais conveniente, diferentes aspectos da sua vida, em torno de uma "linha do tempo", de sua chegada ao Brasil até a idade atual.</p>
            <p>Imagine então que você, car@ professor@, usando o pilar “Decomposição” do Pensamento Computacional, já planejou a elaboração de quatro atos da apresentação: <Bold>A infância de Dona Veridiana ; As casas onde Dona Veridiana morou ; Os caminhos da Dona Veridiana; e Organizando o armário de roupas da Dona Veridiana</Bold>. O que são algumas possibilidades, entre tantas que você poderia propor.</p>
            <EmptySpace/>
            <Subtitle>ATIVIDADES AVALIATIVAS</Subtitle>
            <p>Prosseguindo em nossa situação-problema, você é convidad@ a associar, a cada uma das propostas, o pilar do Pensamento Computacional que lhe pareça mais apropriado.</p>
        </PrimaryText>
      </ContentBox>
    )
  }
}

export default Three