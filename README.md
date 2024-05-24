# Toss Clone
토스 모작 프로젝트

## 프로젝트 소개
토스를 모작하여 개발한 모바일 어플리케이션입니다.



Figma를 사용하여 개발에 필요한 요소들 프로토타이핑 후 React Native를 활용하여 개발 진행을 진행했습니다.

## 개발 기간
23. 09 ~ 23. 12

## 인원
1인 개발

## 개발 환경
* Figma
* React Native (JavaScript)

## 기능 설명


<details>
	<summary>Figma Component를 사용하여 프로토타이핑 진행</summary>
    
   <div align="center">
    <img src="https://github.com/minkimgyu/minkimgyu/assets/48249824/9c2ef52f-2725-4bb5-ba3e-fe00c97cba3d" width="30%" height="30%"/>
    <img src="https://github.com/minkimgyu/minkimgyu/assets/48249824/5a53342c-583d-4af3-a7a3-117a0010bd61" width="30%" height="30%"/>
    <div>개발에 앞서 Figma를 통해서 프로토타이핑 해보면서 필요한 컴포넌트와 기능들을 정리했습니다.</div>
  </div>
   
</details>

<details>
	<summary>React Navigation, React Native Paper 적용</summary>
    	<div align="center">
	    <img src="https://github.com/minkimgyu/MobileUI-UX1/assets/48249824/71954e28-7301-4935-9d85-042c85792c76" width="30%" height="30%"/>
	    <img src="https://github.com/minkimgyu/MobileUI-UX1/assets/48249824/0ed9a21b-fc7f-4b7d-9f32-5060f08ec049" width="30%" height="30%"/>
	    <div>React Navigation, React Native Paper을 사용하여 다양한 Component를 적용해보았습니다.</div>
  	</div>
   
</details>

<details>
	<summary>State 관리를 위해 Recoil 적용</summary>

``` javascript

import { atom } from "recoil";
import {accountData} from '../data/AccountData';
import {myData} from '../data/MyData';
import {pointData} from '../data/PointData';
import {consumeData} from '../data/ConsumeData';
import {productData, productTypeData} from '../data/ProductData';

export const selectedAccountIdState = atom({
	key: "selectedAccountId",
  	default: 0
});

```

``` javascript
import { useRecoilState, useSetRecoilState, useResetRecoilState, useRecoilValue } from 'recoil';
import { myState, productState, selectedItemIdState, selectedItemCountState } from '../recoil/state';

function CheckInfoBeforeBuyScreen(props) {
    const [expanded, setExpanded] = React.useState(true);

    const storedMyState = useRecoilValue(myState)

    const storedProductState = useRecoilValue(productState)
    const storedSelectedItemIdState = useRecoilValue(selectedItemIdState)

    const nowSelectedItem = storedProductState[storedSelectedItemIdState];
    const storedSelectedItemCountState = useRecoilValue(selectedItemCountState)
}
```


<div align="center">전역 상태 관리 라이브러리인 Recoil을 적용하여 State 관리를 쉽게 할 수 있도록 개발했습니다.</div>
   
</details>



<details>
	<summary>애니메이션 적용을 위해 Moti 사용</summary>

``` javascript

import { MotiView } from 'moti'

const ButtonFadeIn = () => (
	<MotiView
	  from={{ opacity: 0, scale: 0, rotate: "-80deg"}}
	  animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
	  transition={{ type: 'timing', duration: 1000 }}
	  >
	   <Icon
		source="check-circle"
		color="#3182F7"
		size={84}
	    />
	</MotiView>
)
```

<div align="center">
	<img src="https://github.com/minkimgyu/MobileUI-UX1/assets/48249824/9ff6e7eb-7f67-428a-97d7-769b3b08451e" width="30%" height="30%"/>
	<div>Moti를 사용하여 필요한 애니메이션을 간단하게 적용해볼 수 있었습니다.</div>
</div>

</details>
