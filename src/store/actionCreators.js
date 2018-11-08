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

export function makeTurn(action) {
  return {
    type: 'MAKE_TURN',
    user: action.user,
    index: action.index
  }
}

export function changeUser(action) {
  return {
    type: 'TOGGLE_USER'
  }
}