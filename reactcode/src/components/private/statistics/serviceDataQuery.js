import { gql } from "apollo-boost";

const getAllServiceHealth = gql`
  query($token: String) {
    getAllServiceHealth(token: $token) {
      service {
        id
        name
        command
        image
        ports {
          ip
          privatePort
          publicPort
          type
        }
        created
      }
      state
      status
      stats {
        read
        cpu {
          onlineCpus
          totalUsage
          systemCpuUsage
          perCpuUsage
        }
        memory {
          usage
          maxUsage
          limit
        }
        io {
          read_major
          read_minor
          read_value
          write_major
          write_minor
          write_value
        }
        network {
          rx_bytes
          rx_packets
          rx_errors
          rx_dropped
          tx_bytes
          tx_packets
          tx_errors
          tx_dropped
        }
      }
      logs {
        lines {
          type
          content
        }
      }
      datetime
      error {
        code
        type
        message
        time
      }
    }
  }
`;

const getServiceHealth = gql`
  query($token: String, $containerid: String) {
    getServiceHealth(token: $token, containerid: $containerid) {
      service {
        id
        name
        command
        image
        ports {
          ip
          privatePort
          publicPort
          type
        }
        created
      }
      state
      status
      stats {
        read
        cpu {
          onlineCpus
          totalUsage
          systemCpuUsage
          perCpuUsage
        }
        memory {
          usage
          maxUsage
          limit
        }
        io {
          read_major
          read_minor
          read_value
          write_major
          write_minor
          write_value
        }
        network {
          rx_bytes
          rx_packets
          rx_errors
          rx_dropped
          tx_bytes
          tx_packets
          tx_errors
          tx_dropped
        }
      }
      logs {
        lines {
          type
          content
        }
      }
      datetime
      error {
        code
        type
        message
        time
      }
    }
  }
`;

export { getAllServiceHealth, getServiceHealth };
