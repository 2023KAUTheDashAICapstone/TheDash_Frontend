import Icon1 from '../../../../assets/design/mobile_pay.svg'
import Icon2 from '../../../../assets/design/mobile_app.svg'
import Icon3 from '../../../../assets/design/predict.svg'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './styles'
const Algorithms = () => {
  return (
    <ServicesContainer id='algorithm'>
      <ServicesH1>Our Algorithms</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>DBSCAN</ServicesH2>
          <ServicesP>
            밀도 기반 클러스터링 알고리즘이며, 데이터 포인트들의 밀집 정도에 따라 클러스터를 형성
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>계층 군집화</ServicesH2>
          <ServicesP>
            트리형태로 이루어진 군집. 트리의 몇번째 depth에서 멈추느냐에 따라 군집의 갯수와 크기가
            결정된다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Spectral clustering</ServicesH2>
          <ServicesP>
            라플라시안 행렬 L을 계산하고, L의 가장 작은 k개의 고유값에 대해 고유 벡터를 계산합니다.
            k개의 고유 벡터로 이뤄진 행렬을 고려하여 그래프 노드의 특징을 정의합니다. 정의된 특징을
            기반으로 K-means 등을 통해 군집화 합니다.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>K-MEANS</ServicesH2>
          <ServicesP>
            주어진 데이터를 k개의 클러스터로 묶는 알고리즘으로, 각 클러스터와 거리 차이의 분산을
            최소화하는 방식으로 동작한다. 이 알고리즘은 자율 학습의 일종으로, 레이블이 달려 있지
            않은 입력 데이터에 레이블을 달아주는 역할을 수행한다.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Algorithms
