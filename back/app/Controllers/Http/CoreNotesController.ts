import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import CoreNote from 'App/Models/CoreNote'

export default class CoreNotesController {
  public async index() {
    const coreNotes = await CoreNote.all()

    return {
      data: coreNotes
    }
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const coreNote = await CoreNote.create(body)

    response.status(201)

    return {
      message: 'Core note created successfully!',
      data: coreNote
    }
  }

  public async show({ params }: HttpContextContract){
    const coreNote = await CoreNote.findOrFail(params.id)
    
    return {
      data: coreNote
    }
  }

  public async update({ params, request }: HttpContextContract){
    const body = request.body()

    const coreNote = await CoreNote.findOrFail(params.id)

    coreNote.title = body.title
    coreNote.description = body.description
    coreNote.favorite = body.favorite
    coreNote.color = body.color

    await coreNote.save()

    return {
      message: 'Core note updated successfully!',
      data: coreNote
    }
  }
  
  public async destroy({ params }: HttpContextContract){
    const coreNote = await CoreNote.findOrFail(params.id)

    await coreNote.delete()
    
    return {
      message: 'Core note deleted successfully!',
      data: coreNote
    }
  }
}
