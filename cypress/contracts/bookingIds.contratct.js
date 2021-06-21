import Joi from '@hapi/joi'

const bookingIdsSchema = Joi.array().items(
    Joi.object({
        bookingid: Joi.number().integer()        
    })
)

export default bookingIdsSchema;