const test = require('tape');

const { MerchantType, getMerchant } = require('../dist/card-merchant-finder');

test('Visa numbers', t => {
  t.plan(1);

  t.equal(getMerchant("4XXXXXXXXX"), MerchantType.VISA);
});

test('American Express numbers', t => {
  t.plan(2);
  
  t.equal(getMerchant("34XXXXXXXX"), MerchantType.AMERICAN_EXPRESS);
  t.equal(getMerchant("37XXXXXXXX"), MerchantType.AMERICAN_EXPRESS);
});

test('Mastercard numbers', t => {
  t.plan(28);
  
  t.equal(getMerchant("2221XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2222XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2223XXXXXX"), MerchantType.MASTERCARD);

  t.equal(getMerchant("2224XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2225XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2226XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2227XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2228XXXXXX"), MerchantType.MASTERCARD);

  t.equal(getMerchant("2229XXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("223XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("224XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("225XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("226XXXXXXX"), MerchantType.MASTERCARD);

  t.equal(getMerchant("227XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("228XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("229XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("23XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("24XXXXXXXX"), MerchantType.MASTERCARD);

  t.equal(getMerchant("25XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("26XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("270XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("271XXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("2720XXXXXX"), MerchantType.MASTERCARD);

  t.equal(getMerchant("51XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("52XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("53XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("54XXXXXXXX"), MerchantType.MASTERCARD);
  t.equal(getMerchant("55XXXXXXXX"), MerchantType.MASTERCARD);
});

test('Discover numbers', t => {
  t.plan(37);
  
  t.equal(getMerchant("300XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("301XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("302XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("303XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("304XXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("305XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("3095XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("3528XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("353XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("354XXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("355XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("356XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("357XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("358XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("36XXXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("38XXXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("39XXXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6011XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("622XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("624XXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("625XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("626XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6282XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6283XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6284XXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("6285XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6286XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6287XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("6288XXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("644XXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("645XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("646XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("647XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("648XXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("649XXXXXXX"), MerchantType.DISCOVER);

  t.equal(getMerchant("65XXXXXXXX"), MerchantType.DISCOVER);
  t.equal(getMerchant("81XXXXXXXX"), MerchantType.DISCOVER);
});

