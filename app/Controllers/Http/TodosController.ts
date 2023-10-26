import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import View from '@ioc:Adonis/Core/View'
import Todo from 'App/Models/Todo'

export default class TodosController {
    public async index({}: HttpContextContract) {
        const todos = await Todo.all()
        return View.render('todos/index', {
            todos,
        })
    }

    public async create({}: HttpContextContract) {}

    public async store({}: HttpContextContract) {}

    public async show({}: HttpContextContract) {}

    public async edit({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
