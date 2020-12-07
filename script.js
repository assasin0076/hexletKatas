import _ from "lodash";


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

console.log(  emails.filter((mail) => freeEmailDomains.includes(mail.split('@')[1]))
.reduce((mailsObj, curMail, index) => {
  mailsObj[curMail.split('@')[1]] += 1;
  return mailsObj
}, {
  'gmail.com': 0,
  'yandex.ru': 0,
  'hotmail.com': 0
        }))