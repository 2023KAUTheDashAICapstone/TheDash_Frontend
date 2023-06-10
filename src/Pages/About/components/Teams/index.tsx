import React from 'react'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './styles'
const Teams = () => {
  return (
    <ServicesContainer id='team'>
      <ServicesH1>Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>김재혁</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>박동규</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>박준용</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>빈정수</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>이석준</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>이순용</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon />
          <ServicesH2>이윤노</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Teams
