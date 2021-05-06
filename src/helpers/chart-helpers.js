const color = [
  'rgb(90,168,151)',
  'rgb(248,164,136)',
  'rgb(69,82,108)',
  'rgb(248,245,241)',
  'rgb(255,103,1)',
  'rgb(255,194,136)',
  'rgb(2,71,94)',
]

export const groupByCategory = (rows) => {
  const resObj = rows.reduce((res, row) => {
    if(res[row.category.id]){
      res[row.category.id].data += row.sum;
    } else {
      res[row.category.id] = {
        label: row.category.name,
        data: row.sum
      }
    };
    return res;
  }, {});
  return Object.values(resObj).reduce((res, { label, data }, i) => {
    res.labels.push(label);
    res.data.push(data);
    res.backgroundColor.push(color[i%color.length])
    return res;
  }, { labels: [], data: [], backgroundColor: [] })
}

export const groupByBankAccount = (rows) => {
  const resObj = rows.reduce((res, row) => {
    if(res[row.bankAccount.id]){
      res[row.bankAccount.id].data += row.sum;
    } else {
      res[row.bankAccount.id] = {
        label: row.bankAccount.name,
        data: row.sum
      }
    };
    return res;
  }, {});
  return Object.values(resObj).reduce((res, { label, data }, i) => {
    res.labels.push(label);
    res.data.push(data);
    res.backgroundColor.push(color[i%color.length])
    return res;
  }, { labels: [], data: [], backgroundColor: [] })
}