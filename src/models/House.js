export class House {
    constructor(data){
        this.id = data.id || data._id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bedrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creator = data.creator
    }
}