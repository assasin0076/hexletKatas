import emCount from '../katas/getEmailsCount';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
];

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

test('getEmailsCount',() => {
  expect(emCount(emails)).toEqual({'gmail.com': 3, 'yandex.ru': 2, 'hotmail.com': 2});
})