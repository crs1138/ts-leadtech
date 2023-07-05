import { Pokemon } from './Pokemon'
import { Battle } from './Battle'

const pikachu = Pokemon({ name: 'Pikachu', type: 'electric', level: 2 })
const charmander = Pokemon({ name: 'Charmander', type: 'water', level: 2 })

Battle(pikachu, charmander)
