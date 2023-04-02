const axios = require('axios');
const cheerio = require('cheerio');
const moment = require('moment');

const url = 'https://www.stopstalk.com/contests';

axios.get(url).then((response) => {
  const $ = cheerio.load(response.data);
  const rows = $('tbody').find('tr');

  rows.each((i, row) => {
    const cols = $(row).find('td');
    const name = cols.eq(0).text().trim();
    const title = cols.eq(1).find('img').attr('title');
    const startTime = moment(cols.eq(2).text().trim(), 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD hh:mm A');
    const duration = cols.eq(3).text().trim();
    const contestLink = cols.eq(4).find('a').attr('href');
    const calendarLink = cols.eq(5).find('a').attr('href');
    
    if(name){
    // Print the extracted information
      console.log(name);
      console.log(title);
      console.log(startTime);
      console.log(duration);
      console.log(contestLink);
      console.log(calendarLink);
      console.log();
    }
  });
}).catch((error) => {
  console.log(error);
});
