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

export const itemTypeState = atom({
	key: "itemTypeState",
  	default: productTypeData.ALL
});

export const sendAccountIdState = atom({
	key: "sendAccountId",
  	default: 0
});

export const moneyToSendState = atom({
	key: "moneyToSendState",
  	default: 0
});

export const myState = atom({
	key: "myState",
  	default: myData
});

export const pointState = atom({
	key: "pointState",
  	default: pointData
});

export const pointDiscountAmountState = atom({
	key: "pointDiscountAmountState",
  	default: 0
});

export const consumeState = atom({
	key: "consumeState",
  	default: consumeData
});

export const selectedItemIdState = atom({
	key: "selectedItemIdState",
  	default: 0
});

export const selectedItemCountState = atom({
	key: "selectedItemCountState",
  	default: 0
});

export const productState = atom({
	key: "productState", // unique ID (with respect to other atoms/selectors)
  	default: productData, // 자료형 따라 초기값을 다르게 설정해주자
});

export const accountState = atom({
	key: "accountState", // unique ID (with respect to other atoms/selectors)
  	default: accountData, // 자료형 따라 초기값을 다르게 설정해주자
});