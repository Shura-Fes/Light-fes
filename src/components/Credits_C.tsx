import { Contents, Members, Team } from '../Consts';
import { Credits } from './Credits';

export const Credits_C = () => {
    return (
        <Credits
            title={Contents.C}
            scriptings={[Members.butsuri, Members.Matsun]}
            riddlers={[Members.butsuri, Members.Ichi, Members.Leia, Members.Kurehiro, Members.Sona]}
            manifactures={[]}
            bgms={[]}
            lines={[]}
            system={[]}
            kits={[Members.Jake]}
            keyvisual={[Members.Jake]}
            castDirection={[Members.Matsun]}
            sites={[Members.rednamed]}
            contentsDirection={[Members.butsuri]}
            mainDirection={[Members.Jake]}
            team={Team}
        />
    );
};
