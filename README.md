# Nginx Node.js Load Balancer

A demonstration of Round-Robin load balancing using Nginx as a reverse proxy for two Node.js Express servers.

## Architecture

- **Nginx**: Listening on port 8080, distributing traffic(8080).
- **Node Server 1**: Running on port 3001 (Weight: 2).
- **Node Server 2**: Running on port 3002 (Weight: 1).

## Setup & Running

### Option 1: Manual (Windows)
1. Start Node servers: `node server1.js` and `node server2.js`.
2. Move Nginx folder to `C:\`.
3. In a new terminal start `cd C:\nginx-1.30.0\nginx-1.30.0.\nginx.exe or .\nginx.exe -s quit` to stop any existing Nginx instance(quit).
4. Update `nginx.conf` to include `loadbalancer.conf`.
5. Run `.\nginx.exe`.

### Option 2: Docker (Recommended)
```bash
docker-compose up --build
```

### Testing the Load Balancer

```bash
Open http://localhost:8080.
```

- Click the Call Backend button.

- Observe the response text toggling between Server 1 and Server 2 based on the assigned weights.

