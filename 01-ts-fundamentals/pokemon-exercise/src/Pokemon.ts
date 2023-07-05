import { Utils } from './Utils'

type PokemonType = 'electric' | 'fire' | 'water' | 'ice' | 'dragon'

export type PokemonSpecie = {
    name: string
    type: PokemonType
    level: number
    attackPower: number
    attack(opponent: PokemonSpecie): void
    getHp(): number
    setHp(amount: number): void
}

export function Pokemon({
    name,
    type,
    level,
}: {
    name: string
    type: PokemonType
    level: number
}): PokemonSpecie {
    const { randomInt } = Utils()
    let _hp = level * 300 + randomInt(10, -5)

    return {
        name,
        type,
        level,
        attackPower: 100 + level * (5 * randomInt(20, -7)),
        attack(opponent) {
            const attackScore =
                this.attackPower * randomInt(level + 5, -1 * level) * 0.5
            const opponentCurrentHp = opponent.getHp()
            opponent.setHp(opponentCurrentHp - attackScore)
            console.log(`${opponent.name} was hit and lost ${attackScore} hp.`)
        },
        getHp() {
            return _hp
        },
        setHp(amount) {
            _hp = amount
        },
    }
}
