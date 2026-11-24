import { io, Socket } from "socket.io-client";

const getSocketUrl = () => {
  if (process.env.NEXT_PUBLIC_SOCKET_URL) {
    return process.env.NEXT_PUBLIC_SOCKET_URL;
  }
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }
  if (typeof window !== "undefined") {
    // If accessing via port 3000 (direct IP), point socket to 5001
    if (window.location.port === "3000") {
      return `${window.location.protocol}//${window.location.hostname}:5001`;
    }
    // If accessing via domain name (https://qconveyancing.com), Nginx proxies /socket.io
    return window.location.origin;
  }
  return "http://127.0.0.1:5001";
};

let socket: Socket | null = null;

export const getSocket = (): Socket => {
  if (!socket) {
    const url = getSocketUrl();
    socket = io(url, {
      autoConnect: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      transports: ["websocket", "polling"],
    });
  }
  return socket;
};
