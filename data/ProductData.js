import {ImageData} from '../data/ImageData';

export const productTypeData = {
    ALL: "all",
    FOOD: "food",
    LIFE: "life",
    DRINK: "drink",
    HOMEAPPLIANCES: "homeAppliances",
    BEAUTY: "beauty",
    HEALTHYFOOD: "healthyFood",
}

Object.freeze(productTypeData)

export let productData = [
    {
        id: 0,
        todaysProduct: true,
        recentProduct: false,
        othersWatch: false,
        name: '닭가슴살 10팩',
        ImagePath: ImageData['TodayItem1'],
        type: productTypeData.ALL,
        serialNumber : 'SDF3123',
        price: 29701,
        manufacturingCompany: '매일 상회',
        sellerId: 8,
        discountRatio: 0.33,
        watcherCount: 44835,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "닭가슴살 샐러드, 신선함과 토핑 다양성이 인상적",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "훈제 닭가슴살 파스타, 향긋한 로제 소스가 일품",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "그릴에 구운 닭가슴살, 단순하면서도 고소한 맛",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "닭가슴살 덮밥, 양념의 균형 잡힌 맛에 만족",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "로스트 닭가슴살 샐러드, 식감과 풍부한 토핑이 좋아요.",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 1,
        todaysProduct: true,
        recentProduct: false,
        othersWatch: false,
        name: '햇 감귤 4.5kg',
        ImagePath: ImageData['TodayItem2'],
        type: productTypeData.ALL,
        serialNumber : 'FGB1123',
        price: 24750,
        manufacturingCompany: '매일 상회',
        sellerId: 8,
        discountRatio: 0.6,
        watcherCount: 151380,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정새론",
                content: "신선한 귤, 달콤한 맛과 쫄깃한 식감이 일품",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-01 10:13')
            },
            {
                id: 1,
                name: "임마리",
                content: "귤 주스, 상큼한 맛으로 활력 충전!",
                rating: 2,
                buyCount: 1,
                date: new Date('2023-11-22 16:13')
            },
            {
                id: 2,
                name: "김누리",
                content: "귤과 치즈 간식, 단짠의 조합이 환상적",
                rating: 1,
                buyCount: 1,
                date: new Date('2023-11-15 18:23')
            },
            {
                id: 3,
                name: "문마리",
                content: "귤 샐러드, 건강과 맛을 동시에 챙겨요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-11 19:22')
            },
            {
                id: 4,
                name: "추혁",
                content: "귤 향 기운 가득한 홈베이킹, 고소하고 달달함",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-12 06:23')
            },
        ]
    },
    {
        id: 2,
        todaysProduct: true,
        recentProduct: false,
        othersWatch: false,
        name: '가습기 초특가 기획전',
        ImagePath: ImageData['TodayItem3'],
        type: productTypeData.ALL,
        serialNumber : 'DFG3213',
        price: 79444,
        manufacturingCompany: 'LG 가전',
        sellerId: 8,
        discountRatio: 0.46,
        watcherCount: 27106,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "황보미르",
                content: "가습기 성능 탁월, 쾌적한 실내 환경 조성에 기여",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:11')
            },
            {
                id: 1,
                name: "임다운",
                content: "소음 없이 작동하는 가습기, 조용한 수면을 도모함",
                rating: 1,
                buyCount: 1,
                date: new Date('2023-11-15 13:17')
            },
            {
                id: 2,
                name: "신샘",
                content: "디자인이 세련되고 소형이지만 물량 충분, 만족스러움",
                rating: 1,
                buyCount: 1,
                date: new Date('2023-11-19 09:23')
            },
            {
                id: 3,
                name: "류주영",
                content: "스마트 기능 탑재된 가습기, 휴대폰 앱으로 간편 조절 가능",
                rating: 2,
                buyCount: 1,
                date: new Date('2023-11-02 11:11')
            },
            {
                id: 4,
                name: "심원진",
                content: "대용량 가습기, 긴 사용 시간 동안 실내 쾌적함 유지",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-03 06:23')
            },
        ]
    },
    {
        id: 3,
        todaysProduct: false,
        recentProduct: true,
        othersWatch: false,
        name: '서천 도시락김 32봉',
        ImagePath: ImageData['RecentItem1'],
        type: productTypeData.ALL,
        serialNumber : 'AWD2312',
        price: 11739,
        manufacturingCompany: '매일 상회',
        sellerId: 8,
        discountRatio: 0.08,
        watcherCount: 273,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "백훈",
                content: "김구이, 바삭한 식감과 소금 간이 일품이에요",
                rating: 1,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "하무영",
                content: "김치찌개에 들어간 김, 감칠맛을 더해 맛있어",
                rating: 1,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "설현",
                content: "김치 전골, 김의 풍부한 맛이 전골에 깊은 풍미",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "남궁건",
                content: "김구이 간장 소스, 담백하면서도 깊은 맛 갖춤",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "이재인",
                content: "김치볶음밥, 김의 감칠맛과 볶음밥의 풍성한 조화",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 4,
        todaysProduct: false,
        recentProduct: true,
        othersWatch: false,
        name: '블렉해드 압출 세트',
        ImagePath: ImageData['RecentItem2'],
        type: productTypeData.ALL,
        serialNumber : 'FGH123',
        price: 54130,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.54,
        watcherCount: 318576,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 5,
        todaysProduct: false,
        recentProduct: true,
        othersWatch: true,
        name: '저소음 가습기',
        ImagePath: ImageData['RecentItem3'],
        type: productTypeData.ALL,
        serialNumber : 'SDF678',
        price: 49729,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.26,
        watcherCount: 34,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
        ]
    },
    {
        id: 6,
        todaysProduct: false,
        recentProduct: true,
        othersWatch: true,
        name: '와콤 팬심 10개입',
        ImagePath: ImageData['RecentItem4'],
        type: productTypeData.ALL,
        serialNumber : 'GYH567',
        price: 17894,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.05,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 7,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: true,
        name: '데인티 차렵이불',
        ImagePath: ImageData['LifeItem1'],
        type: productTypeData.LIFE,
        serialNumber : 'DFG123',
        price: 142380,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.79,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 8,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: true,
        name: '엔틱 무드등 조명',
        ImagePath: ImageData['LifeItem2'],
        type: productTypeData.LIFE,
        serialNumber : 'HJK768',
        price: 50571,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.65,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 9,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: true,
        name: '진드기프리 이불',
        ImagePath: ImageData['LifeItem3'],
        type: productTypeData.LIFE,
        serialNumber : 'VBN454',
        price: 48983,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.05,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 10,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '무드등 스탠드',
        ImagePath: ImageData['LifeItem4'],
        type: productTypeData.LIFE,
        serialNumber : 'JKL456',
        price: 32840,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.12,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 11,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '갤럭시 버즈',
        ImagePath: ImageData['HomeAppliancesItem1'],
        type: productTypeData.HOMEAPPLIANCES,
        serialNumber : 'ASD345',
        price: 275454,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.05,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 12,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '아이리버 이어폰',
        ImagePath: ImageData['HomeAppliancesItem2'],
        type: productTypeData.HOMEAPPLIANCES,
        serialNumber : 'HJK567',
        price: 29701,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.33,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 13,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: 'ipTIME 공유기',
        ImagePath: ImageData['HomeAppliancesItem3'],
        type: productTypeData.HOMEAPPLIANCES,
        serialNumber : 'ASD456',
        price: 77794,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.32,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 14,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '갤럭시 Z폴드 자급제',
        ImagePath: ImageData['HomeAppliancesItem4'],
        type: productTypeData.HOMEAPPLIANCES,
        serialNumber : 'HJK678',
        price: 2086881,
        manufacturingCompany: '내일 상회',
        sellerId: 8,
        discountRatio: 0.07,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 15,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '허브차 30티백',
        ImagePath: ImageData['HealthyFoodItem1'],
        type: productTypeData.HEALTHYFOOD,
        serialNumber : 'AWD234',
        price: 43000,
        manufacturingCompany: '어제 상회',
        sellerId: 8,
        discountRatio: 0.7,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 16,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '다이어트 유산균',
        ImagePath: ImageData['HealthyFoodItem2'],
        type: productTypeData.HEALTHYFOOD,
        serialNumber : 'HJM567',
        price: 77968,
        manufacturingCompany: '어제 상회',
        sellerId: 8,
        discountRatio: 0.36,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 17,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '키즈 유산균',
        ImagePath: ImageData['HealthyFoodItem3'],
        type: productTypeData.HEALTHYFOOD,
        serialNumber : 'ASD678',
        price: 31964,
        manufacturingCompany: '어제 상회',
        sellerId: 8,
        discountRatio: 0.36,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 18,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: 'ABC정',
        ImagePath: ImageData['HealthyFoodItem4'],
        type: productTypeData.HEALTHYFOOD,
        serialNumber : 'ASD789',
        price: 31964,
        manufacturingCompany: '어제 상회',
        sellerId: 8,
        discountRatio: 0.36,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 19,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '다시팩 조미료',
        ImagePath: ImageData['FoodItem1'],
        type: productTypeData.FOOD,
        serialNumber : 'ASC789',
        price: 7866,
        manufacturingCompany: '어제 상회',
        sellerId: 8,
        discountRatio: 0.25,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 20,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '조생 감귤 4.5kg',
        ImagePath: ImageData['FoodItem2'],
        type: productTypeData.FOOD,
        serialNumber : 'UKS567',
        price: 17555,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.25,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 21,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '선물 박스과자',
        ImagePath: ImageData['FoodItem3'],
        type: productTypeData.FOOD,
        serialNumber : 'GHM567',
        price: 10113,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.25,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 22,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '불맛 직화재육볶음',
        ImagePath: ImageData['FoodItem4'],
        type: productTypeData.FOOD,
        serialNumber : 'ASC789',
        price: 31886,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.47,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            }
        ]
    },
    {
        id: 23,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '매일두유 24팩',
        ImagePath: ImageData['DrinkItem1'],
        type: productTypeData.DRINK,
        serialNumber : 'BNM678',
        price: 30727,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.55,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 24,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '아임배도라지즙',
        ImagePath: ImageData['DrinkItem2'],
        type: productTypeData.DRINK,
        serialNumber : 'ASD567',
        price: 49821,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.44,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 25,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '바나나 우유',
        ImagePath: ImageData['DrinkItem3'],
        type: productTypeData.DRINK,
        serialNumber : 'JKJ674',
        price: 28113,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.37,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 26,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '스파클 생수 2L',
        ImagePath: ImageData['DrinkItem4'],
        type: productTypeData.DRINK,
        serialNumber : 'XCV566',
        price: 19833,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.4,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 27,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '바디 향수 200ml',
        ImagePath: ImageData['BeautyItem1'],
        type: productTypeData.BEAUTY,
        serialNumber : 'QWA567',
        price: 55000,
        manufacturingCompany: '모레 상회',
        sellerId: 8,
        discountRatio: 0.64,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 28,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '크린세럼 50ml 1.0',
        ImagePath: ImageData['BeautyItem2'],
        type: productTypeData.BEAUTY,
        serialNumber : 'VBN546',
        price: 179310,
        manufacturingCompany: '오늘 상회',
        sellerId: 8,
        discountRatio: 0.42,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 29,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '꿀사과 팩',
        ImagePath: ImageData['BeautyItem3'],
        type: productTypeData.BEAUTY,
        serialNumber : 'ASC678',
        price: 10000,
        manufacturingCompany: '참 상회',
        sellerId: 8,
        discountRatio: 0.4,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
            {
                id: 4,
                name: "임다운",
                content: "생각보다 좋아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-28 06:23')
            },
        ]
    },
    {
        id: 30,
        todaysProduct: false,
        recentProduct: false,
        othersWatch: false,
        name: '오드퍼퓸 45ml',
        ImagePath: ImageData['BeautyItem4'],
        type: productTypeData.BEAUTY,
        serialNumber : 'VBN567',
        price: 43780,
        manufacturingCompany: '매일 상회',
        sellerId: 8,
        discountRatio: 0.4,
        watcherCount: 14,
        deliveryFee: 0,
        deliveryMinDate: 2,
        deliveryMaxDate: 3,
        review: [
            {
                id: 0,
                name: "정현정",
                content: "시용성이 너무 좋아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-09 10:22')
            },
            {
                id: 1,
                name: "표문옥",
                content: "재구매 하고 싶지 않아요",
                rating: 5,
                buyCount: 1,
                date: new Date('2023-11-13 13:13')
            },
            {
                id: 2,
                name: "탁효경",
                content: "생각보다 좋지 않은 것 같아요",
                rating: 3,
                buyCount: 1,
                date: new Date('2023-11-15 6:23')
            },
            {
                id: 3,
                name: "홍진경",
                content: "마음에 들어요",
                rating: 4,
                buyCount: 1,
                date: new Date('2023-11-23 11:11')
            },
        ]
    }
];