import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import Login from './Login/login';
import Home from './Home/home';
import Sobre from './Sobre/sobre';
import Destinos from './Destino/destino';
import Promocao from './Promocao/promocao';
import Cadastro from './Cadastro/cadastro';
import Contato from './Contato/contato';
import { Ionicons } from 'react-native-vector-icons'


const Tab = createBottomTabNavigator();

function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: '#48CAE4',
                    borderTopWidth: 0,

                    bottom: 14,
                    left: 14,
                    right: 14,
                    elevation: 0,
                    borderRadius: 4,
                    height: 60,
                }
            }}
        >
            <Tab.Screen name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' size={size} color={color} />
                        }
                        return <Ionicons name='home-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Sobre'
                component={Sobre}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='business' size={size} color={color} />
                        }
                        return <Ionicons name='business-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Destinos'
                component={Destinos}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='airplane' size={size} color={color} />
                        }
                        return <Ionicons name='airplane-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Promoção'
                component={Promocao}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='pricetags' size={size} color={color} />
                        }
                        return <Ionicons name='pricetags-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Contato'
                component={Contato}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='mail' size={size} color={color} />
                        }
                        return <Ionicons name='mail-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='log-in' size={size} color={color} />
                        }
                        return <Ionicons name='log-in-outline' size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='person' size={size} color={color} />
                        }
                        return <Ionicons name='person-outline' size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    );
}

export default Routes;