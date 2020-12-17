const moment = require('moment');
const fs = require('fs');

const corejs = () => {
    return {
        arrayToCsv(req, res) {
            let start = moment(req.params.from).startOf('d').format(), end = moment(req.params.to).endOf('d').format();
            let getData = [{ email: 'suriya@gmail.com', date: '2020-12-12', asset_code: 'INR', amount: '100' }];
            let i = 0, finalData = [];
            while (i < getData.length) {
                finalData.push([getData[i].user.email, moment(getData[i].date).format('YYYY-MM-DD'), getData[i].asset.asset_code, getData[i].amount])
                i++;
            }
            // let finalData = [["ondkd1@gmail.com", "INR", 26101.11], ["sameer.choubey98@gmail.com", "INR", 33518.82], ["ondkd1@gmail.com", "INR", 7618.93], ["ondkd1@gmail.com", "INR", 7618.93], ["goshailesh@gmail.com", "INR", 70890], ["manjunathp848@gmail.com", "INR", 773823.91], ["shahadil@gmail.com", "INR", 331257.12], ["varun.juneja@gmail.com", "INR", 669771.73]]
            let header = ['email', 'date', 'asset', 'amount'].join('\t')
            await fs.writeFileSync('./withddrawHistory.csv', header + '\n' + finalData.join('\n'), 'utf-8');
            // res.attachment('./history.csv')
            return res.send(finalData);
        }
    }
}

module.exports = corejs();