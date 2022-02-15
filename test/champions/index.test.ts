import {lol} from '../../src';

test('指定のスキンURLの取得', () => {
    const url = lol.champion('Poppy').skin(1);
    expect( url ).toBe('https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_1.jpg');
});