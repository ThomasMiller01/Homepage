import { gql } from "apollo-boost";

const createContainer = gql`
  mutation($token: String, $containerOptions: ContainerInputType) {
    createContainer(token: $token, containerOptions: $containerOptions) {
      message
      errors {
        message
        traceback
      }
    }
  }
`;

const startContainer = gql`
  mutation($token: String, $containerid: String) {
    startContainer(token: $token, containerid: $containerid) {
      message
      errors {
        message
        traceback
      }
    }
  }
`;

const restartContainer = gql`
  mutation($token: String, $containerid: String) {
    restartContainer(token: $token, containerid: $containerid) {
      message
      errors {
        message
        traceback
      }
    }
  }
`;

const stopContainer = gql`
  mutation($token: String, $containerid: String) {
    stopContainer(token: $token, containerid: $containerid) {
      message
      errors {
        message
        traceback
      }
    }
  }
`;

const removeContainer = gql`
  mutation($token: String, $containerid: String) {
    removeContainer(token: $token, containerid: $containerid) {
      message
      errors {
        message
        traceback
      }
    }
  }
`;

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

export {
  getAllServiceHealth,
  getServiceHealth,
  createContainer,
  startContainer,
  restartContainer,
  stopContainer,
  removeContainer,
};
