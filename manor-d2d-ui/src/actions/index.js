import { POPULATE_DB, GET_STREETS} from "./action-types";

const populateDb = () => ({
    type: POPULATE_DB
});

const getStreets = () => ({
    type: GET_STREETS
});
export {
    populateDb,
    getStreets
}