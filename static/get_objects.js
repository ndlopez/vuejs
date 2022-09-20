let apiKey = 'BxfX2Ho5Logh0lWk0AqY1MtZBE2SJVNGPLKfT4Ze'
let url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-09-15&end_date=2022-09-15&api_key=' + apiKey;

let vm = new Vue({
  el: '#app',
  data: {
    asteroids: [],
    showSummary: true,
  },
  computed: {
    numAsteroids() {
      return this.asteroids.length;
    },
    closestObject() {
      let neosHavingData = this.asteroids.filter(neo => neo.close_approach_data.length > 0)
      let simpleNeos = neosHavingData.map(neo => {
        return { name: neo.name, miles: neo.close_approach_data[0].miss_distance.miles }
      });
      let sortedNeos = simpleNeos.sort((a, b) => a.miles - b.miles)
      return sortedNeos[0].name
    }
  },
  methods: {
    fetchAstroids() {
      axios.get(url)
        .then((res) => {
          vm.asteroids = res.data.near_earth_objects['2022-09-15']
        })
    },
    getCloseApproachDate(a) {
      if (a.close_approach_data.length > 0) {
        return a.close_approach_data[0].close_approach_date_full
      } else {
        return 'NA'
      }
    },
    remove(index) {
      this.asteroids.splice(index, 1)
    },
    isMissingData(asteroid) {
      return asteroid.close_approach_data.length == 0
    }
  },

  created() {
    this.fetchAstroids()
  },
});
