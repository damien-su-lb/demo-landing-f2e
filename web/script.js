var articles = new Vue({
    el: '#app',
    data: {
      total: 'fetching api...',
      articles: []
    },
    mounted: function () {
      let url = 'https://dmn-directus-demo.leadproject.net/items/articles?meta=*&fields[]=*,contents.type,contents.content'

      axios
        .get(url)
        .then(response => {
          let res = response.data;
          this.total    = res.meta.total_count
          this.articles = res.data;

          console.log(this.articles)
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  })