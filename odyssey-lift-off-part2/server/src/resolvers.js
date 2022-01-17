const resolvers = {
  /* 
    Signature of this object is ditto copy of schema, just functions whenever schema defined a return object
  */

  Query: {
    /* 
        Returns a list of tracks for homepage
    */

    tracksForHome: (_, __, context, ____) => {
      return context.dataSources.trackAPI.getTracksForHome();
    },
  },

  Track: {
    /*
        Apollo server calls resolvers for whatever a query returns, ie on querying tracksForHome, return object would be [Tracks], so for each track, server calls the resolvers of Tracks (remember there ain't no need to define resolvers for scalarTypes)
    */

    author: (parent, __, context, ____) => {
      return context.dataSources.trackAPI.getAuthor(parent.authorId);
    },
  },
};

module.exports = resolvers;
