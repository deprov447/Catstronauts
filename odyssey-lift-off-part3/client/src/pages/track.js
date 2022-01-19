import { gql, useQuery } from "@apollo/client";
import { QueryResult, Layout } from "../components";
import TrackDetail from "../components/track-detail";

export const TRACK_QUERY = gql`
  query getTrack($trackID: ID!) {
    track(id: $trackID) {
      id
      title
      author {
        id
        name
        photo
      }
      thumbnail
      length
      modulesCount
      numberOfViews
      modules {
        id
        title
        length
      }
      description
    }
  }
`;

const Track = ({ id }) => {
  const { loading, error, data } = useQuery(TRACK_QUERY, {
    variables: {
      trackID: id,
    },
  });
  console.log(id);
  return (
    <Layout>
      <QueryResult loading={loading} error={error} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;
