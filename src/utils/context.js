import { createContext } from "react";

const SocketContext = createContext(null);
const RoomContext = createContext(null);
const UserInfoContext = createContext(null);

export { SocketContext, RoomContext, UserInfoContext };
