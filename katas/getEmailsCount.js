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

// console.log(  emails.filter((mail) => freeEmailDomains.includes(mail.split('@')[1]))
// .reduce((mailsObj, curMail, index) => {
//   mailsObj[curMail.split('@')[1]] += 1;
//   return mailsObj
// }, {
//   'gmail.com': 0,
//   'yandex.ru': 0,
//   'hotmail.com': 0
//         }));

// ^ Мое первое, костыльное решение ^

// const getFreeDomainsCount = (emails) => emails
//   .map((email) => {
//     const [, domain] = email.split('@');
//     return domain;
// })
// .filter((domain) => freeEmailDomains.includes(domain))
// .reduce((acc, domain) => {
//   const count = _.get(acc, domain, 0) + 1;
//   return {...acc, [domain]: count};
// }, {})
// console.log(getFreeDomainsCount(emails));

// ^ кнтрл V решения учителя ^

// console.log(emails.map((mail) => {
//   const [, domain] = mail.split('@');
//   return domain;
// })
// .filter((mail) => freeEmailDomains.includes(mail))
// .reduce((acc, domain) => {
//   const count = _.get(acc, domain, 0) + 1;
//   console.log(_.get(acc, domain, 0));
//   return { ...acc, [domain]: count };
// }, {}));

// ^ Тест решения написанного по решению учителя в cnsl.log ^

function getEmailsCount(emails) {
  return emails.map((mail) => {
    const [, domain] = mail.split('@');
    return domain;
  })
  .filter((mail) => freeEmailDomains.includes(mail))
  .reduce((acc, domain) => {
    const count = _.get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {})
}


export default getEmailsCount;
// ^ Разобрался, и сделал по решению учителя свое. ^