import {config as cfg} from "@/utils/config";

/**
 * @brief user profile loader
 */
export class ProfileLoader{
    name: string
    firstname?: string
    birthdate?: string
    country?: string
    quickPresentation?: string
    images: Array<string>
    mainText?: string
    strenghts ?: Array<string>
    weakness ?: Array<string>

    constructor(name:string){
        this.name = name
        this.images = []
    }

    load():Promise<boolean>{
        return new Promise((resolve,reject) => {
            const lowerName = this.name.toLowerCase()

            fetch(`${cfg.baseUrl}/configurations/${lowerName}/config.json`)
                .then(response => response.json())
                .then(config => {
                    this.name = config.name
                    this.firstname = config.firstname
                    this.birthdate = config.birthdate
                    this.country = config.country
                    this.quickPresentation = config.quickPresentation
                    this.images = config.images.map((image:string) => `${cfg.baseUrl}/configurations/${lowerName}/images/${image}`)
                    this.mainText = config.mainText
                    this.strenghts = config.strenghs
                    this.weakness = config.weakness

                    resolve(true)
                })
                .catch(err => reject(err))
        })
    }
}