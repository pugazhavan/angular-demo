import { environment } from '../environments/environment';

export const ConstantsMessages = {

    // ENVIRONMENT
    ENVIRONMENT_SETTINGS : environment,

    ROUTING_PAGE : {
        INDEX_PAGE : 'index_page'
    },

    COMMON_ERROR : ' Something went wrong... ',
    ERROR_0 : " Couldn't connect to server ",
    ERROR_401 : ' Session expired. Please signin again. ',
    ERROR_400 : 'Bad Request - Invalid URL',

    //URLS
    URL : {
        GET_API : {
            FETCH : 'fetch'
        },
        POST_API : {
            SAVE : 'save'
        },
        PARAMS : {
            KEY : 'key'
        }
    }
};