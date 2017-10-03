const baseUrl = 'https://gist.githubusercontent.com/tomoyuki-tanaka/9ca030986150706648b220a2c1a6e64f/raw/17acbba1e39a51d0fd4c29d34c5f7aef6e9f3741/'
const itemUrl = baseUrl + 'quiz2_1.json'

// fetchのみ
fetch(itemUrl)
  .then(res => res.json())
  .then(json => fetch(baseUrl + json.item.id))
  .then(res => res.json())
  .then(json => console.log(json.item_detail.name))


// async await
function getItemId(){
  return fetch(itemUrl)
    .then(res => res.json())
    .then(json => json.item.id)
}

async function getItemName(){
  const itemId = await getItemId()
  return fetch(baseUrl + itemId)
    .then(res => res.json())
    .then(json => json.item_detail.name)
}

getItemName().then(console.log)

