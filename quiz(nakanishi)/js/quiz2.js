$.ajax({
    type: "GET",
    url: "https://gist.githubusercontent.com/tomoyuki-tanaka/9ca030986150706648b220a2c1a6e64f/raw/17acbba1e39a51d0fd4c29d34c5f7aef6e9f3741/",
    data: { item_detail: 'name' },
    dataType: "json",
    success: function(data, dataType) {
        var items = data;
        console.log("item名　" + items.item_detail.name)
    }
});