import {findBy, findAll} from "../fetch/skins";


export const champion = (name: string) => (
    {
        name,
        skin: (id?: string | number) => findBy(name, id),
        images: findAll,
    }
    )
