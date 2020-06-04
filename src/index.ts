import { allScriptDefinitions } from './scripts';
import { Lip } from './Lip';
import { ScriptsRegistry } from './registry';


const registry = new ScriptsRegistry();
registry.register(allScriptDefinitions);
const lip = new Lip(registry);

export default lip;
