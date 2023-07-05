type Utils = {
    randomInt(max: number, min: number): number
}
export function Utils(): Utils {
    return {
        randomInt(max: number, min = 0): number {
            return Math.round(Math.random() * (max - min) + min)
        },
    }
}
