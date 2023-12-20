import {IconData} from '../data/IconData';
import {accountData} from '../data/AccountData';

const consumeLabelSetting = {
    buttonDisplay: 'flex',
    buttonTxt: "내역",
    pageNameToNavigate: 'ConsumeScreen'
}

// 12월 데이터도 좀 넣어서 이번 달 쓴 금액을 맞춰주기
// 이거는 아래 값 합산해서 구해보자
const consumeLabelData = {
    title: '이번 달에 쓴 금액',
    asset: 100,
    iconPath: IconData["Consume"]
}

let consumeData = [
    {
        id: 0,
        sendAccountId: 0,
        receivedAccountId: 12,

        time: new Date('2023-11-09 22:11'),
        consumePrice: 3000,
        leftAsset:351104,
    },
    {
        id: 1,
        sendAccountId: 0,
        receivedAccountId: 4,

        time: new Date('2023-11-23 11:13'),
        consumePrice: 2000,
        leftAsset:349104,
    },
    {
        id: 2,
        sendAccountId: 0,
        receivedAccountId: 8,

        time: new Date('2023-11-23 10:15'),
        consumePrice: 10000,
        leftAsset:339104,
    },
    {
        id: 3,
        sendAccountId: 0,
        receivedAccountId: 7,

        time: new Date('2023-12-01 12:15'),
        consumePrice: 50000,
        leftAsset:289104,
    },
    {
        id: 4,
        sendAccountId: 0,
        receivedAccountId: 11,

        time: new Date('2023-12-03 10:15'),
        consumePrice: 10000,
        leftAsset:279104,
    },



    {
        id: 5,
        sendAccountId: 2,
        receivedAccountId: 5,

        time: new Date('2023-11-30 22:15'),
        consumePrice: 30000,
        leftAsset: 138193,
    },
    {
        id: 6,
        sendAccountId: 2,
        receivedAccountId: 8,

        time: new Date('2023-11-30 22:15'),
        consumePrice: 50000,
        leftAsset: 88193,
    },
    {
        id: 7,
        sendAccountId: 2,
        receivedAccountId: 5,

        time: new Date('2023-12-01 11:15'),
        consumePrice: 15000,
        leftAsset: 73193,
    },
    {
        id: 8,
        sendAccountId: 2,
        receivedAccountId: 7,

        time: new Date('2023-12-03 23:15'),
        consumePrice: 10000,
        leftAsset: 63193,
    },


    {
        id: 9,
        sendAccountId: 1,
        receivedAccountId: 10,
        time: new Date('2023-11-30 22:15'),
        consumePrice: 30000,
        leftAsset:12757,
    }
    ];

export {consumeLabelSetting, consumeLabelData, consumeData}; // 외부로 노출