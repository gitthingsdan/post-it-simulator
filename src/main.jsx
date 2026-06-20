/* *** IMPORTANTE *** */
// Para acceder al repositorio de GitHub de esta app: https://github.com/gitthingsdan/post-it-simulator/tree/main
// Para acceder a una versión en línea de esta app: https://gitthingsdan.github.io/post-it-simulator

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {PostItSim} from './components/PostItSim'

const root = createRoot(document.getElementById('root'))
root.render(<StrictMode>
    <PostItSim/>
</StrictMode>)