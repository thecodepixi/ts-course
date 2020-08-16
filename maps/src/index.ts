import { User } from './classes/User';
import { Company } from './classes/Company';
import { CustomMap } from './classes/CustomMap';

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);
