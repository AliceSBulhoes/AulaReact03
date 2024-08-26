import React from 'react'
import Dados from '../components/Dados'
import { Section, SectionContent, AlunoTitle, AlunoText, BoldText} from '../components/styled'

const Aluno = () => {

    const {nome, email, idade} = Dados

  return (
    <>
        <Section>
            <SectionContent>
                <AlunoTitle>Página Aluno</AlunoTitle>
                    <AlunoText>
                        <BoldText>Nome do Aluno:</BoldText> {nome} 
                    </AlunoText>
                <AlunoText>
                    <BoldText>Email do Aluno:</BoldText> {email} 
                </AlunoText>
                <AlunoText>
                    <BoldText>Idade do Aluno:</BoldText> {idade} 
                </AlunoText>
            </SectionContent>
        </Section>
    </>
  )
}

export default Aluno