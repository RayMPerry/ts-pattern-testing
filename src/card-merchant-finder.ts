import { match, P } from 'ts-pattern';

type Values<T> = T[keyof T];

const MerchantType = {
  VISA: 'VS',
  MASTERCARD: 'MS',
  AMERICAN_EXPRESS: 'AX',
  DISCOVER: 'DS'
} as const;

const getMerchant = (cardNumber: string): Values<typeof MerchantType> | null =>
  match(cardNumber.substring(0, 6).split(''))
    .with(['4', P._, P._, P._, P._, P._], () => MerchantType.VISA)
    .with(['3', P.union('4', '7'), P._, P._, P._, P._], () => MerchantType.AMERICAN_EXPRESS)
    .with(['2', '7', P.union('0', '1', '2'), P._, P._, P._], () => MerchantType.MASTERCARD)
    .with(['2', P.union('3', '4', '5', '6'), P._, P._, P._, P._], () => MerchantType.MASTERCARD)
    .with(['5', P.union('1', '2', '3', '4', '5'), P._, P._, P._, P._], () => MerchantType.MASTERCARD)
    .with(['2', '2', '2', P.when(digit => digit !== '0'), P._, P._], () => MerchantType.MASTERCARD)
    .with(['2', '2', P.when(digit => !['0', '1'].includes(digit)), P._, P._, P._], () => MerchantType.MASTERCARD)
    .with(['3', '5', '2', '8', P._, P._], () => MerchantType.DISCOVER)
    .with(['3', P.union('6', '8', '9'), P._, P._, P._, P._], () => MerchantType.DISCOVER)
    .with(['6', '2', P.union('2', '4', '5', '6'), P._, P._, P._], () => MerchantType.DISCOVER)
    .with(P.union(['3', '0', '9', '5', P._, P._], ['8', '1', P._, P._, P._, P._]), () => MerchantType.DISCOVER)
    .with(P.union(['6', '0', '1', '1', P._, P._], ['6', '5', P._, P._, P._, P._]), () => MerchantType.DISCOVER)
    .with(['3', '0', P.union('0', '1', '2', '3', '4', '5'), P._, P._, P._], () => MerchantType.DISCOVER)
    .with(['6', '2', '8', P.when(digit => !['0', '1', '9'].includes(digit)), P._, P._], () => MerchantType.DISCOVER)
    .with(['3', '5', P.when(digit => !['0', '1', '2', '9'].includes(digit)), P._, P._, P._], () => MerchantType.DISCOVER)
    .with(['6', '4', P.when(digit => !['0', '1', '2', '3'].includes(digit)), P._, P._, P._], () => MerchantType.DISCOVER)
    .otherwise(() => null);


module.exports = {
  MerchantType,
  getMerchant
};
