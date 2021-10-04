import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    const obj = {};
    const array = domains.map((el) => el.split('.').reverse(''));

    array.map((item) => {
        let key = "";
        item.map((element) => {
            key = `${key}.${element}`;
            !obj[key] ? (obj[key] = 1) : (obj[key] += 1);
        });
    });

    return obj;
}
