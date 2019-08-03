import {ResetScore} from '../ActionType/ActionType';

export const ResetScoreActionCreator = () => {
    console.log('hello im action creator')
    return {type: ResetScore}
}