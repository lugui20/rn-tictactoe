import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "../routes/appRoutes";

export default function Routes() {
    return (
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}