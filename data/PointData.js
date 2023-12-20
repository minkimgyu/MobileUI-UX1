import {IconData} from '../data/IconData';

const pointSetting = {
    buttonDisplay: 'none',
    pageNameToNavigate: 'PointScreen'
}
  
let pointData = {
    name: '포인트',
    asset: 400,
    iconPath: IconData['Point']
}

export {pointSetting, pointData}; // 외부로 노출