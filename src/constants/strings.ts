export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['What happens in Grumple', 'Luck be a Grumple', 'Grumples Eleven', 'Yatzhee', 'Craps!', 'Bingo', 'Jackpot', 'Let it RIDE!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'That\'s all you got?'
export const WORD_NOT_FOUND_MESSAGE = 'your GRUMPLE is GRUMPLED!'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const HARD_MODE_DESCRIPTION =
  'Any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'For improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The word was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = ['OUTCOME: You win', 'OUTCOME: You lost', 'OUTCOME: Snake Eyes!', 'OUTCOME: You Win in error: NO SUCCESS', 'OUTCOME: The House ALWAYS wins', 'OUTCOME: You BUSTED', 'OUTCOME: Grumple calls your BLUFF', 'OUTCOME: Cheating suspected']
export const GUESS_DISTRIBUTION_TEXT = 'Time spent at Buffet'
export const NEW_WORD_TEXT = 'Time left to BET on Grumple'
export const SHARE_TEXT = 'Share'
export const TOTAL_TRIES_TEXT = 'Losses'
export const SUCCESS_RATE_TEXT = 'Near Hits'
export const CURRENT_STREAK_TEXT = 'Money Owed'
export const BEST_STREAK_TEXT = 'Big Tony\'s coming'
