/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('landing')

router.on('/login').renderInertia('login')
router.on('/register').renderInertia('register')

router.on('/app').renderInertia('dashboard')
