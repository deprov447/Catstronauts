const { RESTDataSource } = require("apollo-datasource-rest");

/*
    RESTDataSource is just an alt to FetchAPI's implementations, with some added benefits like caching, 
    
    More: https://odyssey.apollographql.com/lift-off-part2/apollo-restdatasource
*/

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  getTracksForHome() {
    return this.get(`https://odyssey-lift-off-rest-api.herokuapp.com/tracks`);
  }

  getAuthor(authorID) {
    return this.get(
      `https://odyssey-lift-off-rest-api.herokuapp.com/author/${authorID}`
    );
  }
}

module.exports = TrackAPI;
