import React from 'react'
import profile1 from '../../../../assets/Profile/김재혁.jpg'
import profile2 from '../../../../assets/Profile/박동규.jpg'
import profile3 from '../../../../assets/Profile/박준용.jpg'
import profile4 from '../../../../assets/Profile/빈정수.jpg'
import profile5 from '../../../../assets/Profile/이석준.png'
import profile6 from '../../../../assets/Profile/이순용.png'
import profile7 from '../../../../assets/Profile/이윤노.jpg'
// import profile6 from '../../../../assets/Profile/김재혁.jpg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ProfileImage,
  ServicesH2,
  ServicesP,
} from './styles'
const Teams = () => {
  return (
    <ServicesContainer id='team'>
      <ServicesH1>Our Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ProfileImage imgUrl={profile1} />
          <ServicesH2>김재혁</ServicesH2>
          <ServicesP>소프트웨어학과 2018126022</ServicesP>
          <ServicesP>Spectral Clustering</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile2} />
          <ServicesH2>박동규</ServicesH2>
          <ServicesP>소프트웨어학과 2018126034</ServicesP>
          <ServicesP>DB Scan</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile3} />
          <ServicesH2>박준용</ServicesH2>
          <ServicesP>소프트웨어학과 2017125028</ServicesP>
          <ServicesP>Frontend</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile4} />
          <ServicesH2>빈정수</ServicesH2>
          <ServicesP>소프트웨어학과 2018124091</ServicesP>
          <ServicesP>Spectral Clustering</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile5} />
          <ServicesH2>이석준</ServicesH2>
          <ServicesP>소프트웨어학과 2018125042</ServicesP>
          <ServicesP>K-Means</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile6} />
          <ServicesH2>이순용</ServicesH2>
          <ServicesP>소프트웨어학과 2017125054</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ProfileImage imgUrl={profile7} />
          <ServicesH2>이윤노</ServicesH2>
          <ServicesP>소프트웨어학과 2018125048</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Teams
