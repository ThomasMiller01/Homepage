const exampleEvents = [
  {
    event_type: {
      id: 1,
      name: "login",
      description: "user requests jwt token",
      service: "authorization",
    },
    received: {
      id: 3,
      action: "RECEIVED",
      data: '{"fields": [{"key": "username", "value": "Thomas"}]}',
      timestamp: "2020-10-18T14:17:03.82+00:00",
    },
    sent: {
      id: 4,
      action: "SENT",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMzMzA2MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.9Ej-HMgYxe73fWNhVyJSgp9fH-SWjZnqO3NmVsneEvA"}]}',
      timestamp: "2020-10-18T14:17:05.03+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 5,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMzMzA2MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.9Ej-HMgYxe73fWNhVyJSgp9fH-SWjZnqO3NmVsneEvA"}]}',
      timestamp: "2020-10-18T14:17:07.252+00:00",
    },
    sent: {
      id: 6,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-18T14:17:07.402+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 9,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMzMzA2MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.9Ej-HMgYxe73fWNhVyJSgp9fH-SWjZnqO3NmVsneEvA"}]}',
      timestamp: "2020-10-18T14:18:34.941+00:00",
    },
    sent: {
      id: 10,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-18T14:18:35.025+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 17,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:53:34.299+00:00",
    },
    sent: {
      id: 18,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-19T13:53:34.344+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 21,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:57:31.456+00:00",
    },
    sent: {
      id: 22,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-19T13:57:31.533+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 25,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:58:14.171+00:00",
    },
    sent: {
      id: 26,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-19T13:58:14.227+00:00",
    },
  },
  {
    event_type: {
      id: 2,
      name: "tokenValidation",
      description: "service requires to validate token",
      service: "authorization",
    },
    received: {
      id: 29,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:58:15.806+00:00",
    },
    sent: {
      id: 30,
      action: "SENT",
      data: '{"fields": [{"key": "valid", "value": "True"}]}',
      timestamp: "2020-10-19T13:58:15.841+00:00",
    },
  },
  {
    event_type: {
      id: 5,
      name: "getPublicProjects",
      description:
        "get public project from database, to display on the website",
      service: "homepage",
    },
    received: {
      id: 1,
      action: "RECEIVED",
      data: '{"fields": null}',
      timestamp: "2020-10-18T14:16:34.46+00:00",
    },
    sent: {
      id: 2,
      action: "SENT",
      data: '{"fields": null}',
      timestamp: "2020-10-18T14:16:37.684+00:00",
    },
  },
  {
    event_type: {
      id: 5,
      name: "getPublicProjects",
      description:
        "get public project from database, to display on the website",
      service: "homepage",
    },
    received: {
      id: 13,
      action: "RECEIVED",
      data: '{"fields": null}',
      timestamp: "2020-10-18T17:37:19.313+00:00",
    },
    sent: {
      id: 14,
      action: "SENT",
      data: '{"fields": null}',
      timestamp: "2020-10-18T17:37:19.783+00:00",
    },
  },
  {
    event_type: {
      id: 5,
      name: "getPublicProjects",
      description:
        "get public project from database, to display on the website",
      service: "homepage",
    },
    received: {
      id: 15,
      action: "RECEIVED",
      data: '{"fields": null}',
      timestamp: "2020-10-19T13:53:31.389+00:00",
    },
    sent: {
      id: 16,
      action: "SENT",
      data: '{"fields": null}',
      timestamp: "2020-10-19T13:53:33.986+00:00",
    },
  },
  {
    event_type: {
      id: 6,
      name: "getAllProjects",
      description:
        "get all projects, to display on the private part of the website",
      service: "homepage",
    },
    received: {
      id: 11,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMzMzA2MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.9Ej-HMgYxe73fWNhVyJSgp9fH-SWjZnqO3NmVsneEvA"}]}',
      timestamp: "2020-10-18T14:18:35.085+00:00",
    },
    sent: {
      id: 12,
      action: "SENT",
      data: '{"fields": null}',
      timestamp: "2020-10-18T14:18:36.319+00:00",
    },
  },
  {
    event_type: {
      id: 6,
      name: "getAllProjects",
      description:
        "get all projects, to display on the private part of the website",
      service: "homepage",
    },
    received: {
      id: 27,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:58:14.284+00:00",
    },
    sent: {
      id: 28,
      action: "SENT",
      data: '{"fields": null}',
      timestamp: "2020-10-19T13:58:14.579+00:00",
    },
  },
  {
    event_type: {
      id: 13,
      name: "getAllServiceHealth",
      description: "get the current status of all services",
      service: "healthcheck",
    },
    received: {
      id: 7,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMzMzA2MjQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.9Ej-HMgYxe73fWNhVyJSgp9fH-SWjZnqO3NmVsneEvA"}]}',
      timestamp: "2020-10-18T14:17:07.913+00:00",
    },
    sent: {
      id: 8,
      action: "SENT",
      data: "{}",
      timestamp: "2020-10-18T14:17:17.269+00:00",
    },
  },
  {
    event_type: {
      id: 13,
      name: "getAllServiceHealth",
      description: "get the current status of all services",
      service: "healthcheck",
    },
    received: {
      id: 19,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:53:34.405+00:00",
    },
    sent: {
      id: 20,
      action: "SENT",
      data: "{}",
      timestamp: "2020-10-19T13:53:43.144+00:00",
    },
  },
  {
    event_type: {
      id: 13,
      name: "getAllServiceHealth",
      description: "get the current status of all services",
      service: "healthcheck",
    },
    received: {
      id: 23,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:57:31.586+00:00",
    },
    sent: {
      id: 24,
      action: "SENT",
      data: "{}",
      timestamp: "2020-10-19T13:57:40.551+00:00",
    },
  },
  {
    event_type: {
      id: 13,
      name: "getAllServiceHealth",
      description: "get the current status of all services",
      service: "healthcheck",
    },
    received: {
      id: 31,
      action: "RECEIVED",
      data:
        '{"fields": [{"key": "token", "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiVGhvbWFzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2MDMyMzQ0NjEsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQxOTcwIiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDE5NzAifQ.m_V03tcTtKQyuBLwPB7reX_X9jxRhC59ojRhKZQj7UQ"}]}',
      timestamp: "2020-10-19T13:58:15.896+00:00",
    },
    sent: {
      id: 32,
      action: "SENT",
      data: "{}",
      timestamp: "2020-10-19T13:58:24.871+00:00",
    },
  },
];

export { exampleEvents };
