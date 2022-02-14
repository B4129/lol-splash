import { findBy,findAll} from "../fetch/splasharts";


export const champion = (name: string): { image: string[]; images: () => string[]; name: string } => {
    return {
        name,
        image: findBy(name,'1'),
        images:findAll,
    }
}

module.exports = champion