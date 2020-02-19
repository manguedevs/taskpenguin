
import { BillAPI } from './api/bill';
import { PersonAPI } from './api/person';

export default {
    bill: new BillAPI(),
    person: new PersonAPI(),
};
