import { PokemonSpecie } from './Pokemon'

export function Battle(pokemon1: PokemonSpecie, pokemon2: PokemonSpecie): void {
    while (pokemon1.getHp() > 0 && pokemon2.getHp() > 0) {
        pokemon1.attack(pokemon2)
        pokemon2.attack(pokemon1)
    }
    const winner =
        pokemon1.getHp() === pokemon2.getHp()
            ? null
            : pokemon1.getHp() > pokemon2.getHp()
            ? pokemon1
            : pokemon2
    console.log(
        `The battle is over. ${pokemon1.name} has ${
            pokemon1.getHp() <= 0 ? 0 : pokemon1.getHp()
        } hp and ${pokemon2.name} has ${
            pokemon2.getHp() <= 0 ? 0 : pokemon2.getHp()
        } hp`
    )
    if (!!winner) {
        console.log(`****************************`)
        console.log(`The winner is ${winner.name}`)
        console.log(`****************************`)
    } else {
        console.log(`Everybody's dead, Dave!`)
    }
}
