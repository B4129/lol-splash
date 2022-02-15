import {findBy, findAll} from "../fetch/skins";


export const champion = (name: ChampionName) => (
    {
        name,
        skin: (id?: string | number) => findBy(name, id),
        images: findAll,
    }
    )

export type ChampionName =
'Aatrox'|
'Ahri'|
'Akali'|
'Alistar'|
'Amumu'|
'Anivia'|
'Annie'|
'Ashe'|
'Azir'|
'Bard'|
'Blitzcrank'|
'Brand'|
'Braum'|
'Caitlyn'|
'Cassiopeia'|
'ChoGath'|
'Corki'|
'Darius'|
'Diana'|
'Dr.Mundo'|
'Draven'|
'Ekko'|
'Elise'|
'Evelynn'|
'Ezreal'|
'Fiddlesticks'|
'Fiora'|
'Fizz'|
'Galio'|
'Gangplank'|
'Garen'|
'Gnar'|
'Gragas'|
'Graves'|
'Hecarim'|
'Heimerdinger'|
'Irelia'|
'Janna'|
'Jarvan IV'|
'Jax'|
'Jayce'|
'Jinx'|
'Kalista'|
'Karma'|
'Karthus'|
'Kassadin'|
'Katarina'|
'Kayle'|
'Kennen'|
'KhaZix'|
'Kindred'|
'KogMaw'|
'LeBlanc'|
'Lee Sin'|
'Leona'|
'Lissandra'|
'Lucian'|
'Lulu'|
'Lux'|
'Malphite'|
'Malzahar'|
'Maokai'|
'Master Yi'|
'Miss Fortune'|
'Mordekaiser'|
'Morgana'|
'Nami'|
'Nasus'|
'Nautilus'|
'Nidalee'|
'Nocturne'|
'Nunu'|
'Olaf'|
'Orianna'|
'Pantheon'|
'Poppy'|
'Quinn'|
'Rammus'|
'RekSai'|
'Renekton'|
'Rengar'|
'Riven'|
'Rumble'|
'Ryze'|
'Sejuani'|
'Shaco'|
'Shen'|
'Shyvana'|
'Singed'|
'Sion'|
'Sivir'|
'Skarner'|
'Sona'|
'Soraka'|
'Swain'|
'Syndra'|
'Tahm Kench'|
'Talon'|
'Taric'|
'Teemo'|
'Thresh'|
'Tristana'|
'Trundle'|
'Tryndamere'|
'Twisted Fate'|
'Twitch'|
'Udyr'|
'Urgot'|
'Varus'|
'Vayne'|
'Veigar'|
'VelKoz'|
'Vi'|
'Viktor'|
'Vladimir'|
'Volibear'|
'Warwick'|
'Wukong'|
'Xerath'|
'Xin Zhao'|
'Yasuo'|
'Yorick'|
'Zac'|
'Zed'|
'Ziggs'|
'Zilean'|
'Zyra'