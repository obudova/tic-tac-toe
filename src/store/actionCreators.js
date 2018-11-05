export function startGame () {
  return {
    type: 'START_GAME'
  }
}

export function selectNames() {
  return {
    type: 'SELECT_NAMES'
  }
}

export function throwDice() {
  return {
    type: 'THROW_DICE'
  }
}