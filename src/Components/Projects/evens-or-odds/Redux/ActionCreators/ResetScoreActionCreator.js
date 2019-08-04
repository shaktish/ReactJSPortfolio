import {ResetScore} from '../ActionType/ActionType';

export const ResetScoreActionCreator = () => {
    //console.log('hello im action creator')
    const correctGuessRecordKey = 'CORREC_GUESS_RECORD_KEY';
    localStorage.setItem(correctGuessRecordKey, 0 );
    
    return {type: ResetScore}
}