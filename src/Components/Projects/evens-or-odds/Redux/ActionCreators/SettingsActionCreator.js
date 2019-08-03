// ACTION TYPE
import {StartGame, StopGame, EvenActionType, OddActionType, GameScoreActionType,} from '../ActionType/ActionType';

export const StartGameActionCreator = () => {
    return {
        type : StartGame
    }
}

export const StopGameActionCreator = () => {
    return {
        type : StopGame
    }
}

export const EvenActiveActionCreator =  () => {
    return {
        type : EvenActionType,
    }
}

export const OddActiveActionCreator =  () => {
    return {
        type : OddActionType
    }
}

export const GameScoreActionCreator = (id, userChoice) => {
    return {
        type : GameScoreActionType,
        payLoad : {id, userChoice}
    }
}