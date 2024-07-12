import { Contents, Members, Team } from '../Consts';
import { Credits } from './Credits';

export const Credits_A = () => {
    return (
        <Credits
            title={Contents.A}
            scriptings={[Members.Matsun, Members.Leia, Members.Ichi, Members.Kurehiro]}
            riddlers={[Members.Leia, Members.Ichi, Members.Kurehiro, Members.Matsun]}
            manifactures={[Members.Leia, Members.Kurehiro]}
            bgms={[Members.Nesla]}
            lines={[]}
            system={[Members.Kazuwee]}
            kits={[]}
            keyvisual={[Members.Jake]}
            castDirection={[Members.Matsun]}
            sites={[Members.rednamed]}
            contentsDirection={[Members.Matsun]}
            mainDirection={[Members.Jake]}
            team={Team}
        />
    );
};
