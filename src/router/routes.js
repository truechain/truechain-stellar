// import Home from '@/components/Home'
import Deploy from '@/components/Deploy'
import Interact from '@/components/Interact'
import Transfer from '@/components/Transfer'
import Chain from '@/components/Chain'
import Log from '@/components/Log'

export default [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/transfer',
    name: 'Transfer',
    component: Transfer
  },
  {
    path: '/interact',
    name: 'Interact',
    component: Interact
  },
  {
    path: '/deploy',
    name: 'Deploy',
    component: Deploy
  },
  {
    path: '/chain',
    name: 'Chain',
    component: Chain
  },
  {
    path: '/log',
    name: 'Log',
    component: Log
  }
]
