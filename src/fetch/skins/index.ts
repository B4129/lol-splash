import {ChampionName} from "../../champions";
import {champions} from "./champions";

const SPLASH_URL = 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'
export type SkinIdTypes = string | number | undefined
export const findBy = (name: ChampionName, id: SkinIdTypes): string => {
    return createSkinUrl(name, id)
}
export const findAll = (): string[] => {
    return ['https://source.unsplash.com/random']
}

const createSkinUrl = (name: ChampionName, id: SkinIdTypes) => {
    const findChampion = champions.find(champion => champion.name === name)
    if (!findChampion) return ''
    return `${SPLASH_URL}${findChampion.name}_${id}.jpg`
}

