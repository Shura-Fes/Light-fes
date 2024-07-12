import { Contents, Members, Team } from '../Consts';
import { Credits } from './Credits';

export const Credits_B = () => {
    return (
        <Credits
            title={Contents.B}
            scriptings={[Members.Sona, Members.rednamed, Members.oitaku, Members.kai, Members.butsuri]}
            riddlers={[Members.Sona, Members.rednamed, Members.oitaku, Members.kai]}
            manifactures={[]}
            bgms={[]}
            lines={[Members.rednamed]}
            kits={[]}
            system={[]}
            keyvisual={[Members.Jake]}
            castDirection={[Members.Matsun]}
            sites={[Members.rednamed]}
            contentsDirection={[Members.Sona]}
            mainDirection={[Members.Jake]}
            team={Team}
        />
    );
};
