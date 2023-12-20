import {IconData} from '../data/IconData';

// 이건 추가될 일이 따로 없으므로 리코일 적용하지 않고 그대로 불러와서 사용하자

export const bankData = [
    {
        name: '국민은행',
        accountNameInPossession: ['KB나라사랑우대통장', 'KB우대저축통장', 'KB가계당좌통장'],
        accountStartNumber: 990,
        iconPath: IconData['Kookmin']
    },
    {
        name: '우리은행',
        accountNameInPossession: ['우리닷컴통장', '우리아이행복통장', '우리SUPER주거래통장'],
        accountStartNumber: 810,
        iconPath: IconData['Woori']
    },
    {
        name: '신한은행',
        accountNameInPossession: ['쏠편한입출금통장', '신한한달저금통장', '신한S드림통장'],
        accountStartNumber: 663,
        iconPath: IconData['Shinhan']
    },
];