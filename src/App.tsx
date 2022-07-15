import {observer} from 'mobx-react'
import {useStore} from '@/store'

const App = () => {
    const store = useStore()
    return <div>
        <button onClick={store.user.login}>登录</button>
    </div>
}

export default observer(App)