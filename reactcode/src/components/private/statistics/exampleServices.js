const exampleServices = (num) => {
  let services = [
    {
      service: {
        id: "f61f8c4a71e032139bcc272eafd5342d15196ff7bdec3b1120a9b2eb16985c77",
        name: "/healthcheck",
        command: "dotnet HealthCheck.dll",
        image: "healthcheck",
        ports: [
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 5003,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 23 hours",
      stats: {
        read: "2020-05-28T17:06:26.4690635+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 133489785772,
          systemCpuUsage: 5063210110000000,
          perCpuUsage: [66958613626, 66531172146],
        },
        memory: {
          usage: 123719680,
          maxUsage: 123990016,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 24317952,
          write_major: 8,
          write_minor: 0,
          write_value: 0,
        },
        network: {
          rx_bytes: 544322,
          rx_packets: 4834,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 3598883,
          tx_packets: 6208,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDOUT",
            content: "Hosting environment: Production",
          },
          {
            type: "STDOUT",
            content: "Content root path: /app",
          },
          {
            type: "STDOUT",
            content: "Now listening on: http://[::]:80",
          },
          {
            type: "STDOUT",
            content: "Application started. Press Ctrl+C to shut down.",
          },
        ],
      },
      created: "2020-05-27T18:24:22+00:00",
      error: null,
    },
    {
      service: {
        id: "141792c9e7a08363dd15d9bb74c299ca8d9a98f11e5640b1357fc6ba426e4166",
        name: "/homepage",
        command: "dotnet Homepage.dll",
        image: "homepage",
        ports: [
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 5006,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:27.4970286+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 137668227377,
          systemCpuUsage: 5063212140000000,
          perCpuUsage: [68351818685, 69316408692],
        },
        memory: {
          usage: 98361344,
          maxUsage: 98664448,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 2682880,
          write_major: 8,
          write_minor: 0,
          write_value: 0,
        },
        network: {
          rx_bytes: 1397051,
          rx_packets: 4726,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 647659,
          tx_packets: 6106,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDOUT",
            content: "Hosting environment: Production",
          },
          {
            type: "STDOUT",
            content: "Content root path: /app",
          },
          {
            type: "STDOUT",
            content: "Now listening on: http://[::]:80",
          },
          {
            type: "STDOUT",
            content: "Application started. Press Ctrl+C to shut down.",
          },
        ],
      },
      created: "2020-05-27T16:32:00+00:00",
      error: null,
    },
    {
      service: {
        id: "9dc667d0eed98962a420af4a378175e780e75dfc03feac2c1713b88eb7f3a5fd",
        name: "/authorization",
        command: "dotnet Authorization.dll",
        image: "authorization",
        ports: [
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 5001,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:28.5205625+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 141662443067,
          systemCpuUsage: 5063214180000000,
          perCpuUsage: [70198761281, 71463681786],
        },
        memory: {
          usage: 92602368,
          maxUsage: 92893184,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 10739712,
          write_major: 8,
          write_minor: 0,
          write_value: 0,
        },
        network: {
          rx_bytes: 528221,
          rx_packets: 4898,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 665677,
          tx_packets: 6250,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDOUT",
            content: "Hosting environment: Production",
          },
          {
            type: "STDOUT",
            content: "Content root path: /app",
          },
          {
            type: "STDOUT",
            content: "Now listening on: http://[::]:80",
          },
          {
            type: "STDOUT",
            content: "Application started. Press Ctrl+C to shut down.",
          },
        ],
      },
      created: "2020-05-27T16:31:57+00:00",
      error: null,
    },
    {
      service: {
        id: "9560e190d0646ed6566ec65da86323cae4dbc3a03c7fcd075745c6c736b25a15",
        name: "/database",
        command: "dotnet Database.dll",
        image: "database",
        ports: [
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 5004,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:29.5422671+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 133686451313,
          systemCpuUsage: 5063216220000000,
          perCpuUsage: [66862957174, 66823494139],
        },
        memory: {
          usage: 94076928,
          maxUsage: 94547968,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 14458880,
          write_major: 8,
          write_minor: 0,
          write_value: 0,
        },
        network: {
          rx_bytes: 1508189,
          rx_packets: 5203,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 2555719,
          tx_packets: 6649,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDOUT",
            content: "Hosting environment: Production",
          },
          {
            type: "STDOUT",
            content: "Content root path: /app",
          },
          {
            type: "STDOUT",
            content: "Now listening on: http://[::]:80",
          },
          {
            type: "STDOUT",
            content: "Application started. Press Ctrl+C to shut down.",
          },
        ],
      },
      created: "2020-05-27T16:31:55+00:00",
      error: null,
    },
    {
      service: {
        id: "024df01417ca730be8c2ceaa7fb212cb4db5e690f37713e37ea69655709a579f",
        name: "/seq",
        command: "/run.sh",
        image: "datalust/seq:latest",
        ports: [
          {
            ip: "",
            privatePort: 5341,
            publicPort: 0,
            type: "tcp",
          },
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 9040,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:30.5653337+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 304374209278,
          systemCpuUsage: 5063218220000000,
          perCpuUsage: [153955531397, 150418677881],
        },
        memory: {
          usage: 247812096,
          maxUsage: 249454592,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 38748160,
          write_major: 8,
          write_minor: 0,
          write_value: 5132288,
        },
        network: {
          rx_bytes: 6207953,
          rx_packets: 25305,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 2866751,
          tx_packets: 19397,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDOUT",
            content: "────────────────────────────────────────",
          },
          {
            type: "STDOUT",
            content: "  Seq ♦ Machine data, for humans.",
          },
          {
            type: "STDOUT",
            content: "─────────── © 2020 Datalust Pty Ltd ────",
          },
          {
            type: "STDOUT",
            content: "",
          },
          {
            type: "STDOUT",
            content: "Running as server; press Ctrl+C to exit.",
          },
          {
            type: "STDOUT",
            content: "",
          },
          {
            type: "STDERR",
            content:
              '[16:24:56 INF] Seq "5.1.3364" running on OS "Linux 4.15.0-66-generic #75-Ubuntu SMP Tue Oct 1 05:24:09 UTC 2019"',
          },
          {
            type: "STDERR",
            content:
              '[16:25:00 INF] Seq listening on ["http://localhost/", "http://localhost:5341/"]',
          },
          {
            type: "STDERR",
            content:
              '[16:25:00 INF] Opening document store "/data/Documents/documents.lmdb"',
          },
          {
            type: "STDERR",
            content: '[16:25:00 INF] Opening event store at "/data/Extents"',
          },
          {
            type: "STDERR",
            content:
              '[16:25:00 INF] Available storage engines in order of preference are ["FLARE"]',
          },
          {
            type: "STDERR",
            content: "[16:25:00 INF] Storage subsystem available",
          },
          {
            type: "STDERR",
            content: "[16:25:02 INF] Cache warm-up is required",
          },
          {
            type: "STDERR",
            content:
              '[16:25:02 INF] Initial memory cache warm-up "completed" in 290.68420000000003 ms',
          },
          {
            type: "STDERR",
            content:
              '[16:25:02 INF] 168 segments warmed up ({"Schemata": 10, "Strings": 50})',
          },
          {
            type: "STDERR",
            content:
              "[16:26:01 INF] 2 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[16:30:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:35:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:35:02 INF] Retention processing and compaction took 26.754900000000003 ms; allocating 599973.24510000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:35:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:35:03 INF] Wrote 0 index sets in 1504 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:35:03 INF] Indexing took 1519 ms; total iteration time was 1545.9046 ms",
          },
          {
            type: "STDERR",
            content: "[16:35:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:40:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:45:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:45:01 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:45:01 INF] Retention processing and compaction took 2.7934 ms; allocating 599997.2066 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:45:01 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:45:02 INF] Wrote 0 index sets in 106 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:45:02 INF] Indexing took 107 ms; total iteration time was 109.81240000000001 ms",
          },
          {
            type: "STDERR",
            content: "[16:50:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:55:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:55:01 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:55:01 INF] Retention processing and compaction took 0.9563 ms; allocating 599999.0437 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:55:01 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:55:02 INF] Wrote 0 index sets in 84 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:55:02 INF] Indexing took 84 ms; total iteration time was 85.6864 ms",
          },
          {
            type: "STDERR",
            content: "[17:00:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:05:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:05:01 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:05:01 INF] Retention processing and compaction took 0.7648 ms; allocating 599999.2352 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:05:01 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:05:02 INF] Wrote 0 index sets in 49 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:05:02 INF] Indexing took 49 ms; total iteration time was 50.1244 ms",
          },
          {
            type: "STDERR",
            content: "[17:10:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[17:12:07 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[17:15:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:15:01 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:15:02 INF] Retention processing and compaction took 19.360500000000002 ms; allocating 599980.6395 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:15:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:15:02 INF] Wrote 0 index sets in 71 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:15:02 INF] Indexing took 71 ms; total iteration time was 90.7243 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:18:07 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[17:20:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:25:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:25:02 INF] Retention processing and compaction took 0.881 ms; allocating 599999.11900000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:25:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:25:02 INF] Wrote 0 index sets in 28 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:25:02 INF] Indexing took 28 ms; total iteration time was 29.182100000000002 ms",
          },
          {
            type: "STDERR",
            content: "[17:25:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:30:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:35:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:35:02 INF] Retention processing and compaction took 1.6175000000000002 ms; allocating 599998.38250000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:35:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:35:02 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:35:02 INF] Indexing took 20 ms; total iteration time was 22.3794 ms",
          },
          {
            type: "STDERR",
            content: "[17:35:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:40:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:45:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:45:02 INF] Retention processing and compaction took 1.8879000000000001 ms; allocating 599998.1121 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:45:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:45:03 INF] Wrote 0 index sets in 145 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:45:03 INF] Indexing took 146 ms; total iteration time was 147.9691 ms",
          },
          {
            type: "STDERR",
            content: "[17:45:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:50:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:55:01 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:55:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:55:02 INF] Retention processing and compaction took 1.0156 ms; allocating 599998.98440000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:55:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:55:03 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:55:03 INF] Indexing took 26 ms; total iteration time was 27.7343 ms",
          },
          {
            type: "STDERR",
            content: "[18:00:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:05:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:05:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:05:02 INF] Retention processing and compaction took 0.99230000000000007 ms; allocating 599999.00770000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:05:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:05:03 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:05:03 INF] Indexing took 19 ms; total iteration time was 20.0287 ms",
          },
          {
            type: "STDERR",
            content: "[18:10:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:15:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:15:02 INF] Retention processing and compaction took 1.3075 ms; allocating 599998.6925 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:15:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:15:03 INF] Wrote 0 index sets in 52 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:15:03 INF] Indexing took 52 ms; total iteration time was 53.886100000000006 ms",
          },
          {
            type: "STDERR",
            content: "[18:15:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:20:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:25:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:25:02 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:25:02 INF] Retention processing and compaction took 0.7287 ms; allocating 599999.2713 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:25:02 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:25:03 INF] Wrote 0 index sets in 45 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:25:03 INF] Indexing took 45 ms; total iteration time was 46.2334 ms",
          },
          {
            type: "STDERR",
            content: "[18:30:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:35:03 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:35:03 INF] Retention processing and compaction took 1.8891 ms; allocating 599998.1109 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:35:03 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:35:03 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:35:03 INF] Indexing took 23 ms; total iteration time was 25.067600000000002 ms",
          },
          {
            type: "STDERR",
            content: "[18:35:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:40:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:45:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:45:03 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:45:03 INF] Retention processing and compaction took 1.6353 ms; allocating 599998.3647 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:45:03 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:45:03 INF] Wrote 0 index sets in 59 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:45:03 INF] Indexing took 59 ms; total iteration time was 61.2417 ms",
          },
          {
            type: "STDERR",
            content: "[18:50:02 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[18:55:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[18:55:04 INF] Retention processing and compaction took 0.8135 ms; allocating 599999.18650000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[18:55:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[18:55:04 INF] Wrote 0 index sets in 24 ms",
          },
          {
            type: "STDERR",
            content:
              "[18:55:04 INF] Indexing took 24 ms; total iteration time was 25.075000000000003 ms",
          },
          {
            type: "STDERR",
            content: "[18:55:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:00:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:05:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:05:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:05:04 INF] Retention processing and compaction took 0.6056 ms; allocating 599999.3944 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:05:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:05:04 INF] Wrote 0 index sets in 25 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:05:04 INF] Indexing took 25 ms; total iteration time was 26.096500000000002 ms",
          },
          {
            type: "STDERR",
            content: "[19:10:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:15:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:15:04 INF] Retention processing and compaction took 1.0124 ms; allocating 599998.9876 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:15:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:15:04 INF] Wrote 0 index sets in 39 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:15:04 INF] Indexing took 39 ms; total iteration time was 40.5503 ms",
          },
          {
            type: "STDERR",
            content: "[19:15:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:20:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:25:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:25:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:25:04 INF] Retention processing and compaction took 0.9154 ms; allocating 599999.08460000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:25:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:25:04 INF] Wrote 0 index sets in 31 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:25:04 INF] Indexing took 32 ms; total iteration time was 33.0242 ms",
          },
          {
            type: "STDERR",
            content: "[19:30:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:35:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:35:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:35:04 INF] Retention processing and compaction took 1.0929 ms; allocating 599998.90710000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:35:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:35:04 INF] Wrote 0 index sets in 75 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:35:04 INF] Indexing took 76 ms; total iteration time was 77.1491 ms",
          },
          {
            type: "STDERR",
            content: "[19:40:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:45:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:45:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:45:04 INF] Retention processing and compaction took 1.0361 ms; allocating 599998.9639 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:45:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:45:04 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:45:04 INF] Indexing took 27 ms; total iteration time was 28.062800000000003 ms",
          },
          {
            type: "STDERR",
            content: "[19:50:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:55:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[19:55:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[19:55:04 INF] Retention processing and compaction took 1.9302000000000001 ms; allocating 599998.0698 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[19:55:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[19:55:04 INF] Wrote 0 index sets in 41 ms",
          },
          {
            type: "STDERR",
            content:
              "[19:55:04 INF] Indexing took 42 ms; total iteration time was 44.0165 ms",
          },
          {
            type: "STDERR",
            content: "[20:00:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:05:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:05:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:05:04 INF] Retention processing and compaction took 0.82100000000000006 ms; allocating 599999.179 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:05:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:05:04 INF] Wrote 0 index sets in 52 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:05:04 INF] Indexing took 53 ms; total iteration time was 53.906600000000005 ms",
          },
          {
            type: "STDERR",
            content: "[20:10:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:15:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:15:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:15:04 INF] Retention processing and compaction took 0.6692 ms; allocating 599999.3308 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:15:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:15:04 INF] Wrote 0 index sets in 57 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:15:04 INF] Indexing took 57 ms; total iteration time was 58.3389 ms",
          },
          {
            type: "STDERR",
            content: "[20:20:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:25:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:25:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:25:04 INF] Retention processing and compaction took 0.6643 ms; allocating 599999.3357 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:25:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:25:04 INF] Wrote 0 index sets in 49 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:25:04 INF] Indexing took 58 ms; total iteration time was 58.907700000000006 ms",
          },
          {
            type: "STDERR",
            content: "[20:30:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:35:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:35:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:35:04 INF] Retention processing and compaction took 0.7602 ms; allocating 599999.2398 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:35:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:35:04 INF] Wrote 0 index sets in 34 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:35:04 INF] Indexing took 34 ms; total iteration time was 35.1595 ms",
          },
          {
            type: "STDERR",
            content: "[20:40:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:45:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:45:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:45:04 INF] Retention processing and compaction took 0.6917 ms; allocating 599999.3083 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:45:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:45:04 INF] Wrote 0 index sets in 52 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:45:04 INF] Indexing took 52 ms; total iteration time was 53.59 ms",
          },
          {
            type: "STDERR",
            content: "[20:50:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:55:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[20:55:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[20:55:04 INF] Retention processing and compaction took 0.9594 ms; allocating 599999.04060000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[20:55:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[20:55:04 INF] Wrote 0 index sets in 37 ms",
          },
          {
            type: "STDERR",
            content:
              "[20:55:04 INF] Indexing took 37 ms; total iteration time was 38.583200000000005 ms",
          },
          {
            type: "STDERR",
            content: "[21:00:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:05:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:05:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:05:04 INF] Retention processing and compaction took 0.5839 ms; allocating 599999.4161 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:05:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:05:04 INF] Wrote 0 index sets in 43 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:05:04 INF] Indexing took 43 ms; total iteration time was 44.2384 ms",
          },
          {
            type: "STDERR",
            content: "[21:10:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:15:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:15:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:15:04 INF] Retention processing and compaction took 1.1561000000000001 ms; allocating 599998.8439 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:15:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:15:04 INF] Wrote 0 index sets in 29 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:15:04 INF] Indexing took 29 ms; total iteration time was 30.744100000000003 ms",
          },
          {
            type: "STDERR",
            content: "[21:20:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:25:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:25:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:25:04 INF] Retention processing and compaction took 0.6842 ms; allocating 599999.3158 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:25:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:25:04 INF] Wrote 0 index sets in 24 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:25:04 INF] Indexing took 25 ms; total iteration time was 25.785700000000002 ms",
          },
          {
            type: "STDERR",
            content: "[21:30:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:35:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:35:04 INF] Retention processing and compaction took 0.9191 ms; allocating 599999.08090000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:35:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:35:04 INF] Wrote 0 index sets in 25 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:35:04 INF] Indexing took 25 ms; total iteration time was 26.722 ms",
          },
          {
            type: "STDERR",
            content: "[21:35:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:40:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:45:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:45:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:45:04 INF] Retention processing and compaction took 0.916 ms; allocating 599999.084 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:45:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:45:04 INF] Wrote 0 index sets in 31 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:45:04 INF] Indexing took 32 ms; total iteration time was 32.938500000000005 ms",
          },
          {
            type: "STDERR",
            content: "[21:50:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:55:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[21:55:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[21:55:04 INF] Retention processing and compaction took 0.6694 ms; allocating 599999.3306 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[21:55:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[21:55:04 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[21:55:04 INF] Indexing took 22 ms; total iteration time was 23.6085 ms",
          },
          {
            type: "STDERR",
            content: "[22:00:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:05:03 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:05:04 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:05:04 INF] Retention processing and compaction took 4.0609 ms; allocating 599995.93910000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:05:04 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:05:04 INF] Wrote 0 index sets in 31 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:05:04 INF] Indexing took 31 ms; total iteration time was 35.8767 ms",
          },
          {
            type: "STDERR",
            content: "[22:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:15:05 INF] Retention processing and compaction took 0.81090000000000007 ms; allocating 599999.18910000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:15:05 INF] Wrote 0 index sets in 34 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:15:05 INF] Indexing took 34 ms; total iteration time was 35.4656 ms",
          },
          {
            type: "STDERR",
            content: "[22:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:25:05 INF] Retention processing and compaction took 0.4566 ms; allocating 599999.54340000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:25:05 INF] Wrote 0 index sets in 61 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:25:05 INF] Indexing took 61 ms; total iteration time was 62.179300000000005 ms",
          },
          {
            type: "STDERR",
            content: "[22:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:35:05 INF] Retention processing and compaction took 0.74130000000000007 ms; allocating 599999.2587 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:35:05 INF] Wrote 0 index sets in 68 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:35:05 INF] Indexing took 68 ms; total iteration time was 69.6072 ms",
          },
          {
            type: "STDERR",
            content: "[22:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:45:05 INF] Retention processing and compaction took 0.5684 ms; allocating 599999.4316 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:45:05 INF] Wrote 0 index sets in 43 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:45:05 INF] Indexing took 43 ms; total iteration time was 44.2822 ms",
          },
          {
            type: "STDERR",
            content: "[22:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[22:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[22:55:05 INF] Retention processing and compaction took 1.5632000000000001 ms; allocating 599998.4368 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[22:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[22:55:05 INF] Wrote 0 index sets in 39 ms",
          },
          {
            type: "STDERR",
            content:
              "[22:55:05 INF] Indexing took 39 ms; total iteration time was 41.3404 ms",
          },
          {
            type: "STDERR",
            content: "[22:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:05:05 INF] Retention processing and compaction took 1.7417 ms; allocating 599998.2583 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:05:05 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:05:05 INF] Indexing took 23 ms; total iteration time was 24.754 ms",
          },
          {
            type: "STDERR",
            content: "[23:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:15:05 INF] Retention processing and compaction took 1.0507 ms; allocating 599998.9493 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:15:05 INF] Wrote 0 index sets in 56 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:15:05 INF] Indexing took 56 ms; total iteration time was 57.6565 ms",
          },
          {
            type: "STDERR",
            content: "[23:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:25:05 INF] Retention processing and compaction took 0.8528 ms; allocating 599999.1472 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:25:05 INF] Wrote 0 index sets in 47 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:25:05 INF] Indexing took 47 ms; total iteration time was 48.846900000000005 ms",
          },
          {
            type: "STDERR",
            content: "[23:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:35:05 INF] Retention processing and compaction took 1.0570000000000002 ms; allocating 599998.94300000009 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:35:05 INF] Wrote 0 index sets in 36 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:35:05 INF] Indexing took 37 ms; total iteration time was 38.0914 ms",
          },
          {
            type: "STDERR",
            content: "[23:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:45:05 INF] Retention processing and compaction took 0.9501 ms; allocating 599999.0499 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:45:05 INF] Wrote 0 index sets in 41 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:45:05 INF] Indexing took 42 ms; total iteration time was 43.0185 ms",
          },
          {
            type: "STDERR",
            content: "[23:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[23:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[23:55:05 INF] Retention processing and compaction took 1.2744 ms; allocating 599998.7256 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[23:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[23:55:05 INF] Wrote 0 index sets in 39 ms",
          },
          {
            type: "STDERR",
            content:
              "[23:55:05 INF] Indexing took 39 ms; total iteration time was 40.5377 ms",
          },
          {
            type: "STDERR",
            content: "[00:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:05:05 INF] Retention processing and compaction took 3.7437 ms; allocating 599996.2563 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:05:05 INF] Wrote 0 index sets in 81 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:05:05 INF] Indexing took 81 ms; total iteration time was 85.1135 ms",
          },
          {
            type: "STDERR",
            content: "[00:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:15:05 INF] Retention processing and compaction took 0.91050000000000009 ms; allocating 599999.0895 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:15:05 INF] Wrote 0 index sets in 59 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:15:05 INF] Indexing took 59 ms; total iteration time was 60.2402 ms",
          },
          {
            type: "STDERR",
            content: "[00:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:25:05 INF] Retention processing and compaction took 0.9643 ms; allocating 599999.0357 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:25:05 INF] Wrote 0 index sets in 38 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:25:05 INF] Indexing took 38 ms; total iteration time was 39.2896 ms",
          },
          {
            type: "STDERR",
            content: "[00:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:35:05 INF] Retention processing and compaction took 1.9944000000000002 ms; allocating 599998.0056 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:35:05 INF] Wrote 0 index sets in 38 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:35:05 INF] Indexing took 38 ms; total iteration time was 40.574600000000004 ms",
          },
          {
            type: "STDERR",
            content: "[00:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:45:05 INF] Retention processing and compaction took 1.4243000000000001 ms; allocating 599998.5757 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:45:05 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:45:05 INF] Indexing took 19 ms; total iteration time was 20.738200000000003 ms",
          },
          {
            type: "STDERR",
            content: "[00:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[00:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[00:55:05 INF] Retention processing and compaction took 0.94700000000000006 ms; allocating 599999.05300000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[00:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[00:55:05 INF] Wrote 0 index sets in 27 ms",
          },
          {
            type: "STDERR",
            content:
              "[00:55:05 INF] Indexing took 27 ms; total iteration time was 28.893800000000002 ms",
          },
          {
            type: "STDERR",
            content: "[01:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:05:05 INF] Retention processing and compaction took 1.4200000000000002 ms; allocating 599998.58000000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:05:05 INF] Wrote 0 index sets in 49 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:05:05 INF] Indexing took 49 ms; total iteration time was 50.8215 ms",
          },
          {
            type: "STDERR",
            content: "[01:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:15:05 INF] Retention processing and compaction took 1.1929 ms; allocating 599998.8071 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:15:05 INF] Wrote 0 index sets in 38 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:15:05 INF] Indexing took 41 ms; total iteration time was 42.2605 ms",
          },
          {
            type: "STDERR",
            content: "[01:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:25:05 INF] Retention processing and compaction took 0.77770000000000006 ms; allocating 599999.2223 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:25:05 INF] Wrote 0 index sets in 68 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:25:05 INF] Indexing took 73 ms; total iteration time was 74.0776 ms",
          },
          {
            type: "STDERR",
            content: "[01:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:35:05 INF] Retention processing and compaction took 0.899 ms; allocating 599999.101 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:35:05 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:35:05 INF] Indexing took 20 ms; total iteration time was 21.1844 ms",
          },
          {
            type: "STDERR",
            content: "[01:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:45:05 INF] Retention processing and compaction took 0.98000000000000009 ms; allocating 599999.02 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:45:05 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:45:05 INF] Indexing took 26 ms; total iteration time was 27.4467 ms",
          },
          {
            type: "STDERR",
            content: "[01:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[01:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[01:55:05 INF] Retention processing and compaction took 0.90250000000000008 ms; allocating 599999.0975 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[01:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[01:55:05 INF] Wrote 0 index sets in 54 ms",
          },
          {
            type: "STDERR",
            content:
              "[01:55:05 INF] Indexing took 54 ms; total iteration time was 55.6169 ms",
          },
          {
            type: "STDERR",
            content: "[02:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:05:05 INF] Retention processing and compaction took 1.5356 ms; allocating 599998.4644 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:05:05 INF] Wrote 0 index sets in 49 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:05:05 INF] Indexing took 49 ms; total iteration time was 51.3397 ms",
          },
          {
            type: "STDERR",
            content: "[02:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:15:05 INF] Retention processing and compaction took 6.4495000000000005 ms; allocating 599993.5505 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:15:05 INF] Wrote 0 index sets in 49 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:15:05 INF] Indexing took 49 ms; total iteration time was 56.1954 ms",
          },
          {
            type: "STDERR",
            content: "[02:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:25:05 INF] Retention processing and compaction took 1.0159 ms; allocating 599998.9841 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:25:05 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:25:05 INF] Indexing took 27 ms; total iteration time was 28.078400000000002 ms",
          },
          {
            type: "STDERR",
            content: "[02:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:35:05 INF] Retention processing and compaction took 1.0389000000000002 ms; allocating 599998.96110000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:35:05 INF] Wrote 0 index sets in 45 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:35:05 INF] Indexing took 45 ms; total iteration time was 46.9348 ms",
          },
          {
            type: "STDERR",
            content: "[02:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:45:05 INF] Retention processing and compaction took 0.886 ms; allocating 599999.11400000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:45:05 INF] Wrote 0 index sets in 29 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:45:05 INF] Indexing took 38 ms; total iteration time was 39.024300000000004 ms",
          },
          {
            type: "STDERR",
            content: "[02:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[02:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[02:55:05 INF] Retention processing and compaction took 0.5846 ms; allocating 599999.4154 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[02:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[02:55:05 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[02:55:05 INF] Indexing took 22 ms; total iteration time was 23.1451 ms",
          },
          {
            type: "STDERR",
            content: "[03:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              '[03:00:06 INF] Backing up to "/data/Backups/seq_20200528.seqbac"',
          },
          {
            type: "STDERR",
            content: "[03:00:06 INF] Backup complete; 19 documents exported",
          },
          {
            type: "STDERR",
            content: "[03:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:05:05 INF] Retention processing and compaction took 0.876 ms; allocating 599999.12400000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:05:05 INF] Wrote 0 index sets in 41 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:05:05 INF] Indexing took 41 ms; total iteration time was 42.832 ms",
          },
          {
            type: "STDERR",
            content: "[03:05:05 INF] The backup for this date already exists",
          },
          {
            type: "STDERR",
            content: "[03:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:15:05 INF] Retention processing and compaction took 1.1205 ms; allocating 599998.8795 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:15:05 INF] Wrote 0 index sets in 40 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:15:05 INF] Indexing took 44 ms; total iteration time was 45.7445 ms",
          },
          {
            type: "STDERR",
            content: "[03:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:25:05 INF] Retention processing and compaction took 0.65750000000000008 ms; allocating 599999.3425 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:25:05 INF] Wrote 0 index sets in 54 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:25:05 INF] Indexing took 54 ms; total iteration time was 55.521800000000006 ms",
          },
          {
            type: "STDERR",
            content: "[03:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:35:05 INF] Retention processing and compaction took 1.4014 ms; allocating 599998.5986 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:35:05 INF] Wrote 0 index sets in 29 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:35:05 INF] Indexing took 30 ms; total iteration time was 31.467100000000002 ms",
          },
          {
            type: "STDERR",
            content: "[03:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:45:05 INF] Retention processing and compaction took 0.6594 ms; allocating 599999.3406 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:45:05 INF] Wrote 0 index sets in 61 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:45:05 INF] Indexing took 61 ms; total iteration time was 62.0882 ms",
          },
          {
            type: "STDERR",
            content: "[03:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[03:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[03:55:05 INF] Retention processing and compaction took 0.6825 ms; allocating 599999.3175 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[03:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[03:55:05 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[03:55:05 INF] Indexing took 20 ms; total iteration time was 21.4049 ms",
          },
          {
            type: "STDERR",
            content: "[04:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:05:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:05:05 INF] Retention processing and compaction took 0.8877 ms; allocating 599999.1123 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:05:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:05:05 INF] Wrote 0 index sets in 84 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:05:05 INF] Indexing took 84 ms; total iteration time was 85.3605 ms",
          },
          {
            type: "STDERR",
            content: "[04:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:15:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:15:05 INF] Retention processing and compaction took 0.5261 ms; allocating 599999.4739 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:15:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:15:05 INF] Wrote 0 index sets in 27 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:15:05 INF] Indexing took 27 ms; total iteration time was 28.1295 ms",
          },
          {
            type: "STDERR",
            content: "[04:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:25:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:25:05 INF] Retention processing and compaction took 0.61820000000000008 ms; allocating 599999.3818 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:25:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:25:06 INF] Wrote 0 index sets in 118 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:25:06 INF] Indexing took 118 ms; total iteration time was 118.973 ms",
          },
          {
            type: "STDERR",
            content: "[04:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:35:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:35:05 INF] Retention processing and compaction took 0.8184 ms; allocating 599999.1816 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:35:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:35:05 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:35:06 INF] Indexing took 26 ms; total iteration time was 27.5862 ms",
          },
          {
            type: "STDERR",
            content: "[04:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:45:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:45:05 INF] Retention processing and compaction took 0.95110000000000006 ms; allocating 599999.0489 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:45:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:45:06 INF] Wrote 0 index sets in 25 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:45:06 INF] Indexing took 26 ms; total iteration time was 27.130300000000002 ms",
          },
          {
            type: "STDERR",
            content: "[04:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[04:55:05 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[04:55:05 INF] Retention processing and compaction took 0.6026 ms; allocating 599999.3974 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[04:55:05 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[04:55:06 INF] Wrote 0 index sets in 71 ms",
          },
          {
            type: "STDERR",
            content:
              "[04:55:06 INF] Indexing took 72 ms; total iteration time was 72.6568 ms",
          },
          {
            type: "STDERR",
            content: "[05:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:05:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:05:06 INF] Retention processing and compaction took 1.1871 ms; allocating 599998.8129 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:05:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:05:06 INF] Wrote 0 index sets in 72 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:05:06 INF] Indexing took 72 ms; total iteration time was 73.4239 ms",
          },
          {
            type: "STDERR",
            content: "[05:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:15:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:15:06 INF] Retention processing and compaction took 0.597 ms; allocating 599999.403 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:15:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:15:06 INF] Wrote 0 index sets in 39 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:15:06 INF] Indexing took 40 ms; total iteration time was 40.6481 ms",
          },
          {
            type: "STDERR",
            content: "[05:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:25:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:25:06 INF] Retention processing and compaction took 0.49360000000000004 ms; allocating 599999.50640000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:25:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:25:06 INF] Wrote 0 index sets in 60 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:25:06 INF] Indexing took 60 ms; total iteration time was 60.967600000000004 ms",
          },
          {
            type: "STDERR",
            content: "[05:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:35:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:35:06 INF] Retention processing and compaction took 0.88840000000000008 ms; allocating 599999.11160000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:35:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:35:06 INF] Wrote 0 index sets in 48 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:35:06 INF] Indexing took 48 ms; total iteration time was 49.416900000000005 ms",
          },
          {
            type: "STDERR",
            content: "[05:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:45:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:45:06 INF] Retention processing and compaction took 0.7048 ms; allocating 599999.2952 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:45:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:45:06 INF] Wrote 0 index sets in 58 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:45:06 INF] Indexing took 77 ms; total iteration time was 78.4409 ms",
          },
          {
            type: "STDERR",
            content: "[05:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[05:55:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[05:55:06 INF] Retention processing and compaction took 0.6168 ms; allocating 599999.3832 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[05:55:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[05:55:06 INF] Wrote 0 index sets in 83 ms",
          },
          {
            type: "STDERR",
            content:
              "[05:55:06 INF] Indexing took 97 ms; total iteration time was 98.5425 ms",
          },
          {
            type: "STDERR",
            content: "[06:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:05:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:05:06 INF] Retention processing and compaction took 0.51450000000000007 ms; allocating 599999.48550000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:05:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:05:06 INF] Wrote 0 index sets in 25 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:05:06 INF] Indexing took 25 ms; total iteration time was 25.847900000000003 ms",
          },
          {
            type: "STDERR",
            content: "[06:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:15:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:15:06 INF] Retention processing and compaction took 0.6229 ms; allocating 599999.3771 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:15:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:15:06 INF] Wrote 0 index sets in 21 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:15:06 INF] Indexing took 22 ms; total iteration time was 22.6979 ms",
          },
          {
            type: "STDERR",
            content: "[06:20:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:25:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:25:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:25:06 INF] Retention processing and compaction took 0.9292 ms; allocating 599999.0708 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:25:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:25:06 INF] Wrote 0 index sets in 32 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:25:06 INF] Indexing took 32 ms; total iteration time was 33.2793 ms",
          },
          {
            type: "STDERR",
            content: "[06:30:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:35:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:35:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:35:06 INF] Retention processing and compaction took 0.8166 ms; allocating 599999.1834 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:35:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:35:06 INF] Wrote 0 index sets in 32 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:35:06 INF] Indexing took 32 ms; total iteration time was 33.2274 ms",
          },
          {
            type: "STDERR",
            content: "[06:40:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:45:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:45:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:45:06 INF] Retention processing and compaction took 0.59410000000000007 ms; allocating 599999.4059 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:45:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:45:06 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:45:06 INF] Indexing took 26 ms; total iteration time was 27.031100000000002 ms",
          },
          {
            type: "STDERR",
            content: "[06:50:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[06:55:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[06:55:06 INF] Retention processing and compaction took 1.0291000000000001 ms; allocating 599998.97090000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[06:55:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[06:55:06 INF] Wrote 0 index sets in 59 ms",
          },
          {
            type: "STDERR",
            content:
              "[06:55:06 INF] Indexing took 60 ms; total iteration time was 61.2263 ms",
          },
          {
            type: "STDERR",
            content: "[06:55:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:00:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:05:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:05:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:05:06 INF] Retention processing and compaction took 1.2672 ms; allocating 599998.7328 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:05:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:05:06 INF] Wrote 0 index sets in 95 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:05:06 INF] Indexing took 96 ms; total iteration time was 97.3673 ms",
          },
          {
            type: "STDERR",
            content: "[07:10:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:15:04 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:15:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:15:06 INF] Retention processing and compaction took 1.4449 ms; allocating 599998.5551 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:15:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:15:06 INF] Wrote 0 index sets in 25 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:15:06 INF] Indexing took 25 ms; total iteration time was 26.697400000000002 ms",
          },
          {
            type: "STDERR",
            content: "[07:20:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:25:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:25:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:25:06 INF] Retention processing and compaction took 0.9265 ms; allocating 599999.0735 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:25:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:25:06 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:25:06 INF] Indexing took 28 ms; total iteration time was 29.7678 ms",
          },
          {
            type: "STDERR",
            content: "[07:30:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:35:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:35:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:35:06 INF] Retention processing and compaction took 1.3532 ms; allocating 599998.6468 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:35:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:35:06 INF] Wrote 0 index sets in 28 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:35:06 INF] Indexing took 29 ms; total iteration time was 30.4736 ms",
          },
          {
            type: "STDERR",
            content: "[07:40:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:45:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:45:06 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:45:06 INF] Retention processing and compaction took 1.5886 ms; allocating 599998.4114 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:45:06 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:45:06 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:45:06 INF] Indexing took 17 ms; total iteration time was 19.5305 ms",
          },
          {
            type: "STDERR",
            content: "[07:50:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:55:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[07:55:07 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[07:55:07 INF] Retention processing and compaction took 1.6659000000000002 ms; allocating 599998.3341 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[07:55:07 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[07:55:07 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[07:55:07 INF] Indexing took 17 ms; total iteration time was 19.2387 ms",
          },
          {
            type: "STDERR",
            content: "[08:00:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:05:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:05:07 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:05:07 INF] Retention processing and compaction took 1.6387 ms; allocating 599998.3613 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:05:07 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:05:07 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:05:07 INF] Indexing took 20 ms; total iteration time was 22.099800000000002 ms",
          },
          {
            type: "STDERR",
            content: "[08:10:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:15:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:15:07 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:15:07 INF] Retention processing and compaction took 0.8989 ms; allocating 599999.1011 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:15:07 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:15:07 INF] Wrote 0 index sets in 21 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:15:07 INF] Indexing took 22 ms; total iteration time was 23.4861 ms",
          },
          {
            type: "STDERR",
            content: "[08:20:05 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:25:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:25:07 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:25:07 INF] Retention processing and compaction took 1.1669 ms; allocating 599998.8331 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:25:07 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:25:07 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:25:07 INF] Indexing took 23 ms; total iteration time was 24.3124 ms",
          },
          {
            type: "STDERR",
            content: "[08:30:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:35:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:35:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:35:08 INF] Retention processing and compaction took 1.3808 ms; allocating 599998.61920000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:35:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:35:08 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:35:08 INF] Indexing took 20 ms; total iteration time was 21.764400000000002 ms",
          },
          {
            type: "STDERR",
            content: "[08:40:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:45:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:45:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:45:08 INF] Retention processing and compaction took 1.4004 ms; allocating 599998.59960000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:45:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:45:08 INF] Wrote 0 index sets in 15 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:45:08 INF] Indexing took 16 ms; total iteration time was 17.4058 ms",
          },
          {
            type: "STDERR",
            content: "[08:50:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:55:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[08:55:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[08:55:08 INF] Retention processing and compaction took 4.0683 ms; allocating 599995.93170000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[08:55:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[08:55:08 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[08:55:08 INF] Indexing took 19 ms; total iteration time was 23.6686 ms",
          },
          {
            type: "STDERR",
            content: "[09:00:06 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:05:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:05:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:05:08 INF] Retention processing and compaction took 1.2995 ms; allocating 599998.7005 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:05:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:05:08 INF] Wrote 0 index sets in 13 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:05:08 INF] Indexing took 24 ms; total iteration time was 26.116600000000002 ms",
          },
          {
            type: "STDERR",
            content: "[09:10:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:15:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:15:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:15:08 INF] Retention processing and compaction took 1.4904000000000002 ms; allocating 599998.5096 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:15:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:15:08 INF] Wrote 0 index sets in 16 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:15:08 INF] Indexing took 16 ms; total iteration time was 18.125600000000002 ms",
          },
          {
            type: "STDERR",
            content: "[09:20:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:25:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:25:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:25:08 INF] Retention processing and compaction took 0.88960000000000006 ms; allocating 599999.1104 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:25:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:25:08 INF] Wrote 0 index sets in 13 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:25:08 INF] Indexing took 13 ms; total iteration time was 14.4472 ms",
          },
          {
            type: "STDERR",
            content: "[09:30:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:35:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:35:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:35:08 INF] Retention processing and compaction took 0.99740000000000006 ms; allocating 599999.0026 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:35:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:35:08 INF] Wrote 0 index sets in 15 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:35:08 INF] Indexing took 15 ms; total iteration time was 16.239 ms",
          },
          {
            type: "STDERR",
            content: "[09:40:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:45:07 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:45:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:45:08 INF] Retention processing and compaction took 1.1392 ms; allocating 599998.8608 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:45:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:45:08 INF] Wrote 0 index sets in 13 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:45:08 INF] Indexing took 13 ms; total iteration time was 14.3186 ms",
          },
          {
            type: "STDERR",
            content: "[09:50:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:55:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[09:55:08 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[09:55:08 INF] Retention processing and compaction took 0.7632 ms; allocating 599999.23680000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[09:55:08 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[09:55:08 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[09:55:08 INF] Indexing took 21 ms; total iteration time was 21.9158 ms",
          },
          {
            type: "STDERR",
            content: "[10:00:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:05:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:05:09 INF] Retention processing and compaction took 1.2243000000000002 ms; allocating 599998.7757 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:05:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:05:09 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:05:09 INF] Indexing took 20 ms; total iteration time was 22.1146 ms",
          },
          {
            type: "STDERR",
            content: "[10:05:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:10:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:15:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:15:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:15:09 INF] Retention processing and compaction took 1.0383 ms; allocating 599998.9617 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:15:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:15:09 INF] Wrote 0 index sets in 16 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:15:09 INF] Indexing took 17 ms; total iteration time was 18.346500000000002 ms",
          },
          {
            type: "STDERR",
            content: "[10:20:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:25:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:25:09 INF] Retention processing and compaction took 1.4028 ms; allocating 599998.59720000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:25:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:25:09 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:25:09 INF] Indexing took 21 ms; total iteration time was 22.567500000000003 ms",
          },
          {
            type: "STDERR",
            content: "[10:25:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:30:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[10:31:29 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[10:35:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:35:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:35:09 INF] Retention processing and compaction took 1.5090000000000001 ms; allocating 599998.491 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:35:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:35:09 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:35:09 INF] Indexing took 19 ms; total iteration time was 20.6584 ms",
          },
          {
            type: "STDERR",
            content: "[10:40:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:45:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:45:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:45:09 INF] Retention processing and compaction took 1.4404000000000001 ms; allocating 599998.5596 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:45:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:45:09 INF] Wrote 0 index sets in 16 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:45:09 INF] Indexing took 16 ms; total iteration time was 17.8899 ms",
          },
          {
            type: "STDERR",
            content: "[10:50:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[10:55:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[10:55:09 INF] Retention processing and compaction took 1.522 ms; allocating 599998.478 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[10:55:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[10:55:09 INF] Wrote 0 index sets in 16 ms",
          },
          {
            type: "STDERR",
            content:
              "[10:55:09 INF] Indexing took 16 ms; total iteration time was 18.364800000000002 ms",
          },
          {
            type: "STDERR",
            content: "[10:55:08 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:00:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:05:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:05:09 INF] Retention processing and compaction took 1.5865 ms; allocating 599998.4135 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:05:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:05:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:05:09 INF] Wrote 0 index sets in 45 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:05:09 INF] Indexing took 45 ms; total iteration time was 47.4806 ms",
          },
          {
            type: "STDERR",
            content: "[11:10:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:15:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:15:09 INF] Retention processing and compaction took 2.2959 ms; allocating 599997.7041 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:15:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:15:09 INF] Wrote 0 index sets in 52 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:15:09 INF] Indexing took 52 ms; total iteration time was 54.853500000000004 ms",
          },
          {
            type: "STDERR",
            content: "[11:15:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:20:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:25:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:25:09 INF] Retention processing and compaction took 1.7445000000000002 ms; allocating 599998.25550000009 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:25:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:25:09 INF] Wrote 0 index sets in 36 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:25:09 INF] Indexing took 37 ms; total iteration time was 38.7656 ms",
          },
          {
            type: "STDERR",
            content: "[11:25:09 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:30:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:35:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:35:09 INF] Retention processing and compaction took 1.9244 ms; allocating 599998.0756 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:35:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:35:09 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:35:09 INF] Indexing took 18 ms; total iteration time was 20.1431 ms",
          },
          {
            type: "STDERR",
            content: "[11:35:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:40:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:45:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:45:09 INF] Retention processing and compaction took 1.8945 ms; allocating 599998.10550000006 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:45:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:45:09 INF] Wrote 0 index sets in 35 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:45:09 INF] Indexing took 35 ms; total iteration time was 37.43 ms",
          },
          {
            type: "STDERR",
            content: "[11:45:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:50:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[11:55:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[11:55:09 INF] Retention processing and compaction took 1.9722000000000002 ms; allocating 599998.0278 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[11:55:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[11:55:09 INF] Wrote 0 index sets in 50 ms",
          },
          {
            type: "STDERR",
            content:
              "[11:55:09 INF] Indexing took 50 ms; total iteration time was 52.917300000000004 ms",
          },
          {
            type: "STDERR",
            content: "[11:55:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:00:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:05:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:05:09 INF] Retention processing and compaction took 1.8544 ms; allocating 599998.1456 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:05:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:05:09 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:05:09 INF] Indexing took 18 ms; total iteration time was 19.8795 ms",
          },
          {
            type: "STDERR",
            content: "[12:05:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:10:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:15:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:15:09 INF] Retention processing and compaction took 1.8525 ms; allocating 599998.14750000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:15:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:15:09 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:15:09 INF] Indexing took 20 ms; total iteration time was 21.9118 ms",
          },
          {
            type: "STDERR",
            content: "[12:15:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:20:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:25:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:25:09 INF] Retention processing and compaction took 1.528 ms; allocating 599998.47200000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:25:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:25:09 INF] Wrote 0 index sets in 26 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:25:09 INF] Indexing took 26 ms; total iteration time was 28.2234 ms",
          },
          {
            type: "STDERR",
            content: "[12:25:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:30:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:35:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:35:09 INF] Retention processing and compaction took 1.4909000000000001 ms; allocating 599998.5091 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:35:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:35:09 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:35:09 INF] Indexing took 18 ms; total iteration time was 20.4865 ms",
          },
          {
            type: "STDERR",
            content: "[12:35:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:40:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:45:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:45:09 INF] Retention processing and compaction took 2.4343 ms; allocating 599997.5657 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:45:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:45:09 INF] Wrote 0 index sets in 21 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:45:09 INF] Indexing took 21 ms; total iteration time was 24.1504 ms",
          },
          {
            type: "STDERR",
            content: "[12:45:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:50:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[12:55:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[12:55:09 INF] Retention processing and compaction took 1.3121 ms; allocating 599998.6879 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[12:55:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[12:55:09 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[12:55:09 INF] Indexing took 17 ms; total iteration time was 19.2448 ms",
          },
          {
            type: "STDERR",
            content: "[12:55:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:00:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:05:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:05:09 INF] Retention processing and compaction took 2.9463000000000004 ms; allocating 599997.0537 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:05:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:05:09 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:05:09 INF] Indexing took 18 ms; total iteration time was 21.735400000000002 ms",
          },
          {
            type: "STDERR",
            content: "[13:05:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:10:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:15:09 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:15:09 INF] Retention processing and compaction took 1.9471 ms; allocating 599998.0529 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:15:09 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:15:09 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:15:09 INF] Indexing took 18 ms; total iteration time was 20.425700000000003 ms",
          },
          {
            type: "STDERR",
            content: "[13:15:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:20:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:25:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:25:10 INF] Retention processing and compaction took 1.2741 ms; allocating 599998.72590000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:25:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:25:10 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:25:10 INF] Indexing took 17 ms; total iteration time was 18.647100000000002 ms",
          },
          {
            type: "STDERR",
            content: "[13:25:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:30:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:35:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:35:10 INF] Retention processing and compaction took 2.0157000000000003 ms; allocating 599997.9843 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:35:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:35:10 INF] Wrote 0 index sets in 20 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:35:10 INF] Indexing took 21 ms; total iteration time was 23.1416 ms",
          },
          {
            type: "STDERR",
            content: "[13:35:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:40:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:45:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:45:10 INF] Retention processing and compaction took 1.9964000000000002 ms; allocating 599998.0036 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:45:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:45:10 INF] Wrote 0 index sets in 189 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:45:10 INF] Indexing took 189 ms; total iteration time was 191.7204 ms",
          },
          {
            type: "STDERR",
            content: "[13:45:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[13:47:34 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[13:50:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[13:55:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[13:55:10 INF] Retention processing and compaction took 1.2995 ms; allocating 599998.7005 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[13:55:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[13:55:10 INF] Wrote 0 index sets in 23 ms",
          },
          {
            type: "STDERR",
            content:
              "[13:55:10 INF] Indexing took 23 ms; total iteration time was 25.084600000000002 ms",
          },
          {
            type: "STDERR",
            content: "[13:55:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:00:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:05:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:05:10 INF] Retention processing and compaction took 1.1094000000000002 ms; allocating 599998.8906 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:05:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:05:10 INF] Wrote 0 index sets in 23 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:05:10 INF] Indexing took 24 ms; total iteration time was 25.1137 ms",
          },
          {
            type: "STDERR",
            content: "[14:05:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:10:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:15:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:15:10 INF] Retention processing and compaction took 1.2754 ms; allocating 599998.72460000007 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:15:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:15:10 INF] Wrote 0 index sets in 28 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:15:10 INF] Indexing took 29 ms; total iteration time was 30.4036 ms",
          },
          {
            type: "STDERR",
            content: "[14:15:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:20:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:25:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:25:10 INF] Retention processing and compaction took 1.0004 ms; allocating 599998.9996 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:25:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:25:10 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:25:10 INF] Indexing took 19 ms; total iteration time was 20.1992 ms",
          },
          {
            type: "STDERR",
            content: "[14:25:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:30:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:35:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:35:10 INF] Retention processing and compaction took 1.233 ms; allocating 599998.767 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:35:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:35:10 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:35:10 INF] Indexing took 19 ms; total iteration time was 20.62 ms",
          },
          {
            type: "STDERR",
            content: "[14:35:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:40:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:45:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:45:10 INF] Retention processing and compaction took 1.3708 ms; allocating 599998.62920000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:45:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:45:10 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:45:10 INF] Indexing took 17 ms; total iteration time was 18.6883 ms",
          },
          {
            type: "STDERR",
            content: "[14:45:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:50:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[14:55:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[14:55:10 INF] Retention processing and compaction took 1.7969000000000002 ms; allocating 599998.2031 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[14:55:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[14:55:10 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[14:55:10 INF] Indexing took 20 ms; total iteration time was 21.969 ms",
          },
          {
            type: "STDERR",
            content: "[14:55:10 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:00:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:05:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:05:10 INF] Retention processing and compaction took 1.8767 ms; allocating 599998.1233 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:05:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:05:10 INF] Wrote 0 index sets in 22 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:05:10 INF] Indexing took 22 ms; total iteration time was 24.8133 ms",
          },
          {
            type: "STDERR",
            content: "[15:05:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:10:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:15:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:15:10 INF] Retention processing and compaction took 1.4946000000000002 ms; allocating 599998.5054 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:15:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:15:10 INF] Wrote 0 index sets in 13 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:15:10 INF] Indexing took 13 ms; total iteration time was 15.492 ms",
          },
          {
            type: "STDERR",
            content: "[15:15:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:20:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              '[15:25:01 INF] Seq "5.1.3364" running on OS "Linux 4.15.0-66-generic #75-Ubuntu SMP Tue Oct 1 05:24:09 UTC 2019"',
          },
          {
            type: "STDERR",
            content: "[15:25:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:25:10 INF] Retention processing and compaction took 0.9364 ms; allocating 599999.0636 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:25:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:25:10 INF] Wrote 0 index sets in 18 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:25:10 INF] Indexing took 18 ms; total iteration time was 19.9103 ms",
          },
          {
            type: "STDERR",
            content: "[15:25:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:30:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:35:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:35:10 INF] Retention processing and compaction took 1.0287 ms; allocating 599998.9713 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:35:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:35:10 INF] Wrote 0 index sets in 28 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:35:10 INF] Indexing took 28 ms; total iteration time was 29.8032 ms",
          },
          {
            type: "STDERR",
            content: "[15:35:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:40:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:45:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:45:10 INF] Retention processing and compaction took 0.9505 ms; allocating 599999.04950000008 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:45:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:45:10 INF] Wrote 0 index sets in 15 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:45:10 INF] Indexing took 15 ms; total iteration time was 16.7818 ms",
          },
          {
            type: "STDERR",
            content: "[15:45:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:50:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[15:55:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[15:55:10 INF] Retention processing and compaction took 1.1338000000000001 ms; allocating 599998.8662 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[15:55:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[15:55:10 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[15:55:10 INF] Indexing took 17 ms; total iteration time was 19.056800000000003 ms",
          },
          {
            type: "STDERR",
            content: "[15:55:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:00:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:05:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:05:10 INF] Retention processing and compaction took 1.3618000000000001 ms; allocating 599998.6382 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:05:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:05:10 INF] Wrote 0 index sets in 17 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:05:10 INF] Indexing took 17 ms; total iteration time was 18.6642 ms",
          },
          {
            type: "STDERR",
            content: "[16:05:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:10:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:15:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:15:10 INF] Retention processing and compaction took 5.2169 ms; allocating 599994.7831 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:15:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:15:10 INF] Wrote 0 index sets in 21 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:15:10 INF] Indexing took 21 ms; total iteration time was 26.9993 ms",
          },
          {
            type: "STDERR",
            content: "[16:15:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:20:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[16:24:37 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[16:25:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:25:10 INF] Retention processing and compaction took 1.3933 ms; allocating 599998.6067 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:25:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:25:10 INF] Wrote 0 index sets in 19 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:25:10 INF] Indexing took 20 ms; total iteration time was 21.586000000000002 ms",
          },
          {
            type: "STDERR",
            content: "[16:25:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[16:28:37 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[16:30:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:35:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:35:10 INF] Retention processing and compaction took 1.9628 ms; allocating 599998.0372 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:35:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:35:10 INF] Wrote 0 index sets in 42 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:35:10 INF] Indexing took 42 ms; total iteration time was 44.6978 ms",
          },
          {
            type: "STDERR",
            content: "[16:35:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:40:11 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:45:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:45:10 INF] Retention processing and compaction took 1.4639 ms; allocating 599998.5361 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:45:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:45:10 INF] Wrote 0 index sets in 14 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:45:10 INF] Indexing took 15 ms; total iteration time was 16.5181 ms",
          },
          {
            type: "STDERR",
            content: "[16:45:12 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:50:12 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[16:55:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[16:55:10 INF] Retention processing and compaction took 1.397 ms; allocating 599998.603 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[16:55:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[16:55:10 INF] Wrote 0 index sets in 16 ms",
          },
          {
            type: "STDERR",
            content:
              "[16:55:10 INF] Indexing took 16 ms; total iteration time was 17.913800000000002 ms",
          },
          {
            type: "STDERR",
            content: "[16:55:12 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content: "[17:00:12 INF] Metrics sampled",
          },
          {
            type: "STDERR",
            content:
              "[17:03:37 INF] 1 more generation 2 garbage collection(s) occurred",
          },
          {
            type: "STDERR",
            content: "[17:05:10 INF] Applying 0 retention policies",
          },
          {
            type: "STDERR",
            content:
              "[17:05:10 INF] Retention processing and compaction took 1.2453 ms; allocating 599998.7547 ms for indexing",
          },
          {
            type: "STDERR",
            content: "[17:05:10 INF] Beginning indexing",
          },
          {
            type: "STDERR",
            content: "[17:05:10 INF] Wrote 0 index sets in 40 ms",
          },
          {
            type: "STDERR",
            content:
              "[17:05:10 INF] Indexing took 40 ms; total iteration time was 41.5439 ms",
          },
          {
            type: "STDERR",
            content: "[17:05:12 INF] Metrics sampled",
          },
        ],
      },
      created: "2020-05-27T16:24:46+00:00",
      error: null,
    },
    {
      service: {
        id: "f3ef937b9c55ae639d1cb7d0fc33c77b42a3f22a0be05d46a7cb75ec5b21bcfb",
        name: "/phpmyadmin",
        command: "/docker-entrypoint.sh apache2-foreground",
        image: "phpmyadmin/phpmyadmin",
        ports: [
          {
            ip: "0.0.0.0",
            privatePort: 80,
            publicPort: 8090,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:31.5938502+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 7965928241,
          systemCpuUsage: 5063220230000000,
          perCpuUsage: [4498456496, 3467471745],
        },
        memory: {
          usage: 48177152,
          maxUsage: 97460224,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 35024896,
          write_major: 8,
          write_minor: 0,
          write_value: 12288,
        },
        network: {
          rx_bytes: 9127,
          rx_packets: 123,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 52890,
          tx_packets: 60,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDERR",
            content: "phpMyAdmin not found in /var/www/html - copying now...",
          },
          {
            type: "STDERR",
            content:
              "Complete! phpMyAdmin has been successfully copied to /var/www/html",
          },
          {
            type: "STDERR",
            content:
              "AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.20.0.4. Set the 'ServerName' directive globally to suppress this message",
          },
          {
            type: "STDERR",
            content:
              "AH00558: apache2: Could not reliably determine the server's fully qualified domain name, using 172.20.0.4. Set the 'ServerName' directive globally to suppress this message",
          },
          {
            type: "STDERR",
            content:
              "[Wed May 27 16:24:49.845495 2020] [mpm_prefork:notice] [pid 1] AH00163: Apache/2.4.25 (Debian) PHP/7.2.19 configured -- resuming normal operations",
          },
          {
            type: "STDERR",
            content:
              "[Wed May 27 16:24:49.845662 2020] [core:notice] [pid 1] AH00094: Command line: 'apache2 -D FOREGROUND'",
          },
          {
            type: "STDOUT",
            content:
              '172.20.0.1 - - [27/May/2020:16:27:29 +0000] "GET //index.php?db=homepage&table=projects&target=tbl_export.php HTTP/1.0" 200 5001 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"',
          },
          {
            type: "STDOUT",
            content:
              '172.20.0.1 - - [27/May/2020:16:27:30 +0000] "GET //favicon.ico HTTP/1.0" 200 22752 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"',
          },
          {
            type: "STDOUT",
            content:
              '13.66.211.136 - - [28/May/2020:03:34:45 +0000] "GET / HTTP/1.1" 200 16034 "-" "-"',
          },
          {
            type: "STDOUT",
            content:
              '5.188.206.50 - - [28/May/2020:04:40:55 +0000] "\\x03" 400 0 "-" "-"',
          },
          {
            type: "STDOUT",
            content:
              '167.86.112.157 - - [28/May/2020:05:54:07 +0000] "GET /w00tw00t.at.ISC.SANS.DFind:) HTTP/1.1" 400 0 "-" "-"',
          },
          {
            type: "STDOUT",
            content:
              '198.108.66.203 - - [28/May/2020:10:51:14 +0000] "GET / HTTP/1.1" 200 4983 "-" "Mozilla/5.0 zgrab/0.x"',
          },
        ],
      },
      created: "2020-05-27T16:24:45+00:00",
      error: null,
    },
    {
      service: {
        id: "05b6878a41f9084357eeb112deba04942543354711072c86956444ae786b6213",
        name: "/mysql",
        command: "docker-entrypoint.sh mysqld",
        image: "mysql:5.7",
        ports: [
          {
            ip: "",
            privatePort: 3306,
            publicPort: 0,
            type: "tcp",
          },
          {
            ip: "",
            privatePort: 33060,
            publicPort: 0,
            type: "tcp",
          },
        ],
      },
      state: "RUNNING",
      status: "Up 25 hours",
      stats: {
        read: "2020-05-28T17:06:32.6279778+00:00",
        cpu: {
          onlineCpus: 2,
          totalUsage: 110657700555,
          systemCpuUsage: 5063222270000000,
          perCpuUsage: [54194435791, 56463264764],
        },
        memory: {
          usage: 213192704,
          maxUsage: 248827904,
          limit: 4136427520,
        },
        io: {
          read_major: 8,
          read_minor: 0,
          read_value: 38064128,
          write_major: 8,
          write_minor: 0,
          write_value: 30756864,
        },
        network: {
          rx_bytes: 75191,
          rx_packets: 555,
          rx_errors: 0,
          rx_dropped: 0,
          tx_bytes: 1015566,
          tx_packets: 424,
          tx_errors: 0,
          tx_dropped: 0,
        },
      },
      logs: {
        lines: [
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.757250Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.760737Z 0 [Note] mysqld (mysqld 5.7.27) starting as process 1 ...",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776392Z 0 [Note] InnoDB: PUNCH HOLE support available",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776457Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776472Z 0 [Note] InnoDB: Uses event mutexes",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776489Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776496Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.11",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.776501Z 0 [Note] InnoDB: Using Linux native AIO",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.778748Z 0 [Note] InnoDB: Number of pools: 1",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.786068Z 0 [Note] InnoDB: Using CPU crc32 instructions",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.792500Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.828361Z 0 [Note] InnoDB: Completed initialization of buffer pool",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.842219Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:45.908717Z 0 [Note] InnoDB: Highest supported file format is Barracuda.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.091656Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.091783Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.135277Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.137147Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.137180Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.138379Z 0 [Note] InnoDB: Waiting for purge to start",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.188646Z 0 [Note] InnoDB: 5.7.27 started; log sequence number 13543859",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.189056Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.191021Z 0 [Note] Plugin 'FEDERATED' is disabled.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.235184Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.236869Z 0 [Warning] CA certificate ca.pem is self signed.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.239956Z 0 [Note] Server hostname (bind-address): '*'; port: 3306",
          },
          {
            type: "STDERR",
            content: "2020-05-27T16:24:46.241631Z 0 [Note] IPv6 is available.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.242695Z 0 [Note]   - '::' resolves to '::';",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.242885Z 0 [Note] Server socket created on IP: '::'.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.290951Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.302934Z 0 [Note] InnoDB: Buffer pool(s) load completed at 200527 16:24:46",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.489571Z 0 [Note] Event Scheduler: Loaded 0 events",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:24:46.490042Z 0 [Note] mysqld: ready for connections.",
          },
          {
            type: "STDERR",
            content:
              "Version: '5.7.27'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)",
          },
          {
            type: "STDERR",
            content:
              "2020-05-27T16:28:41.501596Z 2 [Note] Got packets out of order",
          },
        ],
      },
      created: "2020-05-27T16:24:43+00:00",
      error: null,
    },
  ];

  if (num == null) {
    num = services.length;
  }

  return services.slice(0, num);
};

export default exampleServices;
