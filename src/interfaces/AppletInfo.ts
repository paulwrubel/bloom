import p5 from 'p5';
import ActionPayload from 'interfaces/ActionPayload';
import LooseObject from './LooseObject';

export default interface AppletInfo {
    name: string;
    displayName: string;
    version: string;
    description: string;
    tags: string[];
    creationDate: Date;
    cardImage?: string;

    sketchInstance: (p: p5) => void;
    // eslint-disable-next-line @typescript-eslint/ban-types
    controlDrawerComponent: React.FC<Record<string, unknown>>;

    initialState: LooseObject;
    reducer: (state: LooseObject, actionPayload: ActionPayload) => LooseObject;
}
