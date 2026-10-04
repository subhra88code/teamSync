import Home from '../features/dashBoard/ui/pages/Home'
import Setting from '../features/settings/ui/pages/Setting'
import Chat from '../features/chats/ui/pages/Chat'

export let commonRoutes = [
    {
        path: "",
        element: <Home/>
    },
    {
        path: 'chats',
        element: <Chat/>
    },
    {
        path: 'setting',
        element: <Setting/>
    }
]
