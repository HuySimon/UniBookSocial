import React, { useContext } from "react";
import { NotificationContext } from "../context/Notifcation/NotificationProvider";
export const useNotificationContext = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error("useNotificationContext must be used within a NotificationProvider");
	}
	return [context.state, context.dispatch];
}