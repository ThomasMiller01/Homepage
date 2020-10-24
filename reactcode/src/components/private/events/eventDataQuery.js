import { gql } from "apollo-boost";

const getAllEvents = gql`
  query {
    getAllEvent {
      event_type {
        id
        name
        description
        service
      }
      received {
        id
        action
        data
        timestamp
      }
      sent {
        id
        action
        data
        timestamp
      }
    }
  }
`;

export { getAllEvents };
