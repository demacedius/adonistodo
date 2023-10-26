

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => view.render('home'))
Route.get('/contact', async ({ view }) => view.render('pages/contact'))
Route.get('/todos','TodosController.index')