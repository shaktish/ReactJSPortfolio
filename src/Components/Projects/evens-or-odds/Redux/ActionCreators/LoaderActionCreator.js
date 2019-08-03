import {EnableLoader, DisableLoader} from '../ActionType/ActionType';

export const EnableLoaderActionCreator = () => {
    return {type: EnableLoader}
}

export const DisableLoaderActionCreator = () => {
    return {type: DisableLoader}
}